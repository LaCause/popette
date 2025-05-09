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
      {/* SEO - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_BLOG.jsonLd }}
      />

      {/* Contenu principal */}
      <main
        className="bg-[var(--color-background)] text-[var(--color-on-background)] py-16 px-6 sm:px-8 lg:px-16"
        role="main"
      >
        <section className="max-w-5xl mx-auto space-y-10">
          <header className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-title font-semibold text-[var(--color-primary)]">
              Nos recettes maison
            </h1>
            <p className="text-lg text-[var(--color-on-background)]/80 font-body max-w-2xl mx-auto">
              Découvrez toutes les recettes Popette : des idées brunch sucrées
              et salées, simples, gourmandes et inspirées par les saisons. À
              tester chez vous ou à venir savourer sur place.
            </p>
          </header>

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
