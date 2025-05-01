"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
    { href: "/a-propos", label: "À propos" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-[var(--color-background)] shadow backdrop-blur-md border-b border-[var(--color-outline)]">
      <Link
        href="/"
        className="font-logo text-3xl text-[var(--color-primary)] tracking-wider"
      >
        Popette
      </Link>

      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        className="text-[var(--color-on-background)] hover:text-[var(--color-primary)] transition"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed inset-0 z-50 bg-[var(--color-surface)] text-[var(--color-on-surface)]"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--color-outline)]">
              <span className="font-logo text-3xl text-[var(--color-primary)] tracking-wider">
                Popette
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col items-start gap-10 px-8 pt-10 text-xl font-title tracking-wide">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="w-full block text-5xl text-left hover:text-[var(--color-primary)] transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
