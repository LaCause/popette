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
        <MenuSection items={menuItems} />
        <GallerySection images={galleryItems} />
        <ContactSection />
      </main>
    </>
  );
}
