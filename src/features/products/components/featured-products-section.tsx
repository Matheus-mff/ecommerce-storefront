"use client";

import Link from "next/link";
import { ProductCard } from "@/features/products/components/product-card";
import { ProductGridSkeleton } from "@/features/products/components/product-grid-skeleton";
import { useProducts } from "@/features/products/hooks/use-products";

export function FeaturedProductsSection() {
  const { data: products, isPending, isError } = useProducts();

  const featuredProducts = products?.filter((product) => product.featured);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            Popular gear
          </h2>
        </div>

        <Link
          href="/products"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
        >
          View all products
        </Link>
      </div>

      {isPending && <ProductGridSkeleton count={3} />}

      {isError && (
        <p className="text-sm text-red-600">Unable to load products.</p>
      )}

      {!isPending && !isError && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
