import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schéma de validation plus permissif
const updateSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  price: z.preprocess(
    (val) => parseFloat(String(val)),
    z.number().nonnegative()
  ),
  imageUrl: z
    .string()
    .optional()
    .refine((val) => !val || val === "" || /^https?:\/\/.+/.test(val), {
      message: "Image URL invalide",
    }),
  categoryId: z.preprocess(
    (val) => parseInt(String(val), 10),
    z.number().int().positive()
  ),
});

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);

  if (!parsed.success) {
    console.error("Validation error:", parsed.error.flatten());
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const updatedItem = await prisma.menuItem.update({
      where: { id },
      data: {
        ...parsed.data,
        imageUrl: parsed.data.imageUrl || null, // null si vide
      },
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Item not found or update failed" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    return NextResponse.json({ error: "ID invalide" }, { status: 400 });
  }

  try {
    const deleted = await prisma.menuItem.delete({
      where: { id },
    });

    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    console.error("Erreur suppression plat:", error);
    return NextResponse.json(
      { error: "Impossible de supprimer le plat" },
      { status: 500 }
    );
  }
}
