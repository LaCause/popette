"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const userIsAuthenticated = status === "authenticated";

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
    { href: "/showcase", label: "Showcase" },
    { href: "/about-us", label: "À propos" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 shadow backdrop-blur-md">
      <Link
        href="/"
        className="font-logo text-3xl text-[var(--color-primary)] tracking-wider"
      >
        Popette
      </Link>

      {userIsAuthenticated && (
        <>
          <Link
            className="bg-primary text-on-primary typography-primary-xs py-1 px-6 rounded-sm transition ml-auto mr-4"
            href={"/admin"}
          >
            Admin
          </Link>
          <button
            className="bg-primary text-on-primary typography-primary-xs py-1 px-6 rounded-sm transition mr-4"
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
          >
            Deconnexion
          </button>
        </>
      )}

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
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="w-full block text-5xl text-left hover:text-primary typography-tertiary-m transition before:content-start before:h-3.5 before:w-full before:bg-amber-600 before:absolute before:left-0 before:bottom-0 before:z-[-1] before:scale-x-20 before:origin-top before:transition before:duration-200 hover:before:scale-x-100"
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
