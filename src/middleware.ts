// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const maintenanceEnabled = process.env.MAINTENANCE_MODE === "true";

const allowList = [
  "/maintenance",
  "/admin",
  "/api",
  "/_next",
  "/favicon.ico",
  "/assets",
];

export function middleware(request: NextRequest) {
  if (!maintenanceEnabled) return NextResponse.next();

  const { pathname } = request.nextUrl;

  const isAllowed = allowList.some((path) => pathname.startsWith(path));
  if (!isAllowed) {
    const url = request.nextUrl.clone();
    url.pathname = "/maintenance";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
