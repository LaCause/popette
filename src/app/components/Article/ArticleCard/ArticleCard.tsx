import Image from "next/image";
import Link from "next/link";
import Title from "../../Title/Title";
import { ArticleCardProps } from "./ArticleCard.const";

export default function ArticleCard({
  slug,
  title,
  image,
  excerpt,
}: ArticleCardProps) {
  return (
    <Link
      key={slug}
      href={`/blog/${slug}`}
      className="group block bg-tertiary-container rounded-xl overflow-hidden border border-outline hover:shadow transition"
    >
      <div className="relative w-full h-48">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        )}
      </div>
      <div className="p-4 space-y-1">
        <Title as="h3" size="sm" className="group-hover:text-primary">
          {title}
        </Title>
        <p className="text-sm text-on-tertiary-container/70 line-clamp-2">
          {excerpt && excerpt.replace(/<[^>]+>/g, "").slice(0, 120) + "…"}
        </p>
      </div>
    </Link>
  );
}
