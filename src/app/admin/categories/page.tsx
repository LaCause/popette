"use client";

import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error("Erreur fetch catégories:", err));
  }, []);

  const addCategory = async () => {
    if (!name || !slug) return;
    const res = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, slug }),
    });

    if (res.ok) {
      const newCat = await res.json();
      setCategories((prev) => [...prev, newCat]);
      setName("");
      setSlug("");
    } else {
      console.error("Erreur ajout catégorie");
    }
  };

  const deleteCategory = async (id: number) => {
    const res = await fetch(`/api/categories/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    } else {
      console.error("Erreur suppression catégorie");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Catégories du menu</h1>

      <ul className="mb-6 space-y-2">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded"
          >
            <div>
              <strong>{cat.name}</strong> — <code>{cat.slug}</code>
            </div>
            <button
              onClick={() => deleteCategory(cat.id)}
              className="text-red-600 hover:underline"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      <div className="space-y-3 border-t pt-6">
        <input
          type="text"
          placeholder="Nom de la catégorie"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Slug (ex: brunch-sucre)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          onClick={addCategory}
          className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
        >
          Ajouter la catégorie
        </button>
      </div>
    </div>
  );
}
