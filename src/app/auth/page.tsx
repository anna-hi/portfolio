"use client";

import React from "react";

import { useRouter, useSearchParams } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/";
  const [hasError, setHasError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasError(false);
    setIsSubmitting(true);

    const response = await fetch("/api/login", {
      method: "POST",
      body: new FormData(event.currentTarget),
    });

    setIsSubmitting(false);

    if (response.status === 401) {
      setHasError(true);
      return;
    }

    if (response.redirected) {
      const redirectUrl = new URL(response.url);
      router.replace(`${redirectUrl.pathname}${redirectUrl.search}`);
      return;
    }

    if (response.ok) {
      router.replace(nextPath);
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[28rem] rounded-lg border border-white/15 bg-background-dark-secondary px-6 py-8 shadow-2xl shadow-black/20 md:px-8"
      >
        <input type="hidden" name="next" value={nextPath} />

        <div className="mb-1">
          <h1 className="mb-0 text-2xl leading-8 text-white">
            What's the secret code?
          </h1>
        </div>

        <label
          htmlFor="secret-code"
          className="mb-3 block text-caption font-semibold text-gray-light"
        >
          secret code
        </label>
        <input
          id="secret-code"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full rounded-md border border-white/20 bg-[#1f1a16] px-4 py-3 text-base text-white outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/30"
        />

        {hasError ? (
          <p className="mt-1 mb-0 text-caption font-semibold text-pink">
            Incorrect code. Please try again.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md mt-4 bg-pink px-4 py-3 text-base font-semibold text-background-dark transition hover:bg-pink/80 focus:outline-none focus:ring-2 focus:ring-pink/40 focus:ring-offset-2 focus:ring-offset-background-dark-secondary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Checking..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
