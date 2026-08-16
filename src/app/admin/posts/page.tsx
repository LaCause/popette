"use client";

import ArticleCard from "@/app/components/Article/ArticleCard/ArticleCard";
import GalleryPicker from "@/app/components/Gallery/GalleryPicker/GalleryPicker";
import TiptapEditor from "@/app/components/ui/TiptapEditor/TiptapEditor";
import { FormField } from "@/app/components/ui/FormField/FormField";
import { Button } from "@/app/components/ui/Button/Button";
import { useAdminCrud } from "@/app/hooks/useAdminCrud";
import { Post } from "@/generated/prisma";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type PostFormInput = Omit<Post, "id" | "createdAt" | "date"> & {
  date: string;
};

const emptyForm: PostFormInput = {
  slug: "",
  title: "",
  date: new Date().toISOString(),
  image: "",
  excerpt: "",
  content: "",
};

export default function AdminPostsPage() {
  const { items: posts, editId, setEditId, submit, remove } =
    useAdminCrud<Post>({
      endpoint: "/api/posts",
      successMessages: { create: "Article enregistré", update: "Article enregistré" },
      errorMessage: "Erreur lors de la soumission",
    });

  const [form, setForm] = useState<PostFormInput>(emptyForm);
  const [slugTaken, setSlugTaken] = useState(false);

  const checkSlug = useDebouncedCallback(async (slug: string) => {
    const res = await fetch(`/api/posts/check-slug?slug=${slug}`);
    const { exists } = await res.json();
    setSlugTaken(exists);
  }, 1000);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditId(null);
  };

  const handleSubmit = async () => {
    const ok = await submit(form);
    if (ok) resetForm();
  };

  const handleDelete = (id: number) => remove(id);

  const handleEdit = (post: Post) => {
    setForm({
      slug: post.slug,
      title: post.title,
      date: new Date(post.date).toISOString().split("T")[0],
      image: post.image,
      excerpt: post.excerpt,
      content: post.content,
    });
    setEditId(post.id);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <h1 className="text-2xl font-bold">Gestion des articles</h1>

      {/* Formulaire */}
      <section className="border p-6 bg-white shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">
          {editId ? "Modifier un article" : "Créer un nouvel article"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            placeholder="Titre"
            value={form.title}
            onChange={(e) => {
              const newTitle = e.target.value;
              const newSlug = generateSlug(newTitle);
              setForm({ ...form, title: newTitle, slug: newSlug });
              checkSlug(newSlug);
            }}
          />
          {slugTaken && (
            <p className="text-sm text-red-500">Ce slug est déjà utilisé</p>
          )}

          <FormField
            placeholder="Slug"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
          <FormField
            type="date"
            placeholder="Date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <FormField
            placeholder="Résumé"
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            containerClassName="md:col-span-2"
          />
          <GalleryPicker
            value={form.image!}
            onSelect={(url: string) => setForm((f) => ({ ...f, image: url }))}
          />
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contenu (éditeur visuel)
            </label>
            <TiptapEditor
              content={form.content}
              onChange={(html) =>
                setForm((prev) => ({ ...prev, content: html }))
              }
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="button" size="sm" onClick={handleSubmit}>
            {editId ? "Mettre à jour" : "Créer"}
          </Button>
          {editId && (
            <Button type="button" variant="ghost" size="sm" onClick={resetForm}>
              Annuler
            </Button>
          )}
        </div>
      </section>

      {/* Liste des articles */}
      <section className="space-y-8 mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Articles existants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="relative group">
              <ArticleCard
                slug={post.slug}
                title={post.title}
                image={post.image}
                excerpt={post.excerpt}
                date={new Date(post.date).toISOString()}
              />
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => handleEdit(post)}
                  className="bg-white text-blue-600 border border-blue-200 px-2 py-1 text-xs rounded shadow-sm hover:bg-blue-50"
                >
                  Modifier
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(post.id)}
                  className="bg-white text-red-600 border border-red-200 px-2 py-1 text-xs rounded shadow-sm hover:bg-red-50"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
