"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroIllustrationMotion() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, rotate, opacity }}
      className="absolute inset-0 z-0 origin-center"
      aria-hidden="true"
    >
      {/* Exemple de simplification : juste une ellipse stylisée */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <ellipse
          cx="400"
          cy="300"
          rx="300"
          ry="200"
          fill="var(--color-primary-container)"
          stroke="var(--color-primary)"
          strokeWidth="4"
        />
      </svg>
    </motion.div>
  );
}
