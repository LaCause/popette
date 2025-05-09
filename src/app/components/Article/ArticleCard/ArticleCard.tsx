import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  title: string;
  image: string;
  category: string;
  date: string;
}

export default function ArticleCard({
  slug,
  title,
  image,
  date,
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="block group bg-[var(--color-surface)] hover:shadow-lg rounded-xl overflow-hidden transition-shadow"
    >
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4 space-y-1">
        <div className="text-xs text-gray-500">{formattedDate}</div>
        <h2 className="typography-tertiary-xl text-primary capitalize">
          {title}
        </h2>
        <p className="typography-primary-xs">Excerpt</p>
      </div>
    </Link>
  );
}
