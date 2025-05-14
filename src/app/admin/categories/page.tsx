"use client";

import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  order: number;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [order, setOrder] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error("Erreur fetch catégories:", err));
  }, []);

  const resetForm = () => {
    setName("");
    setSlug("");
    setOrder("");
    setEditId(null);
  };

  const saveCategory = async () => {
    if (!name || !slug) return;

    const body = {
      name,
      slug,
      order: parseInt(order) || 0,
    };

    const method = editId ? "PUT" : "POST";
    const url = editId ? `/api/categories/${editId}` : "/api/categories";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const updated = await res.json();

      setCategories((prev) => {
        if (editId) {
          return prev.map((cat) => (cat.id === updated.id ? updated : cat));
        }
        return [...prev, updated];
      });

      resetForm();
    } else {
      console.error("Erreur ajout/modification catégorie");
    }
  };

  const editCategory = (cat: Category) => {
    setEditId(cat.id);
    setName(cat.name);
    setSlug(cat.slug);
    setOrder(cat.order.toString());
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
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <ul className="mb-6 space-y-2">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded"
          >
            <div>
              <strong>{cat.name}</strong> — <code>{cat.slug}</code>{" "}
              <span className="text-xs text-gray-500">
                (ordre: {cat.order})
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => editCategory(cat)}
                className="text-blue-600 hover:underline"
              >
                Modifier
              </button>
              <button
                onClick={() => deleteCategory(cat.id)}
                className="text-red-600 hover:underline"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="space-y-3 border-t pt-6">
        <h2 className="text-lg font-semibold">
          {editId ? "Modifier la catégorie" : "Ajouter une catégorie"}
        </h2>
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
        <input
          type="number"
          placeholder="Ordre d'affichage (ex: 0, 1, 2...)"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <div className="flex gap-3">
          <button
            onClick={saveCategory}
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
          >
            {editId ? "Mettre à jour" : "Ajouter la catégorie"}
          </button>
          {editId && (
            <button
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-800"
            >
              Annuler
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
