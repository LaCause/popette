import { ClientPost } from "@/app/blog/page";
import ArticleCard from "../ArticleCard/ArticleCard";

interface ArticleListProps {
  posts: ClientPost[];
}

const ArticleList = ({ posts }: ArticleListProps) => {
  if (!posts.length) {
    return (
      <p className="text-center text-sm text-gray-500">Aucun article trouvé.</p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <ArticleCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          image={post.image ?? ""}
          excerpt={post.excerpt}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default ArticleList;
