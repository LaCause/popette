"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Post } from "@/generated/prisma";
import Loader from "../../ui/Loader/Loader";

export default function ArticleList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des articles", err);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    if (!category) return posts;
    // Pas de champ "category" dans Post, donc aucun filtrage possible ici
    return posts;
  }, [category, posts]);

  if (loading) {
    return <Loader />;
  }

  if (!filtered.length) {
    return (
      <p className="text-center text-sm text-gray-500">Aucun article trouvé.</p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((post) => (
        <ArticleCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          image={post.image ?? ""}
          excerpt={post.excerpt}
          date={new Date(post.date).toISOString()}
        />
      ))}
    </div>
  );
}
