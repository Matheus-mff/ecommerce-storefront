"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "@/services/products-service";

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => getProductBySlug(slug),
  });
}
