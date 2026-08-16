// app/api/gallery/[id]/route.ts

import { prisma } from "@/app/lib/prisma/prisma";
import { del } from "@vercel/blob";
import { NextResponse } from "next/server";
import { requireAdminSession } from "@/app/lib/auth/requireAdminSession";
import { parseIdParam } from "@/app/lib/http/parseIdParam";

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const unauthorized = await requireAdminSession();
  if (unauthorized) return unauthorized;

  const params = await props.params;
  const id = parseIdParam(params.id);
  if (id instanceof NextResponse) return id;

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
