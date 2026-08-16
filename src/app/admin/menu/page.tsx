"use client";

import GalleryPicker from "@/app/components/Gallery/GalleryPicker/GalleryPicker";
import { ResolvedImage } from "@/app/components/ui/ResolvedImage/ResolvedImage";
import { FormField } from "@/app/components/ui/FormField/FormField";
import { Button } from "@/app/components/ui/Button/Button";
import { useAdminCrud } from "@/app/hooks/useAdminCrud";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface MenuItem {
  id: number;
  title: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category: Category;
}

export default function AdminMenuPage() {
  const { items, editId, setEditId, submit, remove } = useAdminCrud<MenuItem>(
    {
      endpoint: "/api/menu",
      successMessages: { create: "Plat ajouté", update: "Plat mis à jour", delete: "Plat supprimé" },
      errorMessage: "Erreur lors de la soumission",
    }
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("https://placehold.co/600x400.png");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    setCategoryId("");
    setEditId(null);
  };

  const handleSubmit = async () => {
    const ok = await submit({
      title,
      description,
      price: parseFloat(price),
      imageUrl,
      categoryId: parseInt(categoryId),
    });

    if (ok) resetForm();
  };

  const handleEdit = (item: MenuItem) => {
    setTitle(item.title);
    setDescription(item.description ?? "");
    setPrice(item.price.toString());
    setImageUrl(item.imageUrl ?? "");
    setCategoryId(item.category.id.toString());
    setEditId(item.id);
  };

  const itemsByCategory = items.reduce<Record<string, MenuItem[]>>(
    (acc, item) => {
      const cat = item.category.name;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    },
    {},
  );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <section className="border border-gray-200 bg-white p-6 space-y-4 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
          {editId ? "Modifier un plat" : "Ajouter un plat"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            placeholder="Nom du plat"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormField
            placeholder="Prix (€)"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <GalleryPicker value={imageUrl} onSelect={setImageUrl} />
          <FormField
            as="select"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Catégorie</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </FormField>
          <FormField
            as="textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            containerClassName="md:col-span-2"
          />
        </div>

        <div className="flex gap-3">
          <Button type="button" size="sm" onClick={handleSubmit}>
            {editId ? "Mettre à jour" : "Ajouter"}
          </Button>
          {editId && (
            <Button type="button" variant="ghost" size="sm" onClick={resetForm}>
              Annuler
            </Button>
          )}
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-2xl font-title text-on-surface">Plats existants</h2>

        {Object.entries(itemsByCategory).map(
          ([categoryName, categoryItems]) => (
            <div key={categoryName} className="space-y-6">
              {/* Titre de catégorie stylé */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-10 bg-primary rounded-full" />
                <h3 className="text-xl font-semibold text-primary tracking-wide">
                  {categoryName}
                </h3>
              </div>

              {/* Grille des plats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryItems.map((dish) => (
                  <div
                    key={dish.id}
                    className="rounded-xl overflow-hidden border border-outline bg-surface shadow-sm hover:shadow-md transition flex flex-col"
                  >
                    {dish.imageUrl && (
                      <ResolvedImage
                        src={dish.imageUrl}
                        alt={dish.title}
                        className="w-full h-40 object-cover"
                      />
                    )}

                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-on-surface">
                          {dish.title}
                        </h4>
                        <span className="text-sm font-semibold text-primary">
                          {dish.price.toFixed(2)} €
                        </span>
                      </div>

                      {dish.description && (
                        <p className="text-sm text-on-surface/70 line-clamp-3">
                          {dish.description}
                        </p>
                      )}

                      <div className="flex justify-between border-t border-outline/30 pt-2 text-sm">
                        <button
                          type="button"
                          onClick={() => handleEdit(dish)}
                          className="text-blue-600 hover:underline"
                        >
                          ✏️ Modifier
                        </button>
                        <button
                          type="button"
                          onClick={() => remove(dish.id)}
                          className="text-red-600 hover:underline"
                        >
                          🗑 Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        )}
      </section>
    </div>
  );
}
