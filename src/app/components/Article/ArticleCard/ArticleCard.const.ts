import { Post } from "@/generated/prisma";

export type ArticleCardProps = Omit<
  Post,
  "id" | "content" | "createdAt" | "excerpt" | "date"
> & {
  date: string;
  excerpt?: string;
};
