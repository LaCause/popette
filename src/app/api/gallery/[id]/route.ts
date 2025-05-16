// app/api/gallery/[id]/route.ts

import { prisma } from "@/app/lib/prisma/prisma";
import { del } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = parseInt(params.id);
  if (isNaN(id))
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  const image = await prisma.galleryImage.findUnique({ where: { id } });
  if (!image) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Supprimer sur Vercel Blob
  try {
    await del(new URL(image.url).pathname, {
      token: process.env.BLOB_READ_WRITE_TOKEN!,
    });
  } catch (e) {
    console.warn("Blob not deleted or already missing:", e);
  }

  await prisma.galleryImage.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
