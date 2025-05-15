import { getAllPosts } from "@/app/lib/posts/post";
import Title from "@/app/components/Title/Title";
import { Metadata } from "next";
import ArticleList from "../components/Article/ArticleList/ArticleList";
import { Post } from "@/generated/prisma";

export const metadata: Metadata = {
  title: "Blog - Popette Brunch",
  description: "Découvrez nos recettes, actus et coups de cœur brunch.",
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
    <main className="bg-background text-on-tertiary-container py-16 px-6 sm:px-8 lg:px-16">
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
