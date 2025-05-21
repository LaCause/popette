import { MenuItem } from "@/generated/prisma";
import { prisma } from "../prisma/prisma";

export async function getAllMenuItem(limit?: number): Promise<MenuItem[]> {
  return prisma.menuItem.findMany({
    orderBy: {
      createdAt: "asc",
    },
    take: limit,
  });
}
