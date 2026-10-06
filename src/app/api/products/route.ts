import { mockProducts } from "@/mocks/data/mock-products";

export function GET() {
  return Response.json(mockProducts);
}
