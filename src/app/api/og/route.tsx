import { posts } from "@/app/constants/blog";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#fffdfa",
          fontFamily: "Montserrat",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#2d4059",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            color: "#bc6c25",
            fontFamily: "Pacifico",
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
