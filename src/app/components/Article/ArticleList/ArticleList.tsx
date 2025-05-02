"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { posts } from "@/app/constants/blog";
import Link from "next/link";
import Image from "next/image";

export default function ArticleList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filtered = useMemo(() => {
    if (!category) return posts;
    return posts.filter((post) => post.category === category);
  }, [category]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block group bg-[var(--color-surface)] hover:shadow-lg rounded-xl overflow-hidden transition-shadow"
        >
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-4 space-y-2">
            <span className="text-sm font-body text-[var(--color-primary)] uppercase">
              {post.category}
            </span>
            <h2 className="text-xl font-title font-semibold">{post.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
