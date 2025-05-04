import { posts } from "@/app/constants/blog";
import Image from "next/image";
import Link from "next/link";

export const ArticleSuggestion = ({ exclude }: { exclude: string }) => {
  const suggestions = posts.filter((p) => p.slug !== exclude).slice(0, 2);

  if (suggestions.length === 0) return null;

  return (
    <div className="mt-16 border-t border-[var(--color-outline)] pt-8">
      <h2 className="text-2xl font-title mb-6">Autres articles</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {suggestions.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block bg-[var(--color-surface)] rounded-xl overflow-hidden border border-[var(--color-outline)] hover:shadow transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-title text-lg group-hover:text-[var(--color-primary)]">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--color-on-surface)]/70 line-clamp-2">
                {p.content.replace(/<[^>]+>/g, "").slice(0, 120)}…
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
