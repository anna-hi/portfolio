import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { AUTH_COOKIE_NAME, isAuthenticated } from "@/lib/auth";

const PUBLIC_ROUTES = ["/auth", "/api/login"];

function isPublicRoute(pathname: string) {
  return PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hasAuthCookie = isAuthenticated(
    request.cookies.get(AUTH_COOKIE_NAME)?.value,
  );

  if (pathname === "/auth" && hasAuthCookie) {
    const nextPath = request.nextUrl.searchParams.get("next") || "/";
    return NextResponse.redirect(new URL(nextPath, request.url));
  }

  if (isPublicRoute(pathname) || hasAuthCookie) {
    return NextResponse.next();
  }

  const authUrl = new URL("/auth", request.url);
  authUrl.searchParams.set("next", `${pathname}${search}`);

  return NextResponse.redirect(authUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)",
  ],
};
