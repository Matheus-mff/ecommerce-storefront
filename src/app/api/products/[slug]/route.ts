import { mockProducts } from "@/mocks/data/mock-products";
import { simulateApiDelay } from "@/mocks/utils/simulate-api-delay";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  await simulateApiDelay();

  const { slug } = await params;

  const product = mockProducts.find((product) => product.slug === slug);

  if (!product) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }

  return Response.json(product);
}
