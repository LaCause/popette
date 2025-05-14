import { Metadata } from "next";
import { SEO_HOME } from "./constants/seo";
import HeroSection from "./components/Hero/HeroSection/HeroSection";
import MenuSection from "./components/Menu/MenuSection/MenuSection";
import ContactSection from "./components/Contact/ContactSection/ContactSection";
import AboutSection from "./components/About/AboutSection/AboutSection";
import { getAllMenuItem } from "./lib/menu/menu";
import { MenuItem } from "@/generated/prisma";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: SEO_HOME.title,
  description: SEO_HOME.description,
  openGraph: {
    title: SEO_HOME.title,
    description: SEO_HOME.description,
    url: "https://popette-brunch.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_HOME.title,
    description: SEO_HOME.description,
  },
};

export default async function Page() {
  let menuItems: MenuItem[] = [];

  try {
    menuItems = await getAllMenuItem(4);
  } catch (error) {
    console.error("[Page Home] Erreur lors de getAllMenuItem:", error);
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_HOME.jsonLd }}
      />
      <main className="min-h-screen bg-[var(--color-background)]">
        {/* <HeroIllustration /> */}
        <HeroSection />

        {/* ABOUT US */}
        <AboutSection />

        {/* SECTION MENU */}
        <Suspense fallback={<p className="text-center text-sm">Chargement…</p>}>
          <MenuSection items={menuItems} />
        </Suspense>

        {/* SECTION CONTACT */}
        <ContactSection />
      </main>
    </>
  );
}
