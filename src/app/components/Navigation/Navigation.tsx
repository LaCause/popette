"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[var(--color-background)] text-[var(--color-on-background)] border-b border-[var(--color-outline)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-logo text-xl">
          Popette
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 font-body text-sm">
          <Link
            href="#menu"
            className="hover:text-[var(--color-primary)] transition"
          >
            Menu
          </Link>
          <Link
            href="#infos"
            className="hover:text-[var(--color-primary)] transition"
          >
            Infos
          </Link>
          <Link
            href="#galerie"
            className="hover:text-[var(--color-primary)] transition"
          >
            Galerie
          </Link>
          <Link
            href="#avis"
            className="hover:text-[var(--color-primary)] transition"
          >
            Avis
          </Link>
          <Link
            href="#reservation"
            className="hover:text-[var(--color-primary)] transition"
          >
            Réserver
          </Link>
        </nav>

        {/* Burger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[var(--color-background)] flex flex-col items-start px-6 py-10 gap-6 font-body text-lg transition">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4"
            aria-label="Fermer le menu"
          >
            <X size={28} />
          </button>
          <Link href="#menu" onClick={() => setOpen(false)}>
            Menu
          </Link>
          <Link href="#infos" onClick={() => setOpen(false)}>
            Infos
          </Link>
          <Link href="#galerie" onClick={() => setOpen(false)}>
            Galerie
          </Link>
          <Link href="#avis" onClick={() => setOpen(false)}>
            Avis
          </Link>
          <Link href="#reservation" onClick={() => setOpen(false)}>
            Réserver
          </Link>
        </div>
      )}
    </header>
  );
}
