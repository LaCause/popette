import { getAllPosts } from "@/app/lib/posts/post";
import { Metadata } from "next";
import ArticleList from "../components/Article/ArticleList/ArticleList";
import { Post } from "@/generated/prisma";
import { OG_IMAGE_URL, SEO_BLOG } from "../constants/seo";
import Breadcrumb from "../components/Breadcrumb/Breacrumb";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

export const metadata: Metadata = {
  title: SEO_BLOG.title,
  description: SEO_BLOG.description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    siteName: "Popette",
    title: SEO_BLOG.title,
    description: SEO_BLOG.description,
    url: "/blog",
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
    <SectionWrapper aria-label="Blog">
      <Breadcrumb
        items={[{ label: "Accueil", href: "/" }, { label: "Blog" }]}
      />
      <SectionHeader
        title="Le blog"
        description="Recettes, actualités, conseils brunch : tout l’univers Popette."
      />
      <ArticleList posts={posts} />
    </SectionWrapper>
  );
}
