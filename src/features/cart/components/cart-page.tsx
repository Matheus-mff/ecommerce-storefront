"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/features/cart/context/cart-context";

export function CartPage() {
  const { items, subtotal, isHydrated, removeItem, setQuantity, clearCart } =
    useCart();

  if (!isHydrated) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">Loading cart...</p>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Your cart is empty
        </h1>

        <p className="mt-3 text-zinc-500">
          Add some products to start your order.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-flex rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Browse products
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Shopping cart
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950">
            Your cart
          </h1>
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
        >
          Clear cart
        </button>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {items.map((item) => (
            <article
              key={item.productId}
              className="grid gap-5 py-6 sm:grid-cols-[140px_1fr]"
            >
              <Link
                href={`/products/${item.slug}`}
                className="relative aspect-square overflow-hidden rounded-xl bg-zinc-100"
              >
                {item.image && (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                )}
              </Link>

              <div className="flex min-w-0 flex-col justify-between gap-6">
                <div className="flex justify-between gap-4">
                  <div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="font-medium text-zinc-950 hover:underline"
                    >
                      {item.name}
                    </Link>

                    <p className="mt-2 text-sm text-zinc-500">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.productId)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="self-start rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="flex items-center rounded-md border border-zinc-300">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(item.productId, item.quantity - 1)
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                      className="p-2 text-zinc-600 hover:text-zinc-950"
                    >
                      <Minus className="size-4" />
                    </button>

                    <span className="min-w-10 text-center text-sm font-medium">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(item.productId, item.quantity + 1)
                      }
                      disabled={item.quantity >= item.stock}
                      aria-label={`Increase ${item.name} quantity`}
                      className="p-2 text-zinc-600 hover:text-zinc-950 disabled:cursor-not-allowed disabled:text-zinc-300"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>

                  <p className="font-semibold text-zinc-950">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold text-zinc-950">Order summary</h2>

          <div className="mt-6 flex justify-between border-b border-zinc-200 pb-6">
            <span className="text-zinc-600">Subtotal</span>

            <span className="font-semibold text-zinc-950">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            Shipping and taxes will be calculated during checkout.
          </p>

          <Link
            href="/checkout"
            className="mt-6 block w-full rounded-md bg-zinc-950 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
