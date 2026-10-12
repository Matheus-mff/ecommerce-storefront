import type { ProductImage } from "@/types/product";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  stock: number;
  image: ProductImage | null;
  quantity: number;
};
