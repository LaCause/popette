"use client";

import { MenuItem } from "@/generated/prisma";
import Title from "../../Title/Title";
import Image from "next/image";

interface MenuCardProps {
  item: MenuItem & { tags?: string[] };
  variant?: "default" | "inline";
}

export default function MenuCard({ item, variant = "default" }: MenuCardProps) {
  const isInline = variant === "inline";

  const containerClass =
    "border rounded-xl bg-background text-[var(--color-on-background)] border-[var(--color-outline)]";

  const layoutClass = isInline
    ? "flex gap-4 items-start"
    : "flex flex-col h-full";

  const imageWrapperClass = isInline
    ? "relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-l-xl"
    : "relative w-full h-48 sm:h-52 overflow-hidden rounded-t-xl";

  const contentClass = isInline
    ? "flex flex-col justify-between gap-3 flex-1 py-2 pr-4"
    : "flex flex-col justify-between gap-3 px-4 py-4 sm:px-5 sm:py-4 flex-1";

  return (
    <article
      itemScope
      itemType="https://schema.org/MenuItem"
      className={`${containerClass} ${layoutClass}`}
    >
      {/* Image */}
      <div className={imageWrapperClass}>
        {item.imageUrl && (
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            itemProp="image"
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>

      {/* Infos */}
      <div className={contentClass}>
        <header className="space-y-1">
          <Title
            itemProp="name"
            as="h3"
            size="lg"
            className="transition-colors duration-200 group-hover:text-primary"
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

          {item.tags && item.tags.length > 0 && (
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
