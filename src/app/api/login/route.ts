import { NextResponse } from "next/server";

import {
  AUTH_COOKIE_NAME,
  AUTH_COOKIE_VALUE,
  AUTH_PASSWORD,
} from "@/lib/auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get("password");
  const nextPath = formData.get("next");
  const redirectPath = typeof nextPath === "string" && nextPath ? nextPath : "/";

  if (password !== AUTH_PASSWORD) {
    return NextResponse.json({ code: "INVALID_PASSWORD" }, { status: 401 });
  }

  const response = NextResponse.redirect(new URL(redirectPath, request.url), {
    status: 303,
  });

  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: AUTH_COOKIE_VALUE,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
