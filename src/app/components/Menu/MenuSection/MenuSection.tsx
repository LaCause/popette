"use client";

import type { MenuItem } from "@/generated/prisma";
import MenuCard from "../MenuCard/MenuCard";
import Title from "../../ui/Title/Title";

export default function MenuSection({ items }: { items: MenuItem[] }) {
  const isSingle = items.length === 1;

  return (
    <section
      id="menu"
      className="bg-tertiary-container pt-24 px-6 sm:px-8 lg:px-16 text-[var(--color-on-surface)]"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto space-y-3">
          <Title as="h2" size="xl">
            Notre menu
          </Title>
          <p className="text-[var(--color-on-surface)]/80 font-body text-base">
            Une sélection gourmande parmi nos plats faits maison, servis avec
            amour toute la journée.
          </p>
        </header>

        {/* Liste des plats */}
        <ul
          className={`grid gap-6 ${
            isSingle ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {items.map((item) => (
            <li key={item.id}>
              <MenuCard item={item} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/menu"
            className="inline-block rounded-full px-8 py-3 bg-primary text-on-primary font-body font-semibold text-sm uppercase shadow hover:scale-105 transition"
          >
            Voir le menu complet
          </a>
        </div>
      </div>
    </section>
  );
}
