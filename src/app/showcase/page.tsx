import GalleryBrowser from "../components/Gallery/GalleryBrowser/GalleryBrowser";
import { Metadata } from "next";
import { OG_IMAGE_URL, SEO_GALLERY } from "../constants/seo";
import { getAllImages } from "../lib/gallery/gallery";
import Breadcrumb from "../components/Breadcrumb/Breacrumb";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

export const metadata: Metadata = {
  title: SEO_GALLERY.title,
  description: SEO_GALLERY.description,
  alternates: {
    canonical: "/showcase",
  },
  openGraph: {
    siteName: "Popette",
    title: SEO_GALLERY.title,
    description: SEO_GALLERY.description,
    url: "/showcase",
    type: "website",
    images: [OG_IMAGE_URL],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_GALLERY.title,
    description: SEO_GALLERY.description,
    images: [OG_IMAGE_URL],
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
      <SectionWrapper aria-label="Galerie">
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Galerie" }]}
        />
        <GalleryBrowser images={images} />
      </SectionWrapper>
    </>
  );
}
