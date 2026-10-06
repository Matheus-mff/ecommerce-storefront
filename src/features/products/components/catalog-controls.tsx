"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  { label: "All categories", value: "all" },
  { label: "Keyboards", value: "keyboards" },
  { label: "Mice", value: "mice" },
  { label: "Headsets", value: "headsets" },
  { label: "Controllers", value: "controllers" },
  { label: "Microphones", value: "microphones" },
  { label: "Mousepads", value: "mousepads" },
  { label: "Accessories", value: "accessories" },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to high", value: "price-asc" },
  { label: "Price: High to low", value: "price-desc" },
  { label: "Highest rated", value: "rating" },
];

export function CatalogControls() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "all";
  const sort = searchParams.get("sort") ?? "featured";

  function updateParam(name: string, value: string, defaultValue: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value === defaultValue) {
      params.delete(name);
    } else {
      params.set(name, value);
    }

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
  }

  return (
    <div className="mb-8 flex flex-col gap-4 border-y border-zinc-200 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <label
          htmlFor="category"
          className="mb-1 block text-sm font-medium text-zinc-700"
        >
          Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(event) =>
            updateParam("category", event.target.value, "all")
          }
          className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950"
        >
          {categories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="sort"
          className="mb-1 block text-sm font-medium text-zinc-700"
        >
          Sort by
        </label>

        <select
          id="sort"
          value={sort}
          onChange={(event) =>
            updateParam("sort", event.target.value, "featured")
          }
          className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
