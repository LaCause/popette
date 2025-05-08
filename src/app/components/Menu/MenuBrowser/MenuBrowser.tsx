"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Category, MenuItem } from "@/generated/prisma";

interface CategoryWithItems extends Category {
  items: MenuItem[];
}

export default function MenuBrowser({
  categories,
}: {
  categories: CategoryWithItems[];
}) {
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearch] = useState("");

  const allItems = sortedCategories.flatMap((cat) => cat.items);

  const filteredItems =
    activeCategory === 0
      ? allItems.filter((item) =>
          `${item.title} ${item.description ?? ""}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      : (sortedCategories
          .find((cat) => cat.id === activeCategory)
          ?.items.filter((item) =>
            `${item.title} ${item.description ?? ""}`
              .toLowerCase()
              .includes(search.toLowerCase())
          ) ?? []);

  return (
    <main
      className="bg-[var(--color-background)] text-[var(--color-on-background)] py-16 px-6 sm:px-8 lg:px-16"
      role="main"
      aria-label="Navigation du menu"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <h1
          className="typography-tertiary-xl-bold tracking-widest text-center"
          id="menu-heading"
        >
          Notre carte complète
        </h1>

        {/* Filtres */}
        <nav
          aria-label="Filtrer par catégorie"
          className="flex flex-wrap gap-4 justify-center mt-6"
        >
          <button
            key={0}
            onClick={() => {
              setActiveCategory(0);
              setSearch("");
            }}
            aria-pressed={activeCategory === 0}
            className={`px-4 py-2 font-body text-sm border rounded-full transition ${
              activeCategory === 0
                ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                : "bg-transparent border-[var(--color-outline)] text-[var(--color-on-background)]"
            }`}
          >
            Tout
          </button>

          {sortedCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearch("");
              }}
              aria-pressed={activeCategory === cat.id}
              className={`px-4 py-2 font-body text-sm border rounded-full transition ${
                activeCategory === cat.id
                  ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                  : "bg-transparent border-[var(--color-outline)] text-[var(--color-on-background)]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </nav>

        {/* Recherche */}
        <div className="max-w-md mx-auto mt-6" role="search">
          <label htmlFor="search-input" className="sr-only">
            Rechercher un plat
          </label>
          <input
            id="search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un plat..."
            className="w-full px-4 py-2 font-body text-sm border border-[var(--color-outline)] rounded-full bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* Résultats */}
        <section
          aria-labelledby="menu-heading"
          aria-live="polite"
          className="space-y-12 mt-10"
        >
          <AnimatePresence>
            {filteredItems.length > 0 ? (
              activeCategory === 0 ? (
                sortedCategories.map((cat) => {
                  const items = cat.items.filter((item) =>
                    `${item.title} ${item.description ?? ""}`
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  );
                  if (items.length === 0) return null;

                  return (
                    <section
                      key={cat.id}
                      aria-labelledby={`cat-${cat.id}`}
                      className="space-y-4"
                    >
                      <header className="text-center">
                        <h2
                          id={`cat-${cat.id}`}
                          className="typography-tertiary-l-bold tracking-widest text-primary"
                        >
                          {cat.name}
                        </h2>
                        <div className="h-[2px] w-16 bg-[var(--color-tertiary)] mx-auto mt-2" />
                      </header>

                      <ul className="space-y-6" role="list">
                        {items.map((item, i) => (
                          <motion.li
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, delay: i * 0.03 }}
                            className="border-b border-[var(--color-outline)] pb-4"
                            role="listitem"
                          >
                            <div className="flex justify-between items-start">
                              <h3 className="text-lg font-semibold font-title">
                                {item.title}
                              </h3>
                              <span className="text-sm font-body">
                                {item.price.toFixed(2)} €
                              </span>
                            </div>
                            {item.description && (
                              <p className="text-sm font-body text-[var(--color-on-background)]/80">
                                {item.description}
                              </p>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                    </section>
                  );
                })
              ) : (
                <ul className="space-y-6" role="list">
                  {filteredItems.map((item, i) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, delay: i * 0.03 }}
                      className="border-b border-[var(--color-outline)] pb-4"
                      role="listitem"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold font-title">
                          {item.title}
                        </h3>
                        <span className="text-sm font-body">
                          {item.price.toFixed(2)} €
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm font-body text-[var(--color-on-background)]/80">
                          {item.description}
                        </p>
                      )}
                    </motion.li>
                  ))}
                </ul>
              )
            ) : (
              <motion.p
                className="mt-10 text-center font-body text-sm text-[var(--color-on-background)]/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                role="status"
              >
                Aucun plat ne correspond à votre recherche.
              </motion.p>
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}
