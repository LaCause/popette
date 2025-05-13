import Title from "../../Title/Title";
import ArticleCard from "../ArticleCard/ArticleCard";
import { ArticleCardProps } from "../ArticleCard/ArticleCard.const";

interface ArticleSuggestionProps {
  relatedPosts: ArticleCardProps[];
}

export const ArticleSuggestion = (posts: ArticleSuggestionProps) => {
  if (posts?.relatedPosts?.length === 0) return null;

  return (
    <div className="mt-16 border-t border-outline pt-8">
      <Title as="h2" size="xl" className="mb-6">
        Autres articles
      </Title>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts?.relatedPosts?.map((p) => <ArticleCard key={p.slug} {...p} />)}
      </div>
    </div>
  );
};
