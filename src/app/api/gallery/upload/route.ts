// app/api/gallery/upload/route.ts
import { prisma } from "@/app/lib/prisma/prisma";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const alt = formData.get("alt") as string;

  if (!file)
    return NextResponse.json({ error: "Fichier manquant" }, { status: 400 });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log("BUFFER  : ", buffer);

  const blob = await put(file.name, buffer, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN!,
  });

  const image = await prisma.galleryImage.create({
    data: {
      url: blob.url,
      alt,
    },
  });

  return NextResponse.json(image);
}
