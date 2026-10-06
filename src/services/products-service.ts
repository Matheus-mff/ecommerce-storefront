import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const response = await fetch(`/api/products/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}
