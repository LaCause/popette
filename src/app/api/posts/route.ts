import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const postSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date invalide",
  }),
  image: z.string().url(),
  category: z.string().min(1),
  content: z.string().min(1),
});

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { date: "desc" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.log("BLOG ARTICLE API ERROR - GET : ", error);
    return NextResponse.json(
      { error: "Erreur chargement posts" },
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

  try {
    const created = await prisma.post.create({
      data: {
        ...parsed.data,
        date: new Date(parsed.data.date),
      },
    });
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.log("BLOG ARTICLE API ERROR - POST : ", error);
    return NextResponse.json(
      { error: "Erreur création post" },
      { status: 500 }
    );
  }
}
