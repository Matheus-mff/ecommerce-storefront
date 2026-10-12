"use client";

import { useSearchParams } from "next/navigation";
import { CatalogControls } from "@/features/products/components/catalog-controls";
import { CatalogPagination } from "@/features/products/components/catalog-pagination";
import { ProductCard } from "@/features/products/components/product-card";
import { ProductGridSkeleton } from "@/features/products/components/product-grid-skeleton";
import { useProducts } from "@/features/products/hooks/use-products";

const PRODUCTS_PER_PAGE = 9;

export function ProductsCatalog() {
  const searchParams = useSearchParams();

  const { data: products, isPending, isError } = useProducts();

  const search = searchParams.get("search")?.trim().toLowerCase() ?? "";

  const category = searchParams.get("category") ?? "all";
  const sort = searchParams.get("sort") ?? "featured";

  const requestedPage = Number.parseInt(searchParams.get("page") ?? "1", 10);

  const safeRequestedPage =
    Number.isNaN(requestedPage) || requestedPage < 1 ? 1 : requestedPage;

  const filteredProducts =
    products?.filter((product) => {
      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search) ||
        product.shortDescription.toLowerCase().includes(search);

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    }) ?? [];

  const sortedProducts = [...filteredProducts].sort((productA, productB) => {
    switch (sort) {
      case "newest":
        return (
          new Date(productB.createdAt).getTime() -
          new Date(productA.createdAt).getTime()
        );

      case "price-asc":
        return productA.price - productB.price;

      case "price-desc":
        return productB.price - productA.price;

      case "rating":
        return productB.rating - productA.rating;

      case "featured":
      default:
        return Number(productB.featured) - Number(productA.featured);
    }
  });

  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE),
  );

  const currentPage = Math.min(safeRequestedPage, totalPages);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Catalog
        </p>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
            Products
          </h1>

          {!isPending && !isError && (
            <p className="text-sm text-zinc-500">
              {sortedProducts.length}{" "}
              {sortedProducts.length === 1 ? "product" : "products"}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <CatalogControls />
      </div>

      <div className="mt-10">
        {isPending && <ProductGridSkeleton count={PRODUCTS_PER_PAGE} />}

        {isError && (
          <div className="rounded-xl border border-zinc-200 px-6 py-12 text-center">
            <h2 className="text-lg font-semibold text-zinc-950">
              Unable to load products
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Something went wrong while loading the catalog.
            </p>
          </div>
        )}

        {!isPending && !isError && sortedProducts.length === 0 && (
          <div className="rounded-xl border border-dashed border-zinc-300 px-6 py-16 text-center">
            <h2 className="text-lg font-semibold text-zinc-950">
              No products found
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Try changing your search or filters.
            </p>
          </div>
        )}

        {!isPending && !isError && sortedProducts.length > 0 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <CatalogPagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        )}
      </div>
    </section>
  );
}
