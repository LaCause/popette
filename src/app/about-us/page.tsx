import { Metadata } from "next";
import { ResolvedImage } from "../components/ui/ResolvedImage/ResolvedImage";
import { OG_IMAGE_URL, SEO_ABOUT } from "../constants/seo";
import Title from "../components/ui/Title/Title";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { PAGE_ABOUT_US_IMAGE } from "../constants/general";
import Breadcrumb from "../components/Breadcrumb/Breacrumb";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO_ABOUT.title,
  alternates: {
    canonical: "/about-us",
  },
  description: SEO_ABOUT.description,
  openGraph: {
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
            <p className="typography-primary-xs leading-relaxed text-on-tertiary-container/90">
              Tout a commencé par une passion commune : celle de réunir les gens
              autour de bons produits. Depuis nos débuts, nous travaillons avec
              des artisans locaux, nous pressons nos jus à la minute, et nous
              cuisinons chaque plat avec cœur.
            </p>
            <p className="typography-primary-xs leading-relaxed text-on-tertiary-container/80">
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
          <Title as="h2" size="lg" className="mt-6">
            Nos valeurs
          </Title>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <Title as="h3" size="sm" className="mb-2">
                🍞 Local & frais
              </Title>
              <p className="typography-primary-xs text-sm text-on-tertiary-container/80">
                Nos produits sont sélectionnés auprès de producteurs du Bassin
                pour une fraîcheur maximale.
              </p>
            </div>
            <div>
              <Title as="h3" size="sm" className="mb-2">
                🫶 Convivialité
              </Title>
              <p className="typography-primary-xs text-sm text-on-tertiary-container/80">
                Un accueil chaleureux, des tables partagées, et des sourires au
                menu.
              </p>
            </div>
            <div>
              <Title as="h3" size="sm" className="mb-2">
                🥐 Fait maison
              </Title>
              <p className="typography-primary-xs text-sm text-on-tertiary-container/80">
                De la brioche au granola, tout est cuisiné sur place avec soin
                et amour.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-title mb-4">
            Popette, votre restaurant brunch à Arcachon
          </h2>

          <p className="text-base font-body leading-relaxed">
            En plein cœur du centre-ville d’<strong>Arcachon</strong>, à
            quelques pas de la plage, <strong>Popette</strong> est plus qu’un
            simple restaurant : c’est un lieu de vie où{" "}
            <strong>le brunch est à l’honneur</strong> tous les jours de la
            semaine.
          </p>

          <p className="mt-4">
            Nous proposons une <strong>cuisine faite maison</strong>, généreuse
            et de saison, élaborée avec des{" "}
            <strong>produits frais et locaux</strong>. Que vous soyez amateur de{" "}
            <Link href="/menu" className="underline hover:text-primary">
              brunch salé
            </Link>{" "}
            ou de{" "}
            <Link href="/gallery" className="underline hover:text-primary">
              pâtisseries artisanales
            </Link>
            , notre{" "}
            <Link href="/menu" className="underline hover:text-primary">
              carte
            </Link>{" "}
            évolue selon les inspirations du chef et les arrivages.
          </p>

          <p className="mt-4">
            Chez Popette, tout est pensé pour vous offrir un moment de détente
            dans une ambiance conviviale. Venez déguster un{" "}
            <strong>avocado toast au pain bio</strong>, un{" "}
            <strong>pancake moelleux au sirop d’érable</strong> ou un{" "}
            <strong>café de spécialité torréfié localement</strong>.{" "}
            <Link href="/contact" className="underline hover:text-primary">
              Contactez-nous
            </Link>{" "}
            pour toute demande particulière.
          </p>

          <p className="mt-4">
            ➕{" "}
            <em>
              <Link href="/contact" className="underline hover:text-primary">
                Options végétariennes, vegan et sans gluten disponibles
              </Link>
            </em>{" "}
            – Nous adaptons nos recettes à vos besoins pour que chacun puisse
            profiter d’un{" "}
            <strong>brunch gourmand sur le Bassin d’Arcachon</strong>.
          </p>

          <p className="mt-4">
            📍{" "}
            <strong>
              Popette – 10 Rue du Maréchal de Lattre de Tassigny, 33120 Arcachon
            </strong>
            <br />
            Ouvert 7j/7 – service continu de 10h à 18h
            <br />
            <Link href="/contact" className="underline hover:text-primary">
              Voir nos horaires hors saison
            </Link>
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-title mb-4">
            Ils ont adoré bruncher chez Popette
          </h2>

          <ul className="space-y-6">
            <li className="border-l-4 border-primary pl-4 italic text-base text-on-surface">
              “Une vraie pépite à Arcachon ! Brunch copieux, produits frais et
              ambiance ultra chaleureuse. Le meilleur avocado toast que j’ai
              mangé.”
              <br />
              <span className="not-italic text-sm text-secondary">
                — Chloé R.
              </span>
            </li>

            <li className="border-l-4 border-primary pl-4 italic text-base text-on-surface">
              “Enfin un coffee shop où on peut se poser toute la journée ! Les
              pancakes sont incroyables, et le personnel adorable.”
              <br />
              <span className="not-italic text-sm text-secondary">
                — Julien M.
              </span>
            </li>

            <li className="border-l-4 border-primary pl-4 italic text-base text-on-surface">
              “Top pour un brunch sans gluten à Arcachon ! J’ai adoré la formule
              complète avec jus pressé et granola maison.”
              <br />
              <span className="not-italic text-sm text-secondary">
                — Émilie G.
              </span>
            </li>
          </ul>

          <p className="mt-6 text-base">
            👉 Vous aussi,{" "}
            <a href="/contact" className="underline hover:text-primary">
              laissez-nous votre avis
            </a>{" "}
            ou{" "}
            <a href="/contact#faq" className="underline hover:text-primary">
              venez nous rencontrer
            </a>{" "}
            au cœur d’Arcachon.
          </p>
        </section>
      </SectionWrapper>
    </>
  );
}
