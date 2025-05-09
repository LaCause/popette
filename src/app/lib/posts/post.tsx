import { prisma } from "@/app/lib/prisma";

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
  });
}
