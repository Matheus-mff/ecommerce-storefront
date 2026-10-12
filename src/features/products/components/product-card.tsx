import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images[0];

  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-zinc-100">
          {mainImage && (
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          )}
        </div>

        <div className="p-5">
          <p className="text-sm text-zinc-500">{product.brand}</p>

          <h3 className="mt-1 font-medium text-zinc-950">{product.name}</h3>

          <p className="mt-2 text-sm leading-6 text-zinc-600">
            {product.shortDescription}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <p className="font-semibold text-zinc-950">
              ${product.price.toFixed(2)}
            </p>

            {product.originalPrice && (
              <p className="text-sm text-zinc-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
