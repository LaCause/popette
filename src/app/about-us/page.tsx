import { Metadata } from "next";
import { ResolvedImage } from "../components/ResolvedImage/ResolvedImage";
import { SEO_ABOUT } from "../constants/seo";

export const metadata: Metadata = {
  title: SEO_ABOUT.title,
  description: SEO_ABOUT.description,
  openGraph: {
    title: SEO_ABOUT.title,
    description: SEO_ABOUT.description,
    url: "https://popette-brunch.com",
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
      <main className="bg-[var(--color-background)] text-[var(--color-on-background)] py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-20">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-title font-semibold">
              À propos de Popette
            </h1>
            <p className="text-base font-body text-[var(--color-on-background)]/80 max-w-2xl mx-auto">
              Popette, c’est plus qu’un brunch — c’est une philosophie
              gourmande, locale et conviviale, au cœur d’Arcachon.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-title font-semibold">
                Notre histoire
              </h2>
              <p className="font-body leading-relaxed text-[var(--color-on-background)]/90">
                Tout a commencé par une passion commune : celle de réunir les
                gens autour de bons produits. Depuis nos débuts, nous
                travaillons avec des artisans locaux, nous pressons nos jus à la
                minute, et nous cuisinons chaque plat avec cœur.
              </p>
              <p className="font-body leading-relaxed text-[var(--color-on-background)]/80">
                Que ce soit pour un brunch en amoureux, une pause entre amis ou
                un café en solo, notre équipe vous accueille dans une ambiance
                douce, généreuse et sans chichi.
              </p>
            </div>
            <div className="overflow-hidden">
              <ResolvedImage
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                alt="Cuisine Popette"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </section>

          <section className="space-y-8 text-center">
            <h2 className="text-2xl font-title font-semibold">Nos valeurs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-title text-lg mb-2">🌱 Local & frais</h3>
                <p className="font-body text-sm text-[var(--color-on-background)]/80">
                  Nos produits sont sélectionnés auprès de producteurs du Bassin
                  pour une fraîcheur maximale.
                </p>
              </div>
              <div>
                <h3 className="font-title text-lg mb-2">🫶 Convivialité</h3>
                <p className="font-body text-sm text-[var(--color-on-background)]/80">
                  Un accueil chaleureux, des tables partagées, et des sourires
                  au menu.
                </p>
              </div>
              <div>
                <h3 className="font-title text-lg mb-2">🥐 Fait maison</h3>
                <p className="font-body text-sm text-[var(--color-on-background)]/80">
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
