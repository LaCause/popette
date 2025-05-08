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

export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const id = parseInt(params.id, 10);
  if (isNaN(id))
    return NextResponse.json({ error: "ID invalide" }, { status: 400 });

  const body = await req.json();
  const parsed = postSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const updated = await prisma.post.update({
      where: { id },
      data: {
        ...parsed.data,
        date: new Date(parsed.data.date),
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.log("BLOG ARTICLE API ERROR - PUT : ", error);
    return NextResponse.json(
      { error: "Erreur modification post" },
      { status: 500 }
    );
  }
}

// DELETE post
export async function DELETE(
  _req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const id = parseInt(params.id, 10);
  if (isNaN(id))
    return NextResponse.json({ error: "ID invalide" }, { status: 400 });

  try {
    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("BLOG ARTICLE API ERROR - DELETE : ", error);
    return NextResponse.json(
      { error: "Erreur suppression post" },
      { status: 500 }
    );
  }
}
