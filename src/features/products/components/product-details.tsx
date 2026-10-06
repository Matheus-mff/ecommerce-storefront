"use client";

import { Heart, ShoppingBag, Star } from "lucide-react";
import { useProduct } from "@/features/products/hooks/use-product";

type ProductDetailsProps = {
  slug: string;
};

export function ProductDetails({ slug }: ProductDetailsProps) {
  const { data: product, isPending, isError } = useProduct(slug);

  if (isPending) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">Loading product...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-red-600">Unable to load product.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="aspect-square rounded-2xl bg-zinc-100" />

        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            {product.brand}
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-2">
            <Star className="size-4 fill-current text-zinc-950" />

            <span className="text-sm font-medium text-zinc-950">
              {product.rating}
            </span>

            <span className="text-sm text-zinc-500">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <p className="text-2xl font-semibold text-zinc-950">
              ${product.price.toFixed(2)}
            </p>

            {product.originalPrice && (
              <p className="text-lg text-zinc-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>

          <p className="mt-3 text-sm text-zinc-500">
            {product.availability === "out-of-stock"
              ? "Out of stock"
              : `${product.stock} available`}
          </p>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              disabled={product.availability === "out-of-stock"}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
            >
              <ShoppingBag className="size-4" />
              Add to cart
            </button>

            <button
              type="button"
              aria-label="Add to wishlist"
              className="rounded-md border border-zinc-300 p-3 text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              <Heart className="size-5" />
            </button>
          </div>

          <div className="mt-10 border-t border-zinc-200 pt-8">
            <h2 className="font-semibold text-zinc-950">Specifications</h2>

            <dl className="mt-4 divide-y divide-zinc-200">
              {product.specifications.map((specification) => (
                <div
                  key={specification.label}
                  className="grid grid-cols-2 gap-4 py-3 text-sm"
                >
                  <dt className="text-zinc-500">{specification.label}</dt>
                  <dd className="font-medium text-zinc-950">
                    {specification.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
