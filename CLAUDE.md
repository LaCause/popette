# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Aperçu du projet

Popette Brunch — site vitrine + back-office pour un restaurant à Arcachon. Next.js 15 (App Router) + Prisma/PostgreSQL (Neon) + NextAuth, déployé sur Vercel. Le contenu (menu, catégories, articles de blog, galerie photo) est géré dynamiquement depuis un dashboard admin, pas en dur dans le code.

## Commandes

```bash
npm run dev              # serveur de dev (Next.js)
npm run build             # génère le client Prisma puis build Next.js
npm run lint               # next lint (config eslint.config.mjs, ignore src/generated)
npm run start                # démarre le build de prod

npm run prisma:generate      # régénère le client Prisma (sortie custom: src/generated/prisma)
npm run prisma:migrate -- <nom>  # crée/applique une migration en dev
npm run prisma:studio        # ouvre Prisma Studio

npm run create:admin         # exécute scripts/createAdmin.ts (édite le fichier avant usage, voir plus bas)
npm run hard:clean           # rm -rf .next, node_modules, tsbuildinfo + réinstall complète
```

Il n'y a **aucune suite de tests** dans le repo (pas de Jest/Vitest, aucun fichier `*.test.*`/`*.spec.*`). La seule vérification statique disponible est `npm run lint` (et `tsc` implicitement via `next build`).

Après toute modification de `prisma/schema.prisma`, il faut relancer `npm run prisma:generate` — le client est régénéré dans `src/generated/prisma` (chemin custom, pas `node_modules/.prisma`), et ce dossier est exclu du lint.

## Variables d'environnement

Définies en local dans `.env` (non versionné). Les principales consommées par le code :

- `DATABASE_URL` — connexion Postgres (Neon) utilisée par Prisma
- `NEXTAUTH_SECRET`, `NEXTAUTH_URL` — NextAuth (session JWT)
- `RESEND_API_KEY`, `RESEND_OWNER_EMAIL` — envoi d'email via Resend (formulaire de contact)
- `BLOB_READ_WRITE_TOKEN` — upload d'images vers Vercel Blob (galerie)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — clé publique reCAPTCHA v3 côté client
- `MAINTENANCE_MODE` — active le mode maintenance dans `src/middleware.ts` (`"true"`/`"false"`)

- `RECAPTCHA_SECRET_KEY` — clé secrète reCAPTCHA v3 côté serveur, utilisée par `/api/contact` pour vérifier le token via `siteverify`. **À ajouter dans `.env` et sur Vercel** — absente pour l'instant, la route retourne une erreur 400 tant qu'elle n'est pas définie.

## Architecture

### Structure générale
Tout le code applicatif vit sous `src/app` (App Router). Alias TypeScript `@/*` → `src/*`.

