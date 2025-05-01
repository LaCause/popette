"use client";

import { useState } from "react";
import { menuData } from "./menu.data";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [search, setSearch] = useState("");

  const selected = menuData.find((cat) => cat.id === activeCategory);

  const filteredItems = selected?.items.filter((item) =>
    `${item.name} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="bg-[var(--color-background)] text-[var(--color-on-background)] py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-title font-semibold text-center">
          Notre carte complète
        </h1>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearch("");
              }}
              className={`px-4 py-2 font-body text-sm border rounded-full transition
                ${
                  activeCategory === cat.id
                    ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "bg-transparent border-[var(--color-outline)] text-[var(--color-on-background)]"
                }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Recherche */}
        <div className="max-w-md mx-auto mt-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un plat..."
            className="w-full px-4 py-2 font-body text-sm border border-[var(--color-outline)] rounded-full bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* Liste filtrée + animée */}
        <section>
          <AnimatePresence>
            {filteredItems && filteredItems.length > 0 ? (
              <ul className="space-y-6 mt-8">
                {filteredItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className="border-b border-[var(--color-outline)] pb-4"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold font-title">
                        {item.name}
                      </h3>
                      <span className="text-sm font-body">{item.price} €</span>
                    </div>
                    <p className="text-sm font-body text-[var(--color-on-background)]/80">
                      {item.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <motion.p
                className="mt-10 text-center font-body text-sm text-[var(--color-on-background)]/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
