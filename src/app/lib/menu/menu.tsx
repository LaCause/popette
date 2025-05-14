import { MenuItem } from "@/generated/prisma";

export async function getAllMenuItem(limit?: number): Promise<MenuItem[]> {
  return prisma.menuItem.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: limit,
  });
}
