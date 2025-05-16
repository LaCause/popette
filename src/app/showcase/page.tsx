import GalleryBrowser from "../components/Gallery/GalleryBrowser/GalleryBrowser";
import { Metadata } from "next";
import { SEO_GALLERY } from "../constants/seo";
import { POPETTE_DOMAIN } from "../constants/general";
import { getAllImages } from "../lib/gallery/gallery";

export const metadata: Metadata = {
  title: SEO_GALLERY.title,
  description: SEO_GALLERY.description,
  openGraph: {
    title: SEO_GALLERY.title,
    description: SEO_GALLERY.description,
    url: POPETTE_DOMAIN,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_GALLERY.title,
    description: SEO_GALLERY.description,
  },
};

export default async function ShowcasePage() {
  const images = await getAllImages();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_GALLERY.jsonLd }}
      />
      <main className="bg-background text-on-tertiary-container py-16 px-6 sm:px-8 lg:px-16">
        <GalleryBrowser images={images} />
      </main>
    </>
  );
}
