import GalleryBrowser from "../components/Gallery/GalleryBrowser/GalleryBrowser";
import { Metadata } from "next";
import { SEO_GALLERY } from "../constants/seo";

export const metadata: Metadata = {
  title: SEO_GALLERY.title,
  description: SEO_GALLERY.description,
  openGraph: {
    title: SEO_GALLERY.title,
    description: SEO_GALLERY.description,
    url: "https://popette-brunch.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_GALLERY.title,
    description: SEO_GALLERY.description,
  },
};

export default function ShowcasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_GALLERY.jsonLd }}
      />
      <main className="bg-background text-on-tertiary-container py-16 px-6 sm:px-8 lg:px-16">
        <GalleryBrowser />
      </main>
    </>
  );
}
