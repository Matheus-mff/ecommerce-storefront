"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CatalogSearch } from "@/features/products/components/catalog-search";

export function CatalogControls() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "all";
  const sort = searchParams.get("sort") ?? "featured";

  function updateParam(key: string, value: string, defaultValue: string) {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("page");

    if (value === defaultValue) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  }

  return (
    <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_200px_200px]">
      <CatalogSearch />

      <div className="grid grid-cols-2 gap-3 md:contents">
        <div className="relative">
          <label htmlFor="catalog-category" className="sr-only">
            Product category
          </label>

          <select
            id="catalog-category"
            value={category}
            onChange={(event) =>
              updateParam("category", event.target.value, "all")
            }
            className="w-full appearance-none rounded-md border border-zinc-300 bg-white px-3 py-2 pr-9 text-sm text-zinc-700 outline-none transition-colors focus:border-zinc-950"
          >
            <option value="all">All categories</option>
            <option value="keyboards">Keyboards</option>
            <option value="mice">Mice</option>
            <option value="headsets">Headsets</option>
            <option value="controllers">Controllers</option>
            <option value="microphones">Microphones</option>
            <option value="mousepads">Mousepads</option>
            <option value="accessories">Accessories</option>
          </select>

          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400"
          />
        </div>

        <div className="relative">
          <label htmlFor="catalog-sort" className="sr-only">
            Sort products
          </label>

          <select
            id="catalog-sort"
            value={sort}
            onChange={(event) =>
              updateParam("sort", event.target.value, "featured")
            }
            className="w-full appearance-none rounded-md border border-zinc-300 bg-white px-3 py-2 pr-9 text-sm text-zinc-700 outline-none transition-colors focus:border-zinc-950"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="rating">Highest rated</option>
          </select>

          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400"
          />
        </div>
      </div>
    </div>
  );
}
