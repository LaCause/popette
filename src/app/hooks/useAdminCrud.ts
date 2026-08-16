"use client";

import { useCallback, useEffect, useState } from "react";
import { useToast } from "@/app/components/ui/ToastContainer/ToastContainer";

interface UseAdminCrudOptions {
  /** Endpoint REST de la ressource, ex: "/api/menu" */
  endpoint: string;
  successMessages?: {
    create?: string;
    update?: string;
    delete?: string;
  };
  errorMessage?: string;
}

/**
 * Factorise le pattern CRUD répété dans les pages admin (menu, catégories,
 * articles) : fetch de la liste, création/mise à jour selon `editId`,
 * suppression, et feedback toast — le tout suivi d'un refetch de la liste.
 */
export function useAdminCrud<T>({
  endpoint,
  successMessages,
  errorMessage = "Une erreur est survenue",
}: UseAdminCrudOptions) {
  const [items, setItems] = useState<T[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const { showToast } = useToast();

  const fetchItems = useCallback(async () => {
    const res = await fetch(endpoint);
    const data = await res.json();
    setItems(data);
  }, [endpoint]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const submit = useCallback(
    async (body: unknown) => {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `${endpoint}/${editId}` : endpoint;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        showToast({
          title: editId
            ? (successMessages?.update ?? "Élément mis à jour")
            : (successMessages?.create ?? "Élément ajouté"),
          variant: "success",
        });
        setEditId(null);
        await fetchItems();
        return true;
      }

      showToast({ title: errorMessage, variant: "error" });
      return false;
    },
    [endpoint, editId, fetchItems, showToast, successMessages, errorMessage]
  );

  const remove = useCallback(
    async (id: number) => {
      const res = await fetch(`${endpoint}/${id}`, { method: "DELETE" });

      if (res.ok) {
        showToast({
          title: successMessages?.delete ?? "Élément supprimé",
          variant: "success",
        });
        await fetchItems();
        return true;
      }

      showToast({ title: errorMessage, variant: "error" });
      return false;
    },
    [endpoint, fetchItems, showToast, successMessages, errorMessage]
  );

  return { items, editId, setEditId, fetchItems, submit, remove };
}
