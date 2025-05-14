import { prisma } from "@/app/lib/prisma/prisma";
import { postSchema } from "@/app/lib/schemas/schemas";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { date: "desc" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("BLOG ARTICLE API ERROR - GET:", error);
    return NextResponse.json(
      { error: "Erreur lors du chargement des articles" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
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
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("BLOG ARTICLE API ERROR - POST:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de l’article" },
      { status: 500 }
    );
  }
}
