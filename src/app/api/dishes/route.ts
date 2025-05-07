// src/app/api/dishes/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const dishes = await prisma.menuItem.findMany({
      include: { category: true },
    });
    return NextResponse.json(dishes);
  } catch (err) {
    console.error("GET /api/dishes error:", err);
    return NextResponse.json(
      { error: "Failed to fetch dishes" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newDish = await prisma.menuItem.create({
      data: {
        title: body.title,
        price: body.price,
        description: body.description,
        imageUrl: body.imageUrl,
        category: { connect: { id: body.categoryId } },
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(newDish, { status: 201 });
  } catch (err) {
    console.error("POST /api/dishes error:", err);
    return NextResponse.json({ error: "Failed to add dish" }, { status: 500 });
  }
}
