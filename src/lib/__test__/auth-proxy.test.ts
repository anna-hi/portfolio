/** @jest-environment node */
import { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE, isAuthenticated } from "@/lib/auth";
import { proxy } from "@/proxy";
import type { NextRequest } from "next/server";

function requestWithForm(password: string, next?: string) {
  const form = new FormData();
  form.set("password", password);
  if (next !== undefined) form.set("next", next);
  return new Request("https://portfolio.test/api/login", { method: "POST", body: form });
}

describe("authentication", () => {
  it("recognizes only the configured authentication cookie", () => {
    expect(isAuthenticated(AUTH_COOKIE_VALUE)).toBe(true);
    expect(isAuthenticated()).toBe(false);
    expect(isAuthenticated("wrong")).toBe(false);
  });

  it("rejects invalid credentials", async () => {
    const { POST } = await import("@/app/api/login/route");
    const response = await POST(requestWithForm("incorrect"));
    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toEqual({ code: "INVALID_PASSWORD" });
  });

  it("redirects authenticated users and creates a protected cookie", async () => {
    const originalSecret = process.env.SECRET_CODE;
    process.env.SECRET_CODE = "correct-code";
    jest.resetModules();
    const { POST } = await import("@/app/api/login/route");
    const response = await POST(requestWithForm("correct-code", "/projects/mindful?from=test"));
    expect(response.status).toBe(303);
    expect(response.headers.get("location")).toBe("https://portfolio.test/projects/mindful?from=test");
    expect(response.headers.get("set-cookie")).toContain(`${AUTH_COOKIE_NAME}=${AUTH_COOKIE_VALUE}`);
    expect(response.headers.get("set-cookie")).toContain("HttpOnly");
    process.env.SECRET_CODE = originalSecret;
  });
});

describe("proxy", () => {
  const makeRequest = (path: string, cookie?: string) => {
    const url = new URL(path, "https://portfolio.test");
    return {
      url: url.toString(), nextUrl: url,
      cookies: { get: jest.fn(() => cookie ? { value: cookie } : undefined) },
    } as unknown as NextRequest;
  };

  it("sends an authenticated auth-page visitor to their requested destination", () => {
    const response = proxy(makeRequest("/auth?next=/projects/penella", AUTH_COOKIE_VALUE));
    expect(response.headers.get("location")).toBe("https://portfolio.test/projects/penella");
  });

  it("allows public routes while the temporary public-route switch is enabled", () => {
    const response = proxy(makeRequest("/projects/mindful"));
    expect(response.headers.get("x-middleware-next")).toBe("1");
  });
});
