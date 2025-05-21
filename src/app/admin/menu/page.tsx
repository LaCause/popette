"use client";

import GalleryPicker from "@/app/components/Gallery/GalleryPicker/GalleryPicker";
import { ResolvedImage } from "@/app/components/ui/ResolvedImage/ResolvedImage";
import { useToast } from "@/app/components/ui/ToastContainer/ToastContainer";
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
  const [items, setItems] = useState<MenuItem[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("https://placehold.co/600x400.png");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const { showToast } = useToast();

  const fetchItems = async () => {
    const res = await fetch("/api/menu");
    const data = await res.json();
    setItems(data);
  };

  const fetchCategories = async () => {
    const res = await fetch("/api/categories");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    setCategoryId("");
    setEditId(null);
  };

  const submit = async () => {
    const body = {
      title,
      description,
      price: parseFloat(price),
      imageUrl,
      categoryId: parseInt(categoryId),
    };

    const method = editId ? "PUT" : "POST";
    const endpoint = editId ? `/api/menu/${editId}` : "/api/menu";

    const res = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      showToast({
        title: editId ? "Plat mis à jour" : "Plat ajouté",
        variant: "success",
      });
      resetForm();
      fetchItems();
    } else {
      showToast({
        title: "Erreur lors de la soumission",
        variant: "error",
      });
    }
  };
  const handleEdit = (item: MenuItem) => {
    setTitle(item.title);
    setDescription(item.description ?? "");
    setPrice(item.price.toString());
    setImageUrl(item.imageUrl ?? "");
    setCategoryId(item.category.id.toString());
    setEditId(item.id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/menu/${id}`, { method: "DELETE" });
    showToast({ title: "Plat supprimé", variant: "success" });
    fetchItems();
  };

  const itemsByCategory = items.reduce<Record<string, MenuItem[]>>(
    (acc, item) => {
      const cat = item.category.name;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    },
    {}
  );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <section className="border border-gray-200 bg-white p-6 space-y-4 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
          {editId ? "Modifier un plat" : "Ajouter un plat"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="form-input"
            placeholder="Nom du plat"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="form-input"
            placeholder="Prix (€)"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <GalleryPicker value={imageUrl} onSelect={setImageUrl} />
          <select
            className="form-input"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Catégorie</option>
            {categories &&
              categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
          </select>
          <textarea
            className="form-input md:col-span-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={submit}
            className="bg-primary text-white px-5 py-2 text-sm tracking-wide hover:opacity-90 transition"
          >
            {editId ? "Mettre à jour" : "Ajouter"}
          </button>
          {editId && (
            <button
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-800 text-sm"
            >
              Annuler
            </button>
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
                          onClick={() => handleEdit(dish)}
                          className="text-blue-600 hover:underline"
                        >
                          ✏️ Modifier
                        </button>
                        <button
                          onClick={() => handleDelete(dish.id)}
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
          )
        )}
      </section>
    </div>
  );
}
