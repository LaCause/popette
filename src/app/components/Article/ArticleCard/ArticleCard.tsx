import Image from "next/image";
import Link from "next/link";
import Title from "../../ui/Title/Title";
import { ArticleCardProps } from "./ArticleCard.const";

interface Props extends ArticleCardProps {
  variant?: "default" | "inline";
}

export default function ArticleCard({
  slug,
  title,
  image,
  excerpt,
  variant = "default",
}: Props) {
  const isInline = variant === "inline";

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group block rounded-xl border border-outline overflow-hidden transition hover:shadow ${
        isInline ? "flex gap-4 items-center" : "bg-tertiary-container"
      }`}
    >
      <div
        className={
          isInline ? "w-32 h-32 flex-shrink-0 relative" : "relative w-full h-48"
        }
      >
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition group-hover:scale-105"
          />
        )}
      </div>

      <div
        className={isInline ? "flex-1 py-2 pr-4 space-y-1" : "p-4 space-y-1"}
      >
        <Title as="h3" size="lg" className="group-hover:text-primary">
          {title}
        </Title>
        <p className="text-sm text-on-tertiary-container/70 line-clamp-2">
          {excerpt && excerpt.replace(/<[^>]+>/g, "").slice(0, 120) + "…"}
        </p>
      </div>
    </Link>
  );
}
