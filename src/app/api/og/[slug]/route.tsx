import { getPostBySlug } from "@/app/lib/posts/post";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const slug = url.pathname.split("/").pop();

  if (!slug) return new Response(null, { status: 404 });

  const post = await getPostBySlug(slug);

  if (!post) return new Response(null, { status: 404 });

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, #fffdfa, #f9efe3)",
          fontFamily: "Montserrat",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            backgroundColor: "#2d4059",
            color: "#fffdfa",
            padding: "10px 20px",
            borderRadius: 999,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {post.excerpt}
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#2d4059",
            lineHeight: 1.2,
            maxWidth: "90%",
          }}
        >
          {post.title}
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#bc6c25",
            fontFamily: "Pacifico",
            marginTop: 40,
          }}
        >
          Popette Brunch
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
