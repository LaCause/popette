import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const maintenanceEnabled = process.env.MAINTENANCE_MODE === "true";

const allowList = [
  "/maintenance",
  "/admin/login",
  "/admin",
  "/api",
  "/_next",
  "/favicon.ico",
  "/assets",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const res = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/admin")) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  const isAdminRoute =
    pathname.startsWith("/admin") && !pathname.startsWith("/admin/login");
  const session =
    request.cookies.get("next-auth.session-token")?.value ??
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  if (isAdminRoute && !session) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (maintenanceEnabled) {
    const isAllowed = allowList.some((path) => pathname.startsWith(path));
    if (!isAllowed) {
      const maintenanceUrl = request.nextUrl.clone();
      maintenanceUrl.pathname = "/maintenance";
      return NextResponse.rewrite(maintenanceUrl);
    }
  }

  return res;
}
