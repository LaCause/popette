"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Category, MenuItem } from "@/generated/prisma";
import { SectionHeader } from "../../SectionHeader/SectionHeader";
import Title from "../../ui/Title/Title";
import MenuCard from "../MenuCard/MenuCard";
import { Button } from "../../ui/Button/Button";
import { PAGE_MENU_PDF_URL } from "@/app/constants/general";

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
      className="bg-background text-on-tertiary-container py-16 px-6 sm:px-8 lg:px-16"
      role="main"
      aria-label="Navigation du menu"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <SectionHeader
          as="h1"
          title="Notre carte complète"
          description="Découvrez notre menu brunch fait maison, préparé avec des produits frais et locaux. Assiettes salées, douceurs sucrées, options végétariennes, vegan et sans gluten – servis en continu dans une ambiance chaleureuse au cœur d’Arcachon."
        />
        <div className="text-center">
          <Button size="lg" asChild>
            <a href={PAGE_MENU_PDF_URL} target="_blank">
              Consulter notre carte
            </a>
          </Button>
        </div>
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
                ? "bg-primary text-on-primary"
                : "bg-transparent border-outline text-on-tertiary-container"
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
                  ? "bg-primary text-on-primary"
                  : "bg-transparent border-outline text-on-tertiary-container"
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
            className="w-full px-4 py-2 font-body text-sm border border-outline rounded-full bg-tertiary-container focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
                        <Title as="h2" size="xl" className="font-bold">
                          {cat.name}
                        </Title>
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
                            className="border-b border-outline pb-4"
                            role="listitem"
                          >
                            <MenuCard item={item} variant="inline" hideImage />
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
                      className="border-b border-outline pb-4"
                      role="listitem"
                    >
                      <MenuCard
                        key={i}
                        item={item}
                        variant="inline"
                        hideImage
                      />
                    </motion.li>
                  ))}
                </ul>
              )
            ) : (
              <motion.p
                className="mt-10 text-center font-body text-sm text-on-tertiary-container/60"
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