- `src/app/(pages)` — routes publiques : `page.tsx` (accueil), `menu/`, `blog/`, `blog/[slug]/`, `contact/`, `about-us/`, `mentions-legales/`, `maintenance/`, `showcase/`
- `src/app/admin/` — dashboard back-office (`menu`, `categories`, `posts`, `gallery`, `login`), protégé par le middleware
- `src/app/api/` — routes REST (`menu`, `categories`, `posts`, `gallery`, `gallery/upload`, `contact`, `og/[slug]`, `auth/[...nextauth]`)
- `src/app/lib/<domaine>/` — accès aux données par domaine (`gallery.ts`, `menu.tsx`, `post.tsx`, `categories.ts`), toutes basées sur le client Prisma partagé `src/app/lib/prisma/prisma.ts`. Seul `categories.ts` couvre le CRUD complet (lecture + écriture) ; les autres domaines n'ont que des lectures, les écritures menu/posts/gallery restent directement dans les routes API
- `src/app/lib/auth/authOptions.ts` — config NextAuth partagée (utilisée par `api/auth/[...nextauth]/route.ts` et par `getServerSession` ailleurs) ; `src/app/lib/auth/requireAdminSession.ts` — helper à appeler en tête des handlers de mutation admin pour exiger une session
- `src/app/lib/schemas/schemas.ts` — schémas Zod de validation (contact, posts), réutilisés à la fois par les routes de création et de mise à jour (ne pas redéfinir un schéma localement dans une route, importer celui-ci)
- `src/app/lib/http/parseIdParam.ts` — parse un paramètre de route `[id]` en entier ou renvoie directement une réponse 400 ; utilisé par toutes les routes dynamiques (`menu/[id]`, `categories/[id]`, `posts/[id]`, `gallery/[id]`)
- `src/app/hooks/useAdminCrud.ts` — factorise le pattern CRUD des pages admin (fetch liste, POST/PUT selon `editId`, DELETE, toast, refetch) ; utilisé par `admin/menu`, `admin/categories`, `admin/posts`. La galerie ne l'utilise pas (upload multipart, pas de update)
- `src/app/components/ui/` — primitives UI partagées : `Button` (variants `default`/`outline`/`ghost`), `FormField` (input/textarea/select avec label+erreur, classe `form-input` par défaut si aucun `className` n'est fourni), `FileInput`, `ResolvedImage`, `ToastContainer`
- `src/app/components/<Domaine>/<Composant>/<Composant>.tsx` — composants organisés par domaine métier (Menu, Article, Gallery, Admin, Contact, Email…), avec parfois un fichier `.const.ts` sibling pour les types/constantes du composant
- `src/generated/prisma` — client Prisma généré (sortie custom définie dans `prisma/schema.prisma`, ne pas éditer à la main, exclu du lint)
- `types/next-auth.d.ts` — extension des types de session NextAuth

### Modèle de données (`prisma/schema.prisma`)
`Admin` (auth back-office), `Category` → `MenuItem` (relation 1-N), `Post` (articles de blog, contenu HTML brut stocké en base), `GalleryImage`. Base Postgres hébergée sur Neon.

### Authentification & protection des routes
- NextAuth avec `CredentialsProvider` (email + mot de passe hashé bcrypt contre la table `Admin`), stratégie `jwt`, page de connexion `/admin/login`. Config centralisée dans `src/app/lib/auth/authOptions.ts`, montée par `src/app/api/auth/[...nextauth]/route.ts`.
- `src/middleware.ts` gère deux choses indépendamment :
  1. redirige vers `/admin/login` si aucun cookie de session n'est présent sur une route `/admin/*` (sauf `/admin/login`)
  2. si `MAINTENANCE_MODE=true`, réécrit toute route non listée dans `allowList` vers `/maintenance`
- Le middleware ne protège que les **pages** `/admin/*` (vérification par simple présence du cookie de session). Les mutations (`POST`/`PUT`/`DELETE`) sur `/api/menu`, `/api/categories`, `/api/posts`, `/api/gallery*` vérifient en plus une session valide côté serveur via `requireAdminSession()` (`getServerSession`) en tête de chaque handler — les `GET` restent publics car ils exposent du contenu déjà public (menu, articles, galerie).
- Compte admin créé via `npm run create:admin -- --name="..." --email="..." --password="..."` (`scripts/createAdmin.ts`), aucun identifiant en dur dans le script.

### Autres points d'architecture
- **Contact** : `ContactBrowser.tsx` valide côté client avec le schéma Zod `contactSchema`, génère un token reCAPTCHA v3, puis poste sur `/api/contact` qui envoie l'email via Resend (composant React `ContactEmail`) ; un champ honeypot (`company`) sert d'anti-spam basique.
- **Galerie** : upload via `/api/gallery/upload`, stockage sur Vercel Blob (`@vercel/blob`), limite 1.5 Mo, types autorisés JPEG/PNG/WebP.
- **Éditeur d'articles** : Tiptap (`TiptapEditor.tsx`) pour le contenu riche des posts, stocké en HTML brut en base.
- **SEO** : `SEOJsonLd.tsx` (JSON-LD), route `api/og/[slug]` pour les images Open Graph dynamiques, `sitemap.xml/route.ts` et `robots.txt/route.ts` générés dynamiquement, constantes SEO centralisées dans `src/app/constants/seo`.
- **Images distantes** : domaines autorisés listés dans `next.config.ts` (`remotePatterns`) — plusieurs domaines de placeholder/démo (`picsum.photos`, `placehold.co`, `unsplash.com`) cohabitent avec le domaine Vercel Blob réel ; à nettoyer une fois le contenu de démo retiré.

## État actuel et pistes d'amélioration

### Corrigé
- **Endpoints admin non authentifiés côté serveur** : toutes les mutations (`POST`/`PUT`/`DELETE`) sur `/api/menu`, `/api/categories`, `/api/posts`, `/api/gallery*` exigent désormais une session NextAuth valide via `requireAdminSession()`.
- **Token reCAPTCHA jamais vérifié** : `/api/contact` vérifie maintenant le token auprès de `siteverify` (score ≥ 0.5) avant d'envoyer l'email. **Action requise : renseigner `RECAPTCHA_SECRET_KEY` dans `.env` et sur Vercel**, sinon la route rejette systématiquement les requêtes.
- **`console.log` de debug en prod** retiré de `src/app/api/contact/route.ts`.
- **Logs Prisma** : `log: ["query"]` n'est plus actif qu'en dehors de la production (`src/app/lib/prisma/prisma.ts`).
- **`scripts/createAdmin.ts`** : identifiants placeholder en dur supprimés, le script prend maintenant `--name`/`--email`/`--password` en argument et valide la longueur du mot de passe.
- **Code mort supprimé** : `src/app/actions/posts/` (Server Actions non utilisées ; `createPost.ts` avait même un bug — import Prisma manquant, `updatePost.ts`/`deletePost.ts` étaient vides) et `AdminPostBrowser.tsx` (composant entièrement commenté, jamais importé). Les pages admin (`src/app/admin/*/page.tsx`) utilisent uniquement les routes REST.
- **`postSchema` dupliqué avec divergence** : `api/posts/[id]/route.ts` redéfinissait localement un schéma légèrement différent de celui de `lib/schemas/schemas.ts` (champ `image` requis vs optionnel) — la route importe maintenant le schéma partagé.
- **Duplication du pattern CRUD admin** : `admin/menu`, `admin/categories`, `admin/posts` réimplémentaient chacune à la main le fetch de liste, le POST/PUT selon `editId`, le DELETE et le toast — factorisé dans `src/app/hooks/useAdminCrud.ts`. Un composant `FormField` (`components/ui/FormField/`) remplace les inputs stylés en dur (3-4 variantes différentes selon le fichier) et le composant `Button` existant (`components/ui/Button/`) est désormais utilisé dans l'admin au lieu de boutons réimplémentés partout ; `Button` accepte maintenant `type`/`disabled` pour ces usages en formulaire.
- **`lib/categories/categories.ts` créé** : seul domaine sans module `lib/` dédié, toute la logique Prisma vivait directement dans les routes API — désormais aligné sur le pattern des autres domaines (mais avec le CRUD complet, pas seulement la lecture).
- **Parsing d'ID de route dupliqué** : le couple `parseInt(params.id, 10)` + vérification `isNaN` répété dans 4 routes `[id]/route.ts` est factorisé dans `src/app/lib/http/parseIdParam.ts`.

### Restant à faire
- **Non testé visuellement** : le refactor CRUD admin (menu/catégories/posts) a été vérifié par `tsc --noEmit` uniquement — Node 16 en local empêche de lancer `next dev`/`next build` ici (voir plus bas). À valider dans un navigateur avec un Node ≥20.9 avant de merger.
- **Absence totale de tests** : aucun framework (Jest/Vitest/Playwright) n'est configuré. Les schémas Zod (`schemas.ts`), `requireAdminSession`, `useAdminCrud` et les routes API sont des candidats naturels pour des tests unitaires/intégration.
- **`AdminGalleryPage.tsx` n'utilise pas `useAdminCrud`** : son flux d'upload (multipart, POST uniquement, pas d'édition) diffère trop du hook pour le réutiliser tel quel ; à revisiter si un besoin d'édition apparaît un jour.
- **`MenuCard` vs `ArticleCard`** : les deux composants dupliquent une logique de variante `inline`/bloc quasi identique — fusion possible en un composant de carte générique, mais plus risqué visuellement (non traité).
- **Nettoyage des domaines d'images de démo** dans `next.config.ts` (`picsum.photos`, `placehold.co`, `unsplash.com`…) une fois le contenu de démo retiré du site.
- **Environnement de dev local en Node 16** : ESLint 9 (`eslint.config.mjs`) et `next dev`/`next build` (Next 16) nécessitent Node ≥18.18/≥20.9 respectivement et échouent ici — à mettre à jour pour pouvoir lancer `npm run lint`/`npm run dev`/`npm run build`.
- **TODO produit listés dans le README** : section "Avis clients", réservation informelle par email, optimisation LCP des images hero, export PDF de la carte depuis le back-office.
