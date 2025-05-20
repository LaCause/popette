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
    fetchItems();
  };

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
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
          Plats existants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items &&
            items.map((dish) => (
              <div
                key={dish.id}
                className="border border-gray-200 p-4 space-y-2 bg-white shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-medium">{dish.title}</h3>
                  <span className="text-sm font-semibold text-primary">
                    {dish.price.toFixed(2)} €
                  </span>
                </div>

                {dish.imageUrl && (
                  <ResolvedImage
                    src={dish.imageUrl}
                    alt={dish.title}
                    className="w-full h-36 object-cover"
                  />
                )}

                <p className="text-sm text-gray-700">{dish.description}</p>

                <div className="text-xs text-gray-500">
                  Catégorie : {dish.category.name}
                </div>

                <div className="flex gap-3 pt-2 text-sm">
                  <button
                    onClick={() => handleEdit(dish)}
                    className="text-blue-600 hover:underline"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(dish.id)}
                    className="text-red-600 hover:underline"
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
