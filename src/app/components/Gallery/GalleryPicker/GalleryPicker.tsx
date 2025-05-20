"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function GalleryPicker({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (url: string) => void;
}) {
  const [images, setImages] = useState<
    { id: number; url: string; alt: string }[]
  >([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then(setImages);
  }, []);

  return (
    <div className="space-y-2">
      <div className="text-sm font-medium">
        Choisir une image dans la galerie
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => onSelect(img.url)}
            className={`relative border rounded overflow-hidden transition outline-none ring-offset-2 ${
              value === img.url
                ? "ring-2 ring-primary"
                : "hover:ring-1 hover:ring-outline"
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt || "Image"}
              width={100}
              height={80}
              className="object-cover w-full h-20"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
