import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Built for better setups
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Premium gear for the way you play.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            Keyboards, mice, headsets, and accessories selected for performance,
            comfort, and clean setups.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Shop products
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/products?category=keyboards"
              className="inline-flex items-center rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-900"
            >
              Explore keyboards
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:translate-y-8">
            <p className="text-sm text-zinc-400">Precision</p>
            <p className="mt-2 text-xl font-medium">Gaming mice</p>
            <p className="mt-8 text-sm leading-6 text-zinc-500">
              Lightweight designs, accurate sensors, and low-latency wireless.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Control</p>
            <p className="mt-2 text-xl font-medium">Mechanical keyboards</p>
            <p className="mt-8 text-sm leading-6 text-zinc-500">
              Compact layouts, premium materials, and customizable switches.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:translate-y-8">
            <p className="text-sm text-zinc-400">Immersion</p>
            <p className="mt-2 text-xl font-medium">Headsets</p>
            <p className="mt-8 text-sm leading-6 text-zinc-500">
              Clear audio, comfortable fits, and reliable wireless performance.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Setup</p>
            <p className="mt-2 text-xl font-medium">Accessories</p>
            <p className="mt-8 text-sm leading-6 text-zinc-500">
              Practical finishing touches for a cleaner, more functional desk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
