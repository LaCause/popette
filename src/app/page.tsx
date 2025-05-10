import { Metadata } from "next";
import { SEO_HOME } from "./constants/seo";
import HeroSection from "./components/Hero/HeroSection/HeroSection";
import MenuSection from "./components/Menu/MenuSection/MenuSection";
import ContactSection from "./components/Contact/ContactSection/ContactSection";
import AboutSection from "./components/About/AboutSection/AboutSection";

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

export default function Page() {
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
        <MenuSection />

        {/* SECTION CONTACT */}
        <ContactSection />
      </main>
    </>
  );
}
