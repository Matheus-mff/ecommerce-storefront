import type { ProductImage } from "@/types/product";

export type OrderItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: ProductImage | null;
};

export type OrderStatus = "confirmed";

export type Order = {
  id: string;
  createdAt: string;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
};
