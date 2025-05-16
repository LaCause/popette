"use client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const getTitleFromPath = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  const last = segments[segments.length - 1];

  switch (last) {
    case "login":
      return "";
    case "menu":
      return "Gestion du menu";
    case "categories":
      return "Gestion des catégories";
    case "articles":
      return "Gestion des articles";
    default:
      return "Tableau de bord";
  }
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";
  const title = getTitleFromPath(pathname);
  return (
    <div className="py-20 px-6">
      <div className="mx-auto">
        {!isLogin && <h1 className="text-2xl font-bold mb-6">{title}</h1>}
        {children}
      </div>
    </div>
  );
}
