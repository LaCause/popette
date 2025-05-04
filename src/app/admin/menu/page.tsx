"use client";

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
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const fetchItems = async () => {
    const res = await fetch("/api/dishes");
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

    if (editId) {
      await fetch(`/api/dishes/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } else {
      await fetch("/api/dishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    resetForm();
    fetchItems();
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
    await fetch(`/api/dishes/${id}`, { method: "DELETE" });
    fetchItems();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Gestion du menu</h1>

      <div className="space-y-4 bg-white p-6 shadow-md rounded-md">
        <h2 className="text-xl font-semibold">
          {editId ? "Modifier un plat" : "Ajouter un plat"}
        </h2>

        <input
          className="border p-2 w-full"
          placeholder="Nom du plat"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Prix"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="URL de l'image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <select
          className="border p-2 w-full"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Sélectionner une catégorie</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <div className="flex gap-2">
          <button
            onClick={submit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {editId ? "Mettre à jour" : "Ajouter"}
          </button>
          {editId && (
            <button
              onClick={resetForm}
              className="text-gray-600 underline ml-2"
            >
              Annuler
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Plats existants</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((dish) => (
            <li
              key={dish.id}
              className="border p-4 rounded shadow-sm bg-white space-y-2"
            >
              <div className="text-lg font-bold">{dish.title}</div>
              {dish.imageUrl && (
                <img
                  src={dish.imageUrl}
                  alt={dish.title}
                  className="w-full h-32 object-cover rounded"
                />
              )}
              <div className="text-sm text-gray-700">{dish.description}</div>
              <div className="text-sm">Prix : {dish.price.toFixed(2)} €</div>
              <div className="text-sm text-gray-500">
                Catégorie : {dish.category.name}
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(dish)}
                  className="text-blue-600"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(dish.id)}
                  className="text-red-600"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
