"use client";

import Link from "next/link";
import { ResolvedImage } from "../../ui/ResolvedImage/ResolvedImage";
import { SectionHeader } from "../../SectionHeader/SectionHeader";
import { POPETTE_GALLERY_IMAGES } from "@/app/constants/general";

export default function GallerySection() {
  return (
    <section
      className="bg-tertiary-container pt-24 px-6 sm:px-8 lg:px-16"
      id="galerie"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <SectionHeader
          title="Galerie Popette"
          description="Ambiance, brunchs maison, café latté et pâtisseries : découvrez en images l’univers chaleureux de Popette au cœur d’Arcachon."
        />

        {/* Mini galerie */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {POPETTE_GALLERY_IMAGES.slice(0, 2).map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow cursor-pointer"
              style={{ breakInside: "avoid" }}
            >
              <ResolvedImage
                src={src}
                alt={`Photo ${idx + 1} du restaurant`}
                className="w-full h-auto object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
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
