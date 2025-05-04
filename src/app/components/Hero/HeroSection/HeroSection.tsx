"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import PancakesIllustrationMotion from "../../Illustration/PancakesIllustration";
import { ResolvedImage } from "../../ResolvedImage/ResolvedImage";
import CurvedText from "../../CurvedText/CurvedText";
import EggBaconIllustration from "../../Illustration/EggBacon";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null); //
  return (
    <>
      <section
        ref={ref}
        className="relative min-h-[80vh] flex items-center justify-center text-center px-6 py-48 bg-[var(--color-tertiary-container)] text-[var(--color-on-primary-container)]"
      >
        <div
          className="absolute inset-0 z-0 bg-[url('/')] bg-cover bg-center opacity-30 blur-sm scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--color-tertiary-container)]/70 backdrop-blur-md z-10" />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-20 max-w-3xl space-y-8"
        >
          <h1 className="font-logo text-4xl sm:text-5xl md:text-9xl tracking-wide leading-tight drop-shadow-sm text-primary">
            Popette
          </h1>

          <span className="font-logo text-primary text-3xl tracking-wide leading-tight">
            Brunch
          </span>

          <CurvedText text="Chill vibes, No Hype" className="uppercase" />

          <div>
            <a
              href="#menu"
              className="inline-block rounded-full px-6 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-body font-semibold text-sm uppercase shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              Voir le menu
            </a>
          </div>
          <EggBaconIllustration className="w-28 mx-auto z-30 absolute" />
          <PancakesIllustrationMotion
            scrollRef={ref}
            className="w-28 mx-auto z-30 absolute"
          />
        </motion.div>
      </section>
    </>
  );
}
