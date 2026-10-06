export type ProductCategory =
  | "keyboards"
  | "mice"
  | "headsets"
  | "controllers"
  | "microphones"
  | "mousepads"
  | "accessories";

export type ProductAvailability = "in-stock" | "low-stock" | "out-of-stock";

export type ProductImage = {
  id: string;
  src: string;
  alt: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;

  brand: string;
  category: ProductCategory;

  price: number;
  originalPrice?: number;

  rating: number;
  reviewCount: number;

  availability: ProductAvailability;
  stock: number;

  images: ProductImage[];

  specifications: ProductSpecification[];

  featured: boolean;
  newArrival: boolean;

  createdAt: string;
};
