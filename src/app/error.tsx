"use client";

import { AlertTriangle } from "lucide-react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <AlertTriangle className="mx-auto size-12 text-zinc-400" />

      <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
        Something went wrong
      </p>

      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950">
        We couldn&apos;t load this page
      </h1>

      <p className="mt-4 leading-7 text-zinc-600">
        An unexpected error occurred. You can try loading the page again.
      </p>

      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
      >
        Try again
      </button>

      {process.env.NODE_ENV === "development" && (
        <p className="mt-6 break-words text-xs text-zinc-400">
          {error.message}
        </p>
      )}
    </section>
  );
}
