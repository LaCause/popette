import { Suspense } from "react";
import ArticleList from "../components/Article/ArticleList/ArticleList";
import { SEO_BLOG } from "../constants/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_BLOG.title,
  description: SEO_BLOG.description,
  openGraph: {
    title: SEO_BLOG.title,
    description: SEO_BLOG.description,
    url: "https://popette-brunch.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_BLOG.title,
    description: SEO_BLOG.description,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_BLOG.jsonLd }}
      />
      <main className="py-16 px-6 sm:px-8 lg:px-16">
        <h1 className="text-4xl font-title font-semibold mb-8">Nos recettes</h1>
        <Suspense>
          <ArticleList />
        </Suspense>
      </main>
    </>
  );
}
