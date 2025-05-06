"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import CurvedText from "../../CurvedText/CurvedText";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null); //
  return (
    <>
      <section
        ref={ref}
        className="group relative min-h-[80vh] flex items-center justify-center text-center px-6 py-48 bg-[var(--color-tertiary-container)] text-[var(--color-on-primary-container)]"
      >
        <div
          className="absolute inset-0 z-0 bg-[url('/hero-food.svg')] bg-cover bg-center opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 backdrop-blur-none group-hover:backdrop-blur-md transition-all z-10" />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-20 max-w-3xl space-y-8"
        >
          <h1 className="font-logo text-6xl sm:text-5xl md:text-9xl tracking-wide leading-tight drop-shadow-sm text-primary">
            Popette
          </h1>

          <span className="font-logo text-primary text-3xl tracking-wide leading-tight">
            Brunch
          </span>

          <CurvedText
            text="Chill vibes, No Hype"
            className="uppercase font-semibold"
          />

          <div>
            <a
              href="#menu"
              className="inline-block rounded-full px-6 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-body font-semibold text-sm uppercase shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              Voir le menu
            </a>
            <a
              href="/contact"
              className="inline-block rounded-full px-6 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-body font-semibold text-sm uppercase shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
