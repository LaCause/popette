import { SEO_MENU } from "../constants/seo";
import { Metadata } from "next";
import MenuBrowser from "../components/Menu/MenuBrowser/MenuBrowser";

export const metadata: Metadata = {
  title: SEO_MENU.title,
  description: SEO_MENU.description,
  openGraph: {
    title: SEO_MENU.title,
    description: SEO_MENU.description,
    url: "https://popette-brunch.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_MENU.title,
    description: SEO_MENU.description,
  },
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_MENU.jsonLd }}
      />
      <MenuBrowser />
    </>
  );
}
