import { Metadata } from "next";
import { SEO_HOME } from "./constants/seo";
import HeroSection from "./components/Hero/HeroSection/HeroSection";
import MenuSection from "./components/Menu/MenuSection/MenuSection";
import ContactSection from "./components/Contact/ContactSection/ContactSection";
import AboutSection from "./components/About/AboutSection/AboutSection";
import { getAllPosts } from "./lib/posts/post";

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
  const menuItems = await getAllPosts(4);
  const mockMenuItems = [
    {
      id: 1,
      title: "Toast Avocat 🥑",
      description:
        "Pain de campagne, écrasé d’avocat, œuf poché, graines de courge, citron vert",
      price: 8.5,
      imageUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
      categoryId: 1,
      createdAt: new Date(),
      tags: ["Végétarien"],
    },
    {
      id: 2,
      title: "Pancakes Maison",
      description: "Pancakes moelleux, sirop d’érable, fruits frais de saison",
      price: 7.9,
      imageUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
      categoryId: 1,
      createdAt: new Date(),
      tags: ["Végétarien", "Sans gluten"],
    },
    {
      id: 3,
      title: "Granola Bowl",
      description:
        "Granola croustillant, yaourt nature, fruits rouges, miel bio",
      price: 6.5,
      imageUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
      categoryId: 1,
      createdAt: new Date(),
      tags: ["Vegan", "Healthy"],
    },
  ];
  console.log(menuItems);
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
        <MenuSection items={mockMenuItems} />

        {/* SECTION CONTACT */}
        <ContactSection />
      </main>
    </>
  );
}
