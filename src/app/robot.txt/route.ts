import { NextResponse } from "next/server";

export async function GET() {
  const body = `User-agent: *
Allow: /

# Bloquer les dossiers internes de Next.js
Disallow: /_next/
Disallow: /api/
Disallow: /static/
Disallow: /fonts/
Disallow: /server/

Sitemap: https://popette-brunch.com/sitemap.xml
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
