import { prisma } from "@/app/lib/prisma/prisma";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 1 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const alt = formData.get("alt") as string;

  if (!file) {
    return NextResponse.json({ error: "Fichier manquant." }, { status: 400 });
  }

  // Vérifie le type MIME
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Type de fichier non autorisé. (JPEG, PNG, WebP uniquement)" },
      { status: 400 }
    );
  }

  // Vérifie la taille
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "Fichier trop volumineux. Maximum autorisé : 1 Mo." },
      { status: 400 }
    );
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

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
  } catch (error) {
    console.error("[UPLOAD ERROR]", error);
    return NextResponse.json(
      { error: "Erreur lors de l’upload. Réessayez plus tard." },
      { status: 500 }
    );
  }
}
