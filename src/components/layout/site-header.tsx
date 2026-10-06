"use client";

import Link from "next/link";
import { Heart, Search, ShoppingBag, User } from "lucide-react";

const navigation = [
  { label: "Products", href: "/products" },
  { label: "Keyboards", href: "/category/keyboards" },
  { label: "Mice", href: "/category/mice" },
  { label: "Headsets", href: "/category/headsets" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            E-commerce Storefront
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Search"
            className="rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <Search className="size-5" />
          </button>

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <Heart className="size-5" />
          </Link>

          <Link
            href="/account"
            aria-label="Account"
            className="hidden rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 sm:block"
          >
            <User className="size-5" />
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <ShoppingBag className="size-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
