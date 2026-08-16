import { prisma } from "@/app/lib/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { requireAdminSession } from "@/app/lib/auth/requireAdminSession";
import { postSchema } from "@/app/lib/schemas/schemas";
import { parseIdParam } from "@/app/lib/http/parseIdParam";

export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const unauthorized = await requireAdminSession();
  if (unauthorized) return unauthorized;

  const params = await props.params;
  const id = parseIdParam(params.id);
  if (id instanceof NextResponse) return id;

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
  const unauthorized = await requireAdminSession();
  if (unauthorized) return unauthorized;

  const params = await props.params;
  const id = parseIdParam(params.id);
  if (id instanceof NextResponse) return id;

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
