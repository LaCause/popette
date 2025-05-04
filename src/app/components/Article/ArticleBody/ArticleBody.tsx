"use client";

interface ArticleBodyProps {
  html: string;
}

export const ArticleBody = ({ html }: ArticleBodyProps) => {
  return (
    <section
      className="prose prose-lg max-w-none font-body text-[var(--color-on-background)] prose-h2:font-title prose-h2:text-2xl prose-p:leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
