import { prisma } from "@/app/lib/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const postSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date invalide",
  }),
  image: z.string().url(),
  content: z.string().min(1),
  excerpt: z.string().optional(),
});

export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    return NextResponse.json({ error: "ID invalide" }, { status: 400 });
  }

  const body = await req.json();
  const parsed = postSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { slug, title, date, image, content, excerpt = "" } = parsed.data;

  try {
    const updated = await prisma.post.update({
      where: { id },
      data: {
        slug,
        title,
        date: new Date(date),
        image,
        excerpt,
        content,
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("BLOG ARTICLE API ERROR - PUT:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour de l’article" },
      { status: 500 }
    );
  }
}

// DELETE /api/posts/[id]
export async function DELETE(
  _req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    return NextResponse.json({ error: "ID invalide" }, { status: 400 });
  }

  try {
    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("BLOG ARTICLE API ERROR - DELETE:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression de l’article" },
      { status: 500 }
    );
  }
}
