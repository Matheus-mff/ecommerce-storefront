"use client";

import { ProductCard } from "@/features/products/components/product-card";
import { useProducts } from "@/features/products/hooks/use-products";
import { useSearchParams } from "next/navigation";
import { CatalogControls } from "@/features/products/components/catalog-controls";

export function ProductsCatalog() {
  const { data: products, isPending, isError } = useProducts();

  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "all";
  const sort = searchParams.get("sort") ?? "featured";

  const filteredProducts =
    category === "all"
      ? products
      : products?.filter((product) => product.category === category);

  const sortedProducts = filteredProducts
    ? [...filteredProducts].sort((productA, productB) => {
        switch (sort) {
          case "price-asc":
            return productA.price - productB.price;

          case "price-desc":
            return productB.price - productA.price;

          case "rating":
            return productB.rating - productA.rating;

          case "newest":
            return (
              new Date(productB.createdAt).getTime() -
              new Date(productA.createdAt).getTime()
            );

          default:
            return Number(productB.featured) - Number(productA.featured);
        }
      })
    : [];

  if (isPending) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">Loading products...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-red-600">Unable to load products.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Catalog
        </p>

        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
              All products
            </h1>

            <p className="mt-3 max-w-2xl text-zinc-600">
              Explore gaming peripherals and accessories for performance,
              comfort, and clean setups.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            {sortedProducts.length}{" "}
            {sortedProducts.length === 1 ? "product" : "products"}
          </p>
        </div>
      </div>

      <CatalogControls />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
