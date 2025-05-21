import { Metadata } from "next";
import { ResolvedImage } from "../components/ui/ResolvedImage/ResolvedImage";
import { SEO_ABOUT } from "../constants/seo";
import Title from "../components/ui/Title/Title";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { PAGE_ABOUT_US_IMAGE, POPETTE_DOMAIN } from "../constants/general";

export const metadata: Metadata = {
  title: SEO_ABOUT.title,
  description: SEO_ABOUT.description,
  openGraph: {
    title: SEO_ABOUT.title,
    description: SEO_ABOUT.description,
    url: POPETTE_DOMAIN,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_ABOUT.title,
    description: SEO_ABOUT.description,
  },
};

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_ABOUT.jsonLd }}
      />
      <main className="bg-background text-on-tertiary-container py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-20">
          <SectionHeader
            as="h1"
            title="À propos de Popette"
            description="Popette, c’est plus qu’un brunch — c’est une philosophie
              gourmande, locale et conviviale, au cœur d’Arcachon."
          />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Title size="lg" as="h2">
                Notre histoire
              </Title>
              <p className="typography-primary-xs leading-relaxed text-on-tertiary-container/90">
                Tout a commencé par une passion commune : celle de réunir les
                gens autour de bons produits. Depuis nos débuts, nous
                travaillons avec des artisans locaux, nous pressons nos jus à la
                minute, et nous cuisinons chaque plat avec cœur.
              </p>
              <p className="typography-primary-xs leading-relaxed text-on-tertiary-container/80">
                Que ce soit pour un brunch en amoureux, une pause entre amis ou
                un café en solo, notre équipe vous accueille dans une ambiance
                douce, généreuse et sans chichi.
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

          <section className="space-y-8 text-center">
            <Title as="h2" size="lg">
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
                  Un accueil chaleureux, des tables partagées, et des sourires
                  au menu.
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
        </div>
      </main>
    </>
  );
}
