"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getProductBySlug,
  isProductRequestError,
} from "@/services/products-service";

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => getProductBySlug(slug),
    retry: (failureCount, error) => {
      if (isProductRequestError(error) && error.status === 404) {
        return false;
      }

      return failureCount < 1;
    },
  });
}
