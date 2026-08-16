import { prisma } from "@/app/lib/prisma/prisma";
import { Category } from "@/generated/prisma";

export async function getAllCategories(): Promise<Category[]> {
  return prisma.category.findMany({
    orderBy: { order: "asc" },
  });
}

export async function createCategory(data: {
  name: string;
  slug: string;
  order?: number;
}): Promise<Category> {
  return prisma.category.create({
    data: {
      name: data.name,
      slug: data.slug,
      order: typeof data.order === "number" ? data.order : 0,
    },
  });
}

export async function updateCategory(
  id: number,
  data: { name: string; slug: string; order: number }
): Promise<Category> {
  return prisma.category.update({
    where: { id },
    data,
  });
}

export async function deleteCategory(id: number): Promise<Category> {
  return prisma.category.delete({
    where: { id },
  });
}
