import type { Product } from "@/types/product";

export class ProductRequestError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ProductRequestError";
    this.status = status;
  }
}

export function isProductRequestError(
  error: unknown,
): error is ProductRequestError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    typeof (error as { status: unknown }).status === "number"
  );
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new ProductRequestError("Failed to fetch products", response.status);
  }

  return response.json();
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const response = await fetch(`/api/products/${slug}`);

  if (!response.ok) {
    throw new ProductRequestError(
      response.status === 404 ? "Product not found" : "Failed to fetch product",
      response.status,
    );
  }

  return response.json();
}
