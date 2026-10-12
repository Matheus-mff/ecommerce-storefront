"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CatalogPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function CatalogPagination({
  currentPage,
  totalPages,
}: CatalogPaginationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams.toString());

    if (page <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Product pagination"
      className="mt-12 flex items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="inline-flex size-10 items-center justify-center rounded-md border border-zinc-300 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="size-4" />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        const isCurrentPage = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            onClick={() => goToPage(page)}
            aria-current={isCurrentPage ? "page" : undefined}
            className={`inline-flex size-10 items-center justify-center rounded-md text-sm font-medium transition-colors ${
              isCurrentPage
                ? "bg-zinc-950 text-white"
                : "border border-zinc-300 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="inline-flex size-10 items-center justify-center rounded-md border border-zinc-300 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}
