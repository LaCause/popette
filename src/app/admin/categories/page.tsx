"use client";

import { useState } from "react";
import { useAdminCrud } from "@/app/hooks/useAdminCrud";
import { FormField } from "@/app/components/ui/FormField/FormField";
import { Button } from "@/app/components/ui/Button/Button";

interface Category {
  id: number;
  name: string;
  slug: string;
  order: number;
}

export default function AdminCategoriesPage() {
  const { items: categories, editId, setEditId, submit, remove } =
    useAdminCrud<Category>({
      endpoint: "/api/categories",
      successMessages: {
        create: "Catégorie ajoutée",
        update: "Catégorie mise à jour",
        delete: "Catégorie supprimée",
      },
      errorMessage: "Erreur lors de l'enregistrement de la catégorie",
    });

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [order, setOrder] = useState("");

  const resetForm = () => {
    setName("");
    setSlug("");
    setOrder("");
    setEditId(null);
  };

  const saveCategory = async () => {
    if (!name || !slug) return;

    const ok = await submit({
      name,
      slug,
      order: parseInt(order) || 0,
    });

    if (ok) resetForm();
  };

  const editCategory = (cat: Category) => {
    setEditId(cat.id);
    setName(cat.name);
    setSlug(cat.slug);
    setOrder(cat.order.toString());
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
                type="button"
                onClick={() => editCategory(cat)}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Modifier
              </button>
              <button
                type="button"
                onClick={() => remove(cat.id)}
                className="text-sm font-medium text-red-600 hover:underline"
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
        <FormField
          type="text"
          placeholder="Nom de la catégorie"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormField
          type="text"
          placeholder="Slug (ex: brunch-sucre)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <FormField
          type="number"
          placeholder="Ordre d'affichage (ex: 0, 1, 2...)"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        />
        <div className="flex gap-3">
          <Button type="button" size="sm" onClick={saveCategory}>
            {editId ? "Mettre à jour" : "Ajouter la catégorie"}
          </Button>
          {editId && (
            <Button type="button" variant="ghost" size="sm" onClick={resetForm}>
              Annuler
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
