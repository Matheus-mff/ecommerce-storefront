"use client";

import Link from "next/link";
import { ProductCard } from "@/features/products/components/product-card";
import { ProductGridSkeleton } from "@/features/products/components/product-grid-skeleton";
import { useProducts } from "@/features/products/hooks/use-products";
import { useWishlist } from "@/features/wishlist/context/wishlist-context";

export function WishlistPage() {
  const { data: products, isPending, isError } = useProducts();

  const { productIds, isHydrated, clearWishlist } = useWishlist();

  const wishlistProducts =
    products?.filter((product) => productIds.includes(product.id)) ?? [];

  if (!isHydrated || isPending) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ProductGridSkeleton count={3} />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-red-600">Unable to load your wishlist.</p>
      </section>
    );
  }

  if (wishlistProducts.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Your wishlist is empty
        </h1>

        <p className="mt-3 text-zinc-500">
          Save products you want to come back to later.
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
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Saved products
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950">
            Wishlist
          </h1>
        </div>

        <button
          type="button"
          onClick={clearWishlist}
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
        >
          Clear wishlist
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlistProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
