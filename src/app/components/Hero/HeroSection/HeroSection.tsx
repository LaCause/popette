"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import CurvedText from "../../ui/CurvedText/CurvedText";
import { Button } from "../../ui/Button/Button";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null); //
  return (
    <>
      <section
        ref={ref}
        className="group relative min-h-[80vh] flex items-center justify-center pt-20 text-center px-6 bg-[var(--color-tertiary-container)] text-on-primary-container"
      >
        <div
          className="absolute inset-0 z-0 bg-contain bg-center opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 backdrop-blur-none group-hover:backdrop-blur-xs transition-all z-10" />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-20 max-w-3xl space-y-8"
        >
          <h1 className="typography-secondary-xl text-8xl sm:text-9xl md:text-[200px] tracking-wide leading-tight drop-shadow-sm text-primary">
            Popette
          </h1>

          <span className="typography-primary-m uppercase text-primary text-3xl tracking-widest leading-tight">
            Brunch
          </span>

          <CurvedText
            text="Chill vibes, No Hype"
            className="uppercase font-semibold"
          />

          <div className="flex flex-col sm:flex-row justify-center gap-y-4 sm:gap-x-6">
            <Button asChild size="lg">
              <Link href="/menu">Voir le menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
