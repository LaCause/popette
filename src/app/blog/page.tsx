import { getAllPosts } from "@/app/lib/posts/post";
import Title from "@/app/components/ui/Title/Title";
import { Metadata } from "next";
import ArticleList from "../components/Article/ArticleList/ArticleList";
import { Post } from "@/generated/prisma";
import { OG_IMAGE_URL, SEO_BLOG } from "../constants/seo";
import { POPETTE_DOMAIN } from "../constants/general";

export const metadata: Metadata = {
  title: SEO_BLOG.title,
  description: SEO_BLOG.description,
  openGraph: {
    title: SEO_BLOG.title,
    description: SEO_BLOG.description,
    url: POPETTE_DOMAIN,
    images: [OG_IMAGE_URL],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_BLOG.title,
    description: SEO_BLOG.description,
    images: [OG_IMAGE_URL],
  },
};

export type ClientPost = Omit<Post, "date" | "createdAt"> & {
  date: string;
};

export default async function BlogPage() {
  const rawPosts = await getAllPosts();
  const posts: ClientPost[] = rawPosts.map((post) => ({
    ...post,
    date: post.date.toISOString(),
  }));

  return (
    <main className="bg-background text-on-tertiary-container py-20 px-6 sm:px-8 lg:px-16">
      <header className="text-center mb-12">
        <Title as="h1" size="xl">
          Le blog
        </Title>
        <p className="text-sm text-on-surface/70 max-w-2xl mx-auto mt-2">
          Recettes, actualités, conseils brunch : tout l’univers Popette.
        </p>
      </header>
      <ArticleList posts={posts} />
    </main>
  );
}
