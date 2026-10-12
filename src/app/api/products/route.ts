import { mockProducts } from "@/mocks/data/mock-products";
import { simulateApiDelay } from "@/mocks/utils/simulate-api-delay";

export async function GET() {
  await simulateApiDelay();

  return Response.json(mockProducts);
}
