// components/Lightbox/LightboxProvider.tsx
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { ResolvedImage } from "@/app/components/ui/ResolvedImage/ResolvedImage";

export interface LightboxImage {
  url: string;
  alt?: string;
}

interface LightboxContextType {
  open: (images: LightboxImage[], index: number) => void;
  close: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(
  undefined
);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const open = (imgs: LightboxImage[], startIndex: number) => {
    setImages(imgs);
    setIndex(startIndex);
  };

  const close = () => setIndex(null);

  const next = () =>
    setIndex((i) => (i === null ? 0 : (i + 1) % images.length));
  const prev = () =>
    setIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));

  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", handleKeys);
    return () => document.removeEventListener("keydown", handleKeys);
  }, [index, images.length]);

  return (
    <LightboxContext.Provider value={{ open, close }}>
      {children}

      <AnimatePresence>
        {index !== null && images[index] && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ResolvedImage
                src={images[index].url}
                alt={images[index].alt ?? `Image ${index + 1}`}
                className="w-full h-auto object-contain rounded-xl"
              />
              <button
                onClick={close}
                className="absolute top-4 right-4 text-white hover:text-primary"
                aria-label="Fermer la lightbox"
              >
                <X size={32} />
              </button>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-primary"
                aria-label="Image précédente"
              >
                <ArrowLeft size={32} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-primary"
                aria-label="Image suivante"
              >
                <ArrowRight size={32} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-body text-white bg-black/50 px-3 py-1 rounded-full">
                {index + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
