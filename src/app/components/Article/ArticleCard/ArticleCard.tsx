import { Post } from "@/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import Title from "../../Title/Title";

export type ArticleCardProps = Omit<
  Post,
  "id" | "content" | "createdAt" | "excerpt" | "date"
> & {
  date: string;
  excerpt?: string;
};

export default function ArticleCard({
  slug,
  title,
  image,
  date,
  excerpt,
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-tertiary-container hover:shadow-lg rounded-xl overflow-hidden transition-shadow">
      <Link
        href={`/blog/${slug}`}
        className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        aria-label={`Lire l'article : ${title}`}
      >
        <div className="relative w-full aspect-[3/2]">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
        </div>
        <div className="p-4 space-y-1">
          <Title as="h2" size="lg" className="line-clamp-2">
            {title}
          </Title>
          {excerpt && (
            <p className="typography-primary-xs text-on-tertiary-container/80 line-clamp-2">
              {excerpt}
            </p>
          )}
          <time
            dateTime={new Date(date).toISOString()}
            className="typography-primary-xs italic text-gray-500"
          >
            {formattedDate}
          </time>
        </div>
      </Link>
    </article>
  );
}
