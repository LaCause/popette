"use client";

import Link from "next/link";
import { ResolvedImage } from "../../ui/ResolvedImage/ResolvedImage";
import { SectionHeader } from "../../SectionHeader/SectionHeader";
import {
  LightboxImage,
  useLightbox,
} from "../LightboxProvider/LightboxProvider";
import { Button } from "../../ui/Button/Button";
import { GalleryImage } from "@/generated/prisma";

interface GallerySectionInterface {
  images: GalleryImage[];
}

export default function GallerySection({ images }: GallerySectionInterface) {
  const { open } = useLightbox();

  const galleryImages: LightboxImage[] = images.map((img) => ({
    url: img.url,
    alt: img.alt ?? "Image galerie",
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
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow cursor-pointer"
              style={{ breakInside: "avoid" }}
              onClick={() => open(galleryImages, idx)}
            >
              <ResolvedImage
                src={img.url}
                alt={img.alt ?? "Image galerie"}
                className="w-full h-auto object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/showcase">Voir la galerie complète</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
