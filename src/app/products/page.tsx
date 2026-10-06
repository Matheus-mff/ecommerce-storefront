import { Suspense } from "react";
import { ProductsCatalog } from "@/features/products/components/products-catalog";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-500">Loading catalog...</p>
        </div>
      }
    >
      <ProductsCatalog />
    </Suspense>
  );
}
