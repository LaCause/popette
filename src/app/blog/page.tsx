import { Suspense } from "react";
import ArticleList from "../components/Article/ArticleList/ArticleList";

export default function Page() {
  return (
    <main className="py-16 px-6 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-title font-semibold mb-8">Nos recettes</h1>
      <Suspense>
        <ArticleList />
      </Suspense>
    </main>
  );
}
