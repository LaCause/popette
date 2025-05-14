import { Suspense } from "react";
import ArticleList from "../components/Article/ArticleList/ArticleList";
import { SEO_BLOG } from "../constants/seo";
import { Metadata } from "next";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";

export const metadata: Metadata = {
  title: SEO_BLOG.title,
  description: SEO_BLOG.description,
  openGraph: {
    title: SEO_BLOG.title,
    description: SEO_BLOG.description,
    url: "https://popette-brunch.com/blog",
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
      <main
        className="bg-background text-on-tertiary-container py-16 px-6 sm:px-8 lg:px-16"
        role="main"
      >
        <SectionHeader
          as="h1"
          title="Notre Actualité"
          description="Découvrez toutes les recettes Popette : des idées brunch sucrées
              et salées, simples, gourmandes et inspirées par les saisons. À
              tester chez vous ou à venir savourer sur place."
        />
        <section className="max-w-5xl mx-auto space-y-10">
          <Suspense
            fallback={<p className="text-center text-sm">Chargement…</p>}
          >
            <ArticleList />
          </Suspense>
        </section>
      </main>
    </>
  );
}
