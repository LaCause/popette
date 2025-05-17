"use client";

import Link from "next/link";
import { ResolvedImage } from "../../ui/ResolvedImage/ResolvedImage";
import { SectionHeader } from "../../SectionHeader/SectionHeader";
import { POPETTE_GALLERY_IMAGES } from "@/app/constants/general";
import { useLightbox } from "../LightboxProvider/LightboxProvider";

export default function GallerySection() {
  const { open } = useLightbox();

  const images = POPETTE_GALLERY_IMAGES.slice(0, 2).map((url) => ({
    url,
    alt: "Photo du restaurant Popette",
  }));

  return (
    <section
      className="bg-tertiary-container pt-24 px-6 sm:px-8 lg:px-16"
      id="galerie"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader
          title="Galerie Popette"
          description="Ambiance, brunchs maison, café latté et pâtisseries : découvrez en images l’univers chaleureux de Popette au cœur d’Arcachon."
        />
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow cursor-pointer"
              style={{ breakInside: "avoid" }}
              onClick={() => open(images, idx)}
            >
              <ResolvedImage
                src={img.url}
                alt={img.alt}
                className="w-full h-auto object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/showcase"
            className="inline-block rounded-full px-8 py-3 bg-primary text-on-primary font-body font-semibold text-sm uppercase shadow hover:scale-105 transition"
          >
            Voir la galerie complète
          </Link>
        </div>
      </div>
    </section>
  );
}
