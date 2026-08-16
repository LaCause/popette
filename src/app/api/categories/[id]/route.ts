import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminSession } from "@/app/lib/auth/requireAdminSession";
import { parseIdParam } from "@/app/lib/http/parseIdParam";
import { updateCategory, deleteCategory } from "@/app/lib/categories/categories";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const unauthorized = await requireAdminSession();
  if (unauthorized) return unauthorized;

  const categoryId = parseIdParam((await context.params).id);
  if (categoryId instanceof NextResponse) return categoryId;

  try {
    await deleteCategory(categoryId);
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
  const unauthorized = await requireAdminSession();
  if (unauthorized) return unauthorized;

  const categoryId = parseIdParam((await props.params).id);
  if (categoryId instanceof NextResponse) return categoryId;

  const body = await req.json();
  const parsed = categoryUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const updated = await updateCategory(categoryId, parsed.data);
    return NextResponse.json(updated);
  } catch (err) {
    console.error("Erreur mise à jour catégorie:", err);
    return NextResponse.json(
      { error: "Échec de la mise à jour" },
      { status: 500 }
    );
  }
}
