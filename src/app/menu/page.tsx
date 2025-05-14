import { Category, MenuItem } from "@/generated/prisma";
import { SEO_MENU } from "../constants/seo";
import MenuBrowser from "../components/Menu/MenuBrowser/MenuBrowser";
import { prisma } from "../lib/prisma/prisma";

type CategoryWithItems = Category & { items: MenuItem[] };

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
