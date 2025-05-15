import { prisma } from "@/app/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(images);
}
