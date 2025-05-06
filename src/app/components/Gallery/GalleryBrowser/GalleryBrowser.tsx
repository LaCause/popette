"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { IMAGE_TEST_URL } from "@/app/constants/dev";
import { ResolvedImage } from "../../ResolvedImage/ResolvedImage";

const images = Array(8).fill(IMAGE_TEST_URL);
images.push("https://placehold.co/600x400/000000/FFF.png");

export default function GalleryBrowser() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length)),
    []
  );

  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? 0 : (i - 1 + images.length) % images.length
      ),
    []
  );

  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", handleKeys);
    return () => document.removeEventListener("keydown", handleKeys);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-title font-semibold mb-4">
          Galerie Popette
        </h1>
        <p className="text-base font-body text-[var(--color-on-background)]/80 max-w-2xl mx-auto">
          Découvrez en images l’ambiance chaleureuse de notre restaurant, les
          assiettes colorées de nos brunchs maison, et quelques instants volés
          en cuisine.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-full overflow-hidden rounded-xl shadow cursor-pointer"
            style={{ breakInside: "avoid" }}
            onClick={() => setLightboxIndex(idx)}
          >
            <ResolvedImage
              src={src}
              alt={`Photo ${idx + 1} du restaurant`}
              className="w-full h-auto object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ResolvedImage
                src={images[lightboxIndex]}
                alt={`Photo ${lightboxIndex + 1}`}
                className="w-full h-auto object-contain rounded-xl"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-[var(--color-primary)]"
                aria-label="Fermer la lightbox"
              >
                <X size={32} />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-[var(--color-primary)]"
                aria-label="Image précédente"
              >
                <ArrowLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-[var(--color-primary)]"
                aria-label="Image suivante"
              >
                <ArrowRight size={32} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-body text-white bg-black/50 px-3 py-1 rounded-full">
                {lightboxIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
