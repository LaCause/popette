"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  category: string;
  content: string;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState<Omit<Post, "id">>({
    slug: "",
    title: "",
    date: "",
    image: "",
    category: "",
    content: "",
  });
  const [editId, setEditId] = useState<number | null>(null);

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
      date: "",
      image: "",
      category: "",
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

    console.log(JSON.stringify(form));

    if (res.ok) {
      resetForm();
      fetchPosts();
    } else {
      console.error("Erreur lors de la soumission");
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
      date: post.date.split("T")[0], // pour l’input date
      image: post.image,
      category: post.category,
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
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="form-input"
          />
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
            placeholder="Catégorie"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="form-input"
          />
          <input
            placeholder="URL de l’image"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="form-input md:col-span-2"
          />
          <textarea
            placeholder="Contenu (HTML)"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="form-input md:col-span-2 min-h-[200px]"
          />
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
      <section className="space-y-4">
        {posts.length &&
          posts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded bg-white shadow-sm space-y-2"
            >
              <div className="flex flex-col justify-between items-center">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <Image
                  src={post.image ?? "/placeholder.png"}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-2xs h-2xs object-cover"
                />
                <div className="flex gap-3 text-sm">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-blue-600 hover:underline"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:underline"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <span>{post.date.split("T")[0]}</span> —{" "}
                <span>{post.category}</span>
              </div>
              <p className="line-clamp-2 text-sm">
                {post.content.replace(/<[^>]+>/g, "")}
              </p>
            </div>
          ))}
      </section>
    </div>
  );
}
