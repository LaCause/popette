"use client";

import { motion } from "framer-motion";
import HeroIllustration from "../../Illustration/HeroIllustration";

export default function HeroSection() {
  return (
    <>
      <HeroIllustration className="absolute top-0 left-0 w-full h-full z-30" />
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 py-24 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-[url('/')] bg-cover bg-center opacity-30 blur-sm scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--color-primary-container)]/70 backdrop-blur-md z-10" />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-20 max-w-3xl space-y-8"
        >
          <h1 className="font-logo text-4xl sm:text-5xl md:text-6xl tracking-wide leading-tight drop-shadow-sm">
            Popette Brunch
          </h1>

          <p className="font-body text-base sm:text-lg md:text-xl text-[var(--color-on-primary-container)]/90 leading-relaxed">
            Une parenthèse gourmande en plein cœur d’Arcachon. Produits frais,
            ambiance chaleureuse, et recettes maison pour tous les appétits.
          </p>

          <div>
            <a
              href="#menu"
              className="inline-block rounded-full px-6 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-body font-semibold text-sm uppercase shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              Voir le menu
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
