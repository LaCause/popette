import { MenuItem } from "@/generated/prisma";
import Title from "../../Title/Title";
import Image from "next/image";

interface MenuCardProps {
  item: MenuItem & { tags?: string[] };
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article
      itemScope
      itemType="https://schema.org/MenuItem"
      className="flex flex-col h-full border rounded-xl bg-background text-[var(--color-on-background)] border-[var(--color-outline)] transition hover:shadow-md hover:scale-[1.01] duration-200"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 w-full flex-shrink-0">
        {item.imageUrl && (
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            itemProp="image"
            className="object-cover object-center"
          />
        )}
      </div>

      {/* Infos */}
      <div className="flex flex-col justify-between gap-3 px-4 py-4 sm:px-5 sm:py-4 flex-1">
        <header className="space-y-1">
          <Title
            itemProp="name"
            as="h3"
            size="lg"
            className="group-hover:text-primary"
          >
            {item.title}
          </Title>

          {item.description && (
            <p
              itemProp="description"
              className="font-body text-sm sm:text-base text-[var(--color-on-background)]/80 leading-relaxed"
            >
              {item.description}
            </p>
          )}
        </header>

        <footer className="flex items-center justify-between mt-2">
          <span
            itemScope
            itemType="https://schema.org/Offer"
            className="font-body font-semibold text-sm sm:text-base text-[var(--color-primary)]"
          >
            <span itemProp="price" content={item.price.toFixed(2)}>
              {item.price.toFixed(2)} €
            </span>
            <meta itemProp="priceCurrency" content="EUR" />
          </span>

          {item && item.tags && item.tags?.length > 0 && (
            <ul className="flex flex-wrap gap-1 text-xs text-[var(--color-on-surface)]/70">
              {item.tags.map((tag, i) => (
                <li
                  key={i}
                  className="px-2 py-0.5 border border-[var(--color-outline)] rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    </article>
  );
}
