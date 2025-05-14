import { getAllPosts } from "@/app/lib/posts/post"; // adapte selon ta source réelle
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://popette-brunch.com";

  const staticRoutes = [
    "",
    "/menu",
    "/contact",
    "/about-us",
    "/blog",
    "/showcase",
  ];

  const posts = await getAllPosts(); // doit retourner { slug: string, date: Date }[]

  const urls = [
    ...staticRoutes.map((path) => ({
      loc: `${baseUrl}${path}`,
      lastmod: new Date().toISOString().split("T")[0],
      priority: path === "" ? "1.0" : "0.8",
    })),
    ...posts.map((post) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: new Date(post.date).toISOString().split("T")[0],
      priority: "0.7",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <priority>${url.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
