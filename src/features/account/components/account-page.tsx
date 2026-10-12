"use client";

import Link from "next/link";
import { Package } from "lucide-react";
import { useOrders } from "@/features/orders/context/order-context";

export function AccountPage() {
  const { orders, isHydrated, clearOrders } = useOrders();

  if (!isHydrated) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">Loading account...</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="border-b border-zinc-200 pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Demo account
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950">
          Account
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-600">
          This storefront uses a local demo account. Completed demo orders are
          saved in this browser.
        </p>
      </div>

      <div className="mt-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Order history
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            {orders.length} {orders.length === 1 ? "order" : "orders"}
          </p>
        </div>

        {orders.length > 0 && (
          <button
            type="button"
            onClick={clearOrders}
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
          >
            Clear history
          </button>
        )}
      </div>

      {orders.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-zinc-300 px-6 py-16 text-center">
          <Package className="mx-auto size-8 text-zinc-400" />

          <h3 className="mt-4 font-medium text-zinc-950">No orders yet</h3>

          <p className="mt-2 text-sm text-zinc-500">
            Completed demo orders will appear here.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Browse products
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          {orders.map((order) => (
            <article
              key={order.id}
              className="rounded-xl border border-zinc-200 p-6"
            >
              <div className="flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold text-zinc-950">
                    Order {order.id}
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    {new Intl.DateTimeFormat("en", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(order.createdAt))}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-sm capitalize text-zinc-500">
                    {order.status}
                  </p>

                  <p className="mt-1 font-semibold text-zinc-950">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.productId}
                    className="flex justify-between gap-4 text-sm"
                  >
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-zinc-600 hover:text-zinc-950 hover:underline"
                    >
                      {item.name} × {item.quantity}
                    </Link>

                    <span className="font-medium text-zinc-950">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
