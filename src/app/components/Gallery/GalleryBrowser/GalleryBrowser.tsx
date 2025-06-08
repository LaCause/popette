"use client";

import { ResolvedImage } from "../../ui/ResolvedImage/ResolvedImage";
import { SectionHeader } from "../../SectionHeader/SectionHeader";
import { GalleryImage } from "@/generated/prisma";
import { useLightbox } from "../LightboxProvider/LightboxProvider";

interface GalleryBrowserProps {
  images?: GalleryImage[];
}

export default function GalleryBrowser({ images }: GalleryBrowserProps) {
  const { open } = useLightbox();

  if (!images || images.length === 0) {
    return (
      <h1 className="typography-primary-xl-bold text-primary">Aucune image</h1>
    );
  }

  const lightboxImages = images.map((img) => ({
    url: img.url,
    alt: img.alt ?? "Image galerie",
  }));

  return (
    <section>
      <SectionHeader
        title="Galerie Popette"
        description="Découvrez en images l’ambiance chaleureuse de notre restaurant, les assiettes colorées de nos brunchs maison, et quelques instants volés en cuisine."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, idx) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-xl shadow cursor-pointer"
            onClick={() => open(lightboxImages, idx)}
          >
            <ResolvedImage
              src={image.url}
              alt={image.alt ?? `Photo ${idx + 1} du restaurant`}
              className="w-full h-auto object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
