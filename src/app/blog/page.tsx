"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { posts } from "../constants/blog";

const allCategories = [
  "Tous",
  ...Array.from(new Set(posts.map((p) => p.category))),
];

export default function BlogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initial = searchParams.get("cat") ?? "Tous";
  const [category, setCategory] = useState(initial);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (category === "Tous") {
      url.searchParams.delete("cat");
    } else {
      url.searchParams.set("cat", category);
    }
    router.push(url.pathname + url.search);
  }, [category, router]);

  const filteredPosts =
    category === "Tous" ? posts : posts.filter((p) => p.category === category);

  const jsonLdList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filteredPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://popette.brunch/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <main className="bg-[var(--color-background)] text-[var(--color-on-background)] py-16 px-6 sm:px-8 lg:px-16">
      <section className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-title font-semibold mb-4">
            Le blog de Popette
          </h1>
          <p className="text-base font-body text-[var(--color-on-background)]/80 max-w-2xl mx-auto">
            Recettes maison, astuces de chef et inspirations gourmandes tout au
            long de l’année.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-body border transition ${
                category === cat
                  ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                  : "border-[var(--color-outline)] text-[var(--color-on-background)] hover:bg-[var(--color-surface)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="sync">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group border border-[var(--color-outline)] rounded-xl overflow-hidden hover:shadow-lg transition-all bg-[var(--color-surface)]"
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h2 className="font-title text-xl font-semibold group-hover:text-[var(--color-primary)]">
                      {post.title}
                    </h2>
                    <p className="text-sm font-body text-[var(--color-on-surface)]/80">
                      {post.content.replace(/<[^>]+>/g, "").slice(0, 100)}…
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdList) }}
        />
      </section>
    </main>
  );
}
