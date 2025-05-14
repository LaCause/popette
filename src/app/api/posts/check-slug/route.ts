// app/api/posts/check-slug/route.ts

import { prisma } from "@/app/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const existing = await prisma.post.findFirst({ where: { slug } });
  return NextResponse.json({ exists: !!existing });
}
