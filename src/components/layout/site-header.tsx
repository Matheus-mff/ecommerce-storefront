"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Heart, Menu, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/features/cart/context/cart-context";
import { useWishlist } from "@/features/wishlist/context/wishlist-context";

const mainNavigation = [
  { label: "Products", href: "/products" },
  { label: "Keyboards", href: "/products?category=keyboards" },
  { label: "Mice", href: "/products?category=mice" },
  { label: "Headsets", href: "/products?category=headsets" },
];

const moreNavigation = [
  { label: "Controllers", href: "/products?category=controllers" },
  { label: "Microphones", href: "/products?category=microphones" },
  { label: "Mousepads", href: "/products?category=mousepads" },
  { label: "Accessories", href: "/products?category=accessories" },
];

const mobileNavigation = [...mainNavigation, ...moreNavigation];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const moreMenuRef = useRef<HTMLDivElement>(null);

  const { itemCount: cartItemCount } = useCart();
  const { itemCount: wishlistItemCount } = useWishlist();

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function closeMoreMenu() {
    setIsMoreMenuOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        closeMoreMenu();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMoreMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-lg font-semibold tracking-tight sm:text-xl"
          >
            E-commerce Storefront
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}

            <div ref={moreMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setIsMoreMenuOpen((current) => !current)}
                aria-expanded={isMoreMenuOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-zinc-950"
              >
                More
                <ChevronDown
                  className={`size-4 transition-transform ${
                    isMoreMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMoreMenuOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full z-20 mt-3 min-w-44 rounded-lg border border-zinc-200 bg-white p-2 shadow-lg"
                >
                  {moreNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={closeMoreMenu}
                      className="block rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <Link
            href="/wishlist"
            aria-label={`Wishlist with ${wishlistItemCount} items`}
            className="relative rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <Heart className="size-5" />

            {wishlistItemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-zinc-950 px-1 text-xs font-medium text-white">
                {wishlistItemCount}
              </span>
            )}
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
            aria-label={`Cart with ${cartItemCount} items`}
            className="relative rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <ShoppingBag className="size-5" />

            {cartItemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-zinc-950 px-1 text-xs font-medium text-white">
                {cartItemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-zinc-200 px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {mobileNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-md px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-2 border-t border-zinc-200 sm:hidden" />

            <Link
              href="/account"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 sm:hidden"
            >
              Account
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
