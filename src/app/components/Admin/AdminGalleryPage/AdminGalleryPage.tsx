"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileInput } from "../../ui/FileInput/FileInput";
import { ResolvedImage } from "../../ui/ResolvedImage/ResolvedImage";
import { useToast } from "../../ui/ToastContainer/ToastContainer";
import Title from "../../ui/Title/Title";

interface GalleryImage {
  id: number;
  url: string;
  alt: string | null;
}

export default function AdminGalleryPage() {
  const { showToast } = useToast();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [alt, setAlt] = useState("");

  const fetchImages = async () => {
    const res = await fetch("/api/gallery");
    const data = await res.json();
    setImages(data);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt", alt);

    const res = await fetch("/api/gallery/upload", {
      method: "POST",
      body: formData,
    });

    if (res.status === 400) {
      const error = await res.json();
      showToast({ title: error.error, variant: "error" });
      return;
    }

    if (res.ok) {
      setFile(null);
      setAlt("");
      fetchImages();
      showToast({ title: "Image ajoutée", variant: "success" });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer cette image ?")) return;

    const res = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchImages();
      showToast({ title: "Image supprimée", variant: "success" });
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <section className="bg-white p-6 rounded-xl shadow-md space-y-4 text-center">
        <Title as="h1" size="xl">
          Ajouter une image
        </Title>
        <FileInput onChange={(file) => setFile(file)} />
        <br />
        {file && (
          <div className="flex items-center space-x-4 mt-2">
            <ResolvedImage
              src={URL.createObjectURL(file)}
              alt="Aperçu"
              className="w-32 h-32 object-cover rounded-xl border border-outline"
            />
            <input
              type="text"
              placeholder="Texte alternatif"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              className="flex-1 border border-outline p-2 rounded text-sm"
            />
          </div>
        )}
        <motion.button
          onClick={handleUpload}
          disabled={!file}
          className="relative overflow-hidden rounded-xl px-6 py-2 font-semibold text-white shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: "var(--color-primary)",
          }}
        >
          <span className="relative z-10">Uploader</span>
          <motion.span
            layoutId="upload-glow"
            className="absolute inset-0 z-0 opacity-10 blur-xl"
            animate={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6), transparent 70%)",
            }}
          />
        </motion.button>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-on-surface mb-4">Galerie</h2>
        {images.length === 0 ? (
          <p className="text-on-surface/60">Aucune image pour le moment.</p>
        ) : (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {images.map((img) => (
              <div
                key={img.id}
                className="relative group rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <ResolvedImage
                  src={img.url}
                  alt={img.alt ?? ""}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <p className="text-xs text-on-surface truncate">{img.alt}</p>
                </div>
                <button
                  onClick={() => handleDelete(img.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 text-sm opacity-0 group-hover:opacity-100 transition"
                  title="Supprimer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
