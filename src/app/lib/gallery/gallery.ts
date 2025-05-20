import { GalleryImage } from "@/generated/prisma";
import { prisma } from "../prisma/prisma";

export async function getAllImages(limit?: number): Promise<GalleryImage[]> {
  return prisma.galleryImage.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: limit,
  });
}
