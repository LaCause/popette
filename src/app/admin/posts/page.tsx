"use client";

import ArticleCard from "@/app/components/Article/ArticleCard/ArticleCard";
import { GalleryPicker } from "@/app/components/Gallery/GalleryPicker/GalleryPicker";
import TiptapEditor from "@/app/components/ui/TiptapEditor/TiptapEditor";
import { useToast } from "@/app/components/ui/ToastContainer/ToastContainer";
import { Post } from "@/generated/prisma";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type PostFormInput = Omit<Post, "id" | "createdAt" | "date"> & {
  date: string;
};

export default function AdminPostsPage() {
  const { showToast } = useToast();
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState<PostFormInput>({
    slug: "",
    title: "",
    date: new Date().toISOString(),
    image: "",
    excerpt: "",
    content: "",
  });
  const [editId, setEditId] = useState<number | null>(null);

  const [slugTaken, setSlugTaken] = useState(false);

  // Fonction pour vérifier le slug
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

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const resetForm = () => {
    setForm({
      slug: "",
      title: "",
      date: new Date().toISOString(),
      image: "",
      excerpt: "",
      content: "",
    });
    setEditId(null);
  };

  const handleSubmit = async () => {
    const method = editId ? "PUT" : "POST";
    const endpoint = editId ? `/api/posts/${editId}` : "/api/posts";

    const res = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      resetForm();
      fetchPosts();
      showToast({
        title: "Article enregistré",
        variant: "success",
      });
    } else {
      showToast({
        title: "Erreur lors de la soumission",
        variant: "error",
      });
    }
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
    if (res.ok) fetchPosts();
  };

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
          <input
            placeholder="Titre"
            value={form.title}
            onChange={(e) => {
              const newTitle = e.target.value;
              const newSlug = generateSlug(newTitle);
              setForm({ ...form, title: newTitle, slug: newSlug });
              checkSlug(newSlug);
            }}
            className="form-input"
          />
          {slugTaken && (
            <p className="text-sm text-red-500">Ce slug est déjà utilisé</p>
          )}

          <input
            placeholder="Slug"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="form-input"
          />
          <input
            type="date"
            placeholder="Date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="form-input"
          />
          <input
            placeholder="Résumé"
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            className="form-input md:col-span-2"
          />
          <GalleryPicker
            value={form.image!}
            onSelect={(url) => setForm((f) => ({ ...f, image: url }))}
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
          <button
            onClick={handleSubmit}
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
          >
            {editId ? "Mettre à jour" : "Créer"}
          </button>
          {editId && (
            <button
              onClick={resetForm}
              className="text-sm text-gray-600 hover:underline"
            >
              Annuler
            </button>
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
                  onClick={() => handleEdit(post)}
                  className="bg-white text-blue-600 border border-blue-200 px-2 py-1 text-xs rounded shadow-sm hover:bg-blue-50"
                >
                  Modifier
                </button>
                <button
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
