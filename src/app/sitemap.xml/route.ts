import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://popette.com";
  // const isProd = process.env.NODE_ENV === "production";

  const pages = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "menu", priority: "0.9", changefreq: "weekly" },
    { path: "contact", priority: "0.8", changefreq: "monthly" },
    { path: "a-propos", priority: "0.7", changefreq: "yearly" },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        ({ path, priority, changefreq }) => `
      <url>
        <loc>${baseUrl}/${path}</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
