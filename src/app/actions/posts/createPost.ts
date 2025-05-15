"use server";

import { postSchema } from "@/app/lib/schemas/schemas";

export async function createPost(formData: unknown) {
  const parsed = postSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      error: parsed.error.flatten(),
      status: 400,
    };
  }

  const { slug, title, date, image, content, excerpt = "" } = parsed.data;

  try {
    const created = await prisma.post.create({
      data: {
        slug,
        title,
        date: new Date(date),
        image,
        excerpt,
        content,
      },
    });

    return {
      data: created,
      status: 201,
    };
  } catch (error) {
    console.error("BLOG ARTICLE SERVER ACTION ERROR - createPost:", error);
    return {
      error: "Erreur lors de la création de l’article",
      status: 500,
    };
  }
}
