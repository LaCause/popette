import { Metadata } from "next";
import { OG_IMAGE_URL, SEO_HOME } from "./constants/seo";
import HeroSection from "./components/Hero/HeroSection/HeroSection";
import MenuSection from "./components/Menu/MenuSection/MenuSection";
import ContactSection from "./components/Contact/ContactSection/ContactSection";
import AboutSection from "./components/About/AboutSection/AboutSection";
import { getAllMenuItem } from "./lib/menu/menu";
import { GalleryImage, MenuItem } from "@/generated/prisma";
import GallerySection from "./components/Gallery/GallerySection/GallerySection";
import { getAllImages } from "./lib/gallery/gallery";

export const metadata: Metadata = {
  title: SEO_HOME.title,
  description: SEO_HOME.description,
  openGraph: {
    siteName: "Popette",
    title: SEO_HOME.title,
    images: [OG_IMAGE_URL],
    description: SEO_HOME.description,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_HOME.title,
    description: SEO_HOME.description,
    images: [OG_IMAGE_URL],
  },
};

export default async function Page() {
  let menuItems: MenuItem[] = [];
  let galleryItems: GalleryImage[] = [];

  try {
    galleryItems = await getAllImages(3);
  } catch (error) {
    console.error("[Page Home] Erreur lors de getAllImages:", error);
  }

  try {
    menuItems = await getAllMenuItem(2);
  } catch (error) {
    console.error("[Page Home] Erreur lors de getAllMenuItem:", error);
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_HOME.jsonLd }}
      />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <section
          aria-labelledby="formules-brunch"
          className="max-w-3xl mx-auto px-4 py-12 text-center text-on-background"
        >
          <h2 id="formules-brunch" className="text-2xl font-title mb-4">
            Nos formules brunch maison
          </h2>
          <p className="text-base leading-relaxed font-body">
            Que vous soyez du matin ou du midi, nos{" "}
            <a href="/menu" className="underline underline-offset-2">
              formules brunch
            </a>{" "}
            sont pensées pour toutes les faims. La{" "}
            <strong>formule gourmande</strong> comprend un plat salé, un plat
            sucré, une boisson fraîche et un café ou un thé. Pour les plus
            jeunes, la <strong>formule enfant</strong> est parfaitement adaptée.
            Toutes nos options sont disponibles à emporter.
          </p>
        </section>
        <section
          aria-labelledby="valeurs-popette"
          className="max-w-3xl mx-auto px-4 py-12 text-center text-on-background"
        >
          <h2 id="valeurs-popette" className="text-2xl font-title mb-4">
            Des produits frais, du fait maison, et beaucoup d’amour
          </h2>
          <p className="text-base leading-relaxed font-body">
            Chez Popette, nous travaillons chaque jour des{" "}
            <strong>produits frais</strong> issus de circuits courts, avec une
            priorité donnée aux producteurs locaux. Tous nos plats, pâtisseries
            et boissons sont faits maison. Nous proposons également des
            alternatives <strong>végétariennes</strong>, <strong>vegan</strong>{" "}
            et <strong>sans gluten</strong> pour répondre à tous les régimes
            alimentaires.
          </p>
        </section>
        <section
          aria-labelledby="infos-pratiques"
          className="max-w-3xl mx-auto px-4 py-12 text-center text-on-background"
        >
          <h2 id="infos-pratiques" className="text-2xl font-title mb-4">
            Infos pratiques
          </h2>
          <p className="text-base leading-relaxed font-body">
            Retrouvez-nous <strong>7j/7</strong> en plein cœur d’Arcachon, au
            <a
              href="https://maps.google.com/?q=Popette+Arcachon"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-2"
            >
              10 Rue du Maréchal de Lattre de Tassigny
            </a>
            .
            <br />
            Nous ne prenons <strong>pas de réservation</strong> – venez quand
            vous voulez, le service est continu de 10h à 18h (hors saison :
            11h–17h, fermé le mardi).
          </p>
        </section>
        <section
          aria-labelledby="avis-clients"
          className="max-w-3xl mx-auto px-4 py-12 text-center text-on-background"
        >
          <h2 id="avis-clients" className="text-2xl font-title mb-4">
            Ce que disent nos clients
          </h2>
          <blockquote className="italic text-base leading-relaxed font-body mb-4">
            “Le meilleur brunch d’Arcachon, tout est fait maison et l’équipe est
            adorable.”
          </blockquote>
          <p className="text-sm text-muted">
            ★★★★★ 4.8/5 – sur Google et réseaux sociaux
          </p>
        </section>
        <section
          aria-labelledby="ambiance-popette"
          className="max-w-3xl mx-auto px-4 py-12 text-center text-on-background"
        >
          <h2 id="ambiance-popette" className="text-2xl font-title mb-4">
            Popette, une ambiance chaleureuse au cœur d’Arcachon
          </h2>
          <p className="text-base leading-relaxed font-body">
            Dès l’entrée, vous êtes accueilli dans une atmosphère cosy et
            conviviale. L’équipe Popette met un point d’honneur à vous faire
            sentir comme à la maison, que ce soit pour un café rapide ou un
            brunch complet.
            <strong>
              Décoration soignée, musique douce et gourmandises en vitrine
            </strong>{" "}
            font partie du charme de notre restaurant.
          </p>
        </section>
        <MenuSection items={menuItems} />
        <GallerySection images={galleryItems} />
        <ContactSection />
      </main>
    </>
  );
}
