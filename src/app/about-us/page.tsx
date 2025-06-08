import { Metadata } from "next";
import { ResolvedImage } from "../components/ui/ResolvedImage/ResolvedImage";
import { OG_IMAGE_URL, SEO_ABOUT } from "../constants/seo";
import Title from "../components/ui/Title/Title";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import {
  PAGE_ABOUT_US_IMAGE,
  PAGE_MENU_PDF_URL,
  POPETTE_GOOGLE_MY_BUISNESS,
} from "../constants/general";
import Breadcrumb from "../components/Breadcrumb/Breacrumb";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import Link from "next/link";
import { SectionGrid } from "../components/SectionGrid/SectionGrid";

export const metadata: Metadata = {
  title: SEO_ABOUT.title,
  alternates: {
    canonical: "/about-us",
  },
  description: SEO_ABOUT.description,
  openGraph: {
    siteName: "Popette",
    title: SEO_ABOUT.title,
    description: SEO_ABOUT.description,
    images: [OG_IMAGE_URL],
    url: "/about-us",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_ABOUT.title,
    description: SEO_ABOUT.description,
    images: [OG_IMAGE_URL],
  },
};

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_ABOUT.jsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Popette",
            image: "https://popette-brunch.com/images/logo.png",
            telephone: "+33666128118",
            email: "popette.arcachon@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "10 Rue du Maréchal de Lattre de Tassigny",
              addressLocality: "Arcachon",
              postalCode: "33120",
              addressCountry: "FR",
            },
            url: "https://popette-brunch.com",
            openingHours: "Mo-Su 10:00-18:00",
            priceRange: "€€",
            servesCuisine: ["Brunch", "Café", "Pâtisseries"],
          },
        }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Proposez-vous des options vegan ou gluten free ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nous avons plusieurs plats adaptés aux régimes vegan, végétariens et sans gluten.",
                },
              },
              {
                "@type": "Question",
                name: "Peut-on emporter un brunch ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nos plats et formules brunch sont disponibles à emporter.",
                },
              },
            ],
          },
        }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Popette",
            image: "https://popette-brunch.com/images/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "10 Rue du Maréchal de Lattre de Tassigny",
              addressLocality: "Arcachon",
              postalCode: "33120",
              addressCountry: "FR",
            },
            telephone: "+33666128118",
            url: "https://popette-brunch.com",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "128",
            },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Chloé R." },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Brunch copieux, produits frais et ambiance ultra chaleureuse. Le meilleur avocado toast que j’ai mangé à Arcachon.",
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Julien M." },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Enfin un coffee shop où on peut se poser toute la journée ! Les pancakes sont incroyables.",
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Émilie G." },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Brunch sans gluten délicieux, mention spéciale au granola maison et au jus frais pressé.",
              },
            ],
          },
        }}
      ></script>
      <SectionWrapper aria-label="A propos de Popette">
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "A propos" }]}
        />
        <SectionHeader
          as="h1"
          title="À propos de Popette"
          description="Popette, c’est plus qu’un brunch — c’est une philosophie
              gourmande, locale et conviviale, au cœur d’Arcachon."
        />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
          <div className="space-y-4">
            <Title size="lg" as="h2">
              Popette : restaurant brunch maison à Arcachon
            </Title>
            <p className="typography-primary-s leading-relaxed text-on-tertiary-container/90">
              Tout a commencé par une passion commune : celle de réunir les gens
              autour de bons produits. Depuis nos débuts, nous travaillons avec
              des artisans locaux, nous pressons nos jus à la minute, et nous
              cuisinons chaque plat avec cœur.
            </p>
            <p className="typography-primary-s leading-relaxed text-on-tertiary-container/80">
              Que ce soit pour un brunch en amoureux, une pause entre amis ou un
              café en solo, notre équipe vous accueille dans une ambiance douce,
              généreuse et sans chichi.
            </p>
          </div>
          <div className="overflow-hidden">
            <ResolvedImage
              src={PAGE_ABOUT_US_IMAGE}
              alt="Cuisine Popette"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </section>

        <section className="space-y-6 text-center">
          <Title as="h2" size="xl" className="mt-6">
            Nos valeurs
          </Title>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <Title as="h3" size="lg" className="mb-2">
                🍞 Local & frais
              </Title>
              <p className="typography-primary-s text-sm text-on-tertiary-container/80">
                Nos produits sont sélectionnés auprès de producteurs du Bassin
                pour une fraîcheur maximale.
              </p>
            </div>
            <div>
              <Title as="h3" size="lg" className="mb-2">
                🫶 Convivialité
              </Title>
              <p className="typography-primary-s text-sm text-on-tertiary-container/80">
                Un accueil chaleureux, des tables partagées, et des sourires au
                menu.
              </p>
            </div>
            <div>
              <Title as="h3" size="lg" className="mb-2">
                🥐 Fait maison
              </Title>
              <p className="typography-primary-s text-sm text-on-tertiary-container/80">
                De la brioche au granola, tout est cuisiné sur place avec soin
                et amour.
              </p>
            </div>
          </div>
        </section>

        <SectionGrid
          align="center"
          image={{
            src: "https://g5h0ukp15rn2n2m5.public.blob.vercel-storage.com/IMG_9429.jpeg",
            alt: "Cuisine Popette",
          }}
          reverse
          className="my-12"
          title={
            <Title as="h2" size="xl">
              Popette, votre restaurant brunch à Arcachon
            </Title>
          }
          content={
            <>
              <header className="space-y-2">
                <p className="text-base">
                  En plein cœur du centre-ville d’<strong>Arcachon</strong>, à
                  quelques pas de la plage,
                  <strong>Popette</strong> est plus qu’un simple restaurant :
                  c’est un lieu de vie où le{" "}
                  <strong>brunch est à l’honneur </strong>
                  tous les jours de la semaine.
                </p>
              </header>

              <p>
                Nous proposons une <strong>cuisine faite maison</strong>,
                généreuse et de saison, élaborée avec des
                <strong>produits frais et locaux</strong>. Que vous soyez
                amateur de{" "}
                <Link
                  href="/menu#brunch-sale"
                  className="underline underline-offset-2"
                >
                  brunch salé
                </Link>{" "}
                ou de{" "}
                <Link
                  href="/menu#patisseries"
                  className="underline underline-offset-2"
                >
                  pâtisseries artisanales
                </Link>
                , notre{" "}
                <a
                  href={PAGE_MENU_PDF_URL}
                  target="_blank"
                  className="underline underline-offset-2"
                >
                  carte
                </a>{" "}
                évolue selon les inspirations du chef et les arrivages.
              </p>

              <p>
                Chez Popette, tout est pensé pour vous offrir un moment de
                détente dans une ambiance conviviale. Venez déguster un{" "}
                <strong>avocado toast au pain de campagne</strong>, un
                <strong>pancake moelleux au sirop d’érable</strong> ou un
                <strong>café de spécialité torréfié localement</strong>.{" "}
                <Link href="/contact" className="underline underline-offset-2">
                  Contactez-nous
                </Link>{" "}
                pour toute demande particulière.
              </p>

              <p className="italic">
                ➕{" "}
                <u>Options végétariennes, vegan et sans gluten disponibles</u> –
                Nous adaptons nos recettes à vos besoins pour que chacun puisse
                profiter d’un moment gourmand sur le Bassin d’Arcachon.
              </p>

              <address className="not-italic font-semibold mt-4 text-primary">
                📍 Popette – 10 Rue du Maréchal de Lattre de Tassigny, 33120
                Arcachon
              </address>
            </>
          }
        />

        <SectionGrid
          align="top"
          title={
            <Title as="h2" size="xl">
              Ils ont adoré bruncher chez Popette
            </Title>
          }
          image={{
            src: PAGE_ABOUT_US_IMAGE,
            alt: "Cuisine Popette",
          }}
          content={
            <>
              <ul className="space-y-6">
                <li className="border-l-4 border-primary pl-4 italic text-base text-on-surface">
                  “Nous recommandons cet endroit. Les serveuses sont
                  accueillantes et les plats proposés sont de très bonnes
                  qualité (les oeufs bénédictes et les pancakes sont WAOUH)“
                  <br />
                  <span className="not-italic text-sm text-secondary">
                    — Laura C.
                  </span>
                </li>

                <li className="border-l-4 border-primary pl-4 italic text-base text-on-surface">
                  “Des boissons et des plats délicieux servis par une équipe
                  très chaleureuse ! Merci beaucoup pour ce joli moment ! À
                  bientôt {":)"}“
                  <br />
                  <span className="not-italic text-sm text-secondary">
                    — Marion R.
                  </span>
                </li>

                <li className="border-l-4 border-primary pl-4 italic text-base text-on-surface">
                  “Ne vous laissez pas rebuter par léchafaudage actuellement en
                  place ! Cette adresse est à tester absolument à Arcachon :
                  produits frais et sains, plats copieux, un frère et une soeur
                  aux petits soins et une ambiance très sympa, vraiment on
                  recommande !“
                  <br />
                  <span className="not-italic text-sm text-secondary">
                    — Roselyne D.
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-base">
                👉 Vous aussi,{" "}
                <a
                  href={POPETTE_GOOGLE_MY_BUISNESS}
                  className="underline hover:text-primary"
                >
                  laissez-nous votre avis
                </a>{" "}
                ou{" "}
                <Link
                  href="/contact#faq"
                  className="underline hover:text-primary"
                >
                  venez nous rencontrer
                </Link>{" "}
                au cœur d’Arcachon.
              </p>
            </>
          }
        />
      </SectionWrapper>
    </>
  );
}
