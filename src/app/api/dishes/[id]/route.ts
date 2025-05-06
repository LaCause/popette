import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const updateSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  price: z.number(),
  imageUrl: z.string().url().optional(),
  categoryId: z.number(),
});

export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const body = await req.json();
  const parse = updateSchema.safeParse(body);
  console.log(parse.error);

  if (!parse.success) {
    return NextResponse.json({ error: parse.error.flatten() }, { status: 400 });
  }

  try {
    const updatedItem = await prisma.menuItem.update({
      where: { id },
      data: parse.data,
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Item not found or update failed" },
      { status: 500 }
    );
  }
}
