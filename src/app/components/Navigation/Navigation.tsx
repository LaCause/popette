"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
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
    { href: "/about-us", label: "Notre histoire" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
    { href: "/showcase", label: "Photos" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 shadow backdrop-blur-md">
      <Link href="/" className="font-logo text-3xl text-primary tracking-wider">
        Popette
      </Link>

      {userIsAuthenticated && (
        <div className="flex items-center gap-4 ml-auto">
          <Link
            href="/admin"
            className="bg-primary text-on-primary typography-primary-xs py-1 px-6 rounded-sm transition"
          >
            Admin
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="bg-primary text-on-primary typography-primary-xs py-1 px-6 rounded-sm transition"
          >
            Déconnexion
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        className="text-on-tertiary-container hover:text-primary transition"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed inset-0 z-50 h-screen bg-tertiary-container text-on-tertiary-container flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-outline">
              <span className="font-logo text-3xl text-primary tracking-wider">
                Popette
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="text-on-tertiary-container hover:text-primary transition"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col gap-10 font-title tracking-wide px-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block hover:text-primary transition typography-tertiary-xl-bold text-center"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
