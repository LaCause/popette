import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma/prisma";
import { z } from "zod";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const categoryId = parseInt((await context.params).id, 10);

  if (isNaN(categoryId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await prisma.category.delete({
      where: { id: categoryId },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur suppression catégorie:", err);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}

// Schéma de validation
const categoryUpdateSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  order: z.number().int().nonnegative(),
});

export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const categoryId = parseInt(params.id, 10);
  if (isNaN(categoryId)) {
    return NextResponse.json({ error: "ID invalide" }, { status: 400 });
  }

  const body = await req.json();
  const parsed = categoryUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const updated = await prisma.category.update({
      where: { id: categoryId },
      data: parsed.data,
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("Erreur mise à jour catégorie:", err);
    return NextResponse.json(
      { error: "Échec de la mise à jour" },
      { status: 500 }
    );
  }
}
