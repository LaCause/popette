import { ArticleCardProps } from "@/app/components/Article/ArticleCard/ArticleCard.const";
import { prisma } from "@/app/lib/prisma";
import { Post } from "@/generated/prisma";

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
  });
}

export async function getRelatedPosts(
  slug: string
): Promise<ArticleCardProps[]> {
  const posts = await prisma.post.findMany({
    where: {
      slug: { not: slug },
    },
    orderBy: {
      date: "desc",
    },
    take: 3,
    select: {
      slug: true,
      title: true,
      image: true,
      excerpt: true,
      date: true,
    },
  });

  return posts.map((post) => ({
    ...post,
    date: post.date.toISOString(),
  }));
}

export async function getAllPosts(limit?: number): Promise<Post[]> {
  return prisma.post.findMany({
    orderBy: {
      date: "desc",
    },
    take: limit,
  });
}
