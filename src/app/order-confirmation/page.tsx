import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function OrderConfirmationPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <CheckCircle2 className="mx-auto size-12 text-zinc-950" />

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950">
        Order confirmed
      </h1>

      <p className="mt-4 leading-7 text-zinc-600">
        Your demo order was submitted successfully. No real payment was
        processed.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/account"
          className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          View order history
        </Link>

        <Link
          href="/products"
          className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
        >
          Continue shopping
        </Link>
      </div>
    </section>
  );
}
