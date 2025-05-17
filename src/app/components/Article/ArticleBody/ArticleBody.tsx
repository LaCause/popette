"use client";

import { EDITOR_STYLE } from "../../ui/TiptapEditor/TiptabEditor.const";

interface ArticleBodyProps {
  html: string;
}

export const ArticleBody = ({ html }: ArticleBodyProps) => {
  return (
    <section
      className={EDITOR_STYLE}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
