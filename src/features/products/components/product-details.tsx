"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, PackageX, ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/features/cart/context/cart-context";
import { useProduct } from "@/features/products/hooks/use-product";
import { useWishlist } from "@/features/wishlist/context/wishlist-context";
import { isProductRequestError } from "@/services/products-service";

type ProductDetailsProps = {
  slug: string;
};

export function ProductDetails({ slug }: ProductDetailsProps) {
  const { data: product, error, isPending, isError } = useProduct(slug);

  const { addItem } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  if (isPending) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid animate-pulse gap-12 lg:grid-cols-2">
          <div className="aspect-square rounded-2xl bg-zinc-200" />

          <div className="flex flex-col justify-center">
            <div className="h-4 w-24 rounded bg-zinc-200" />
            <div className="mt-4 h-10 w-3/4 rounded bg-zinc-200" />
            <div className="mt-5 h-4 w-36 rounded bg-zinc-200" />

            <div className="mt-8 space-y-3">
              <div className="h-4 rounded bg-zinc-200" />
              <div className="h-4 rounded bg-zinc-200" />
              <div className="h-4 w-4/5 rounded bg-zinc-200" />
            </div>

            <div className="mt-8 h-8 w-28 rounded bg-zinc-200" />
            <div className="mt-8 h-12 rounded bg-zinc-200" />
          </div>
        </div>
      </div>
    );
  }

  if (isError && isProductRequestError(error) && error.status === 404) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <PackageX className="mx-auto size-12 text-zinc-400" />

        <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Product not found
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950">
          This product doesn&apos;t exist
        </h1>

        <p className="mt-4 leading-7 text-zinc-600">
          The product may have been removed, or the address may be incorrect.
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

  if (isError) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Unable to load product
        </h1>

        <p className="mt-3 text-zinc-500">
          Something went wrong while loading this product. Please try again.
        </p>
      </section>
    );
  }

  const mainImage = product.images[0];
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
          {mainImage && (
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </div>

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
              onClick={() => addItem(product)}
              disabled={product.availability === "out-of-stock"}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
            >
              <ShoppingBag className="size-4" />
              Add to cart
            </button>

            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-label={
                wishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
              aria-pressed={wishlisted}
              className="rounded-md border border-zinc-300 p-3 text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              <Heart className={`size-5 ${wishlisted ? "fill-current" : ""}`} />
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
