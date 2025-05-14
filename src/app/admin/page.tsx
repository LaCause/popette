"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardList, BookOpen } from "lucide-react";

const sections = [
  {
    name: "Menu",
    href: "/admin/menu",
    icon: ClipboardList,
    description: "Gérez les plats proposés à la carte.",
  },
  {
    name: "Catégories du menu",
    href: "/admin/categories",
    icon: BookOpen,
    description: "Organisez vos plats par catégorie.",
  },
  {
    name: "Articles",
    href: "/admin/posts",
    icon: BookOpen,
    description: "Organisez vos articles.",
  },
];

export default function DashboardAdmin() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * index }}
              whileHover={{ scale: 1.015 }}
              className="group bg-tertiary-container border border-outline rounded-2xl p-6 hover:shadow-md transition-all"
            >
              <Link href={section.href} className="block h-full">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-container text-primary group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-on-tertiary-container mb-1">
                      {section.name}
                    </h2>
                    <p className="text-sm text-on-tertiary-container opacity-80">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
