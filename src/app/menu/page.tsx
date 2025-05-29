import { Category, MenuItem } from "@/generated/prisma";
import { OG_IMAGE_URL, SEO_MENU } from "../constants/seo";
import MenuBrowser from "../components/Menu/MenuBrowser/MenuBrowser";
import { prisma } from "../lib/prisma/prisma";
import { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb/Breacrumb";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

type CategoryWithItems = Category & { items: MenuItem[] };

export const metadata: Metadata = {
  title: SEO_MENU.title,
  description: SEO_MENU.description,
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: SEO_MENU.title,
    description: SEO_MENU.description,
    url: "/menu",
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
      <SectionWrapper aria-label="Navigation du menu">
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Menu" }]}
        />
        <MenuBrowser categories={categories} />
      </SectionWrapper>
    </>
  );
}
