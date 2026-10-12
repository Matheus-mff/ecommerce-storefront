import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <SearchX className="mx-auto size-12 text-zinc-400" />

      <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
        404
      </p>

      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950">
        Page not found
      </h1>

      <p className="mt-4 leading-7 text-zinc-600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Go home
        </Link>

        <Link
          href="/products"
          className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
        >
          Browse products
        </Link>
      </div>
    </section>
  );
}
