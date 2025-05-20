"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/generated/prisma";

export default function GalleryPicker({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (url: string) => void;
}) {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then(setImages);
  }, []);

  return (
    <div className="space-y-2 md:col-span-2">
      <p className="text-sm font-medium text-on-surface">
        Image du plat (depuis galerie)
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((img) => (
          <button
            type="button"
            key={img.id}
            onClick={() => onSelect(img.url)}
            className={`relative overflow-hidden rounded-xl ring-offset-2 transition border ${
              img.url === value
                ? "ring-2 ring-primary"
                : "hover:ring-1 hover:ring-outline"
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt ?? "Image"}
              width={300}
              height={200}
              className="w-full h-28 object-cover"
            />
          </button>
        ))}
      </div>

      {value && (
        <p className="text-xs text-on-surface/60 mt-2 truncate">
          Image sélectionnée : {value}
        </p>
      )}
    </div>
  );
}
