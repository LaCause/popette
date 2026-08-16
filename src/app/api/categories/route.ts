import { NextResponse } from "next/server";
import { requireAdminSession } from "@/app/lib/auth/requireAdminSession";
import { getAllCategories, createCategory } from "@/app/lib/categories/categories";

export async function GET() {
  try {
    const categories = await getAllCategories();
    return NextResponse.json(categories);
  } catch (err) {
    console.error("GET /api/categories error:", err);
    return NextResponse.json(
      { error: "Échec de récupération des catégories" },
      { status: 500 }
    );
  }
}
export async function POST(req: Request) {
  const unauthorized = await requireAdminSession();
  if (unauthorized) return unauthorized;

  try {
    const { name, slug, order } = await req.json();

    if (!name || !slug) {
      return NextResponse.json(
        { error: "Le nom et le slug sont requis." },
        { status: 400 }
      );
    }

    const created = await createCategory({ name, slug, order });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error("POST /api/categories error:", err);
    return NextResponse.json(
      { error: "Échec de création de la catégorie" },
      { status: 500 }
    );
  }
}
