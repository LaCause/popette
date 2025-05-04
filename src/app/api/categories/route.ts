import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
    });
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
  try {
    const { name, slug } = await req.json();

    if (!name || !slug) {
      return NextResponse.json(
        { error: "Le nom et le slug sont requis." },
        { status: 400 }
      );
    }

    const created = await prisma.category.create({
      data: { name, slug },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error("POST /api/categories error:", err);
    return NextResponse.json(
      { error: "Échec de création de la catégorie" },
      { status: 500 }
    );
  }
}
