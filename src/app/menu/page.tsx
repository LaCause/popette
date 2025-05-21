import { Category, MenuItem } from "@/generated/prisma";
import { OG_IMAGE_URL, SEO_MENU } from "../constants/seo";
import MenuBrowser from "../components/Menu/MenuBrowser/MenuBrowser";
import { prisma } from "../lib/prisma/prisma";
import { POPETTE_DOMAIN } from "../constants/general";
import { Metadata } from "next";

type CategoryWithItems = Category & { items: MenuItem[] };

export const metadata: Metadata = {
  title: SEO_MENU.title,
  description: SEO_MENU.description,
  openGraph: {
    title: SEO_MENU.title,
    description: SEO_MENU.description,
    url: POPETTE_DOMAIN,
    images: [OG_IMAGE_URL],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_MENU.title,
    description: SEO_MENU.description,
    images: [OG_IMAGE_URL],
  },
};

export default async function MenuPage() {
  const categories: CategoryWithItems[] = await prisma.category.findMany({
    orderBy: { order: "asc" },
    include: {
      items: {
        orderBy: { createdAt: "asc" },
      },
    },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_MENU.jsonLd }}
      />
      <MenuBrowser categories={categories} />
    </>
  );
}
