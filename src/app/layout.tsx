import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TanStackQueryProvider } from "@/components/providers/tanstack-query-provider";
import { CartProvider } from "@/features/cart/context/cart-context";
import { OrderProvider } from "@/features/orders/context/order-context";
import { WishlistProvider } from "@/features/wishlist/context/wishlist-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "E-commerce Storefront",
    template: "%s | E-commerce Storefront",
  },
  description:
    "A modern e-commerce storefront for gaming peripherals and accessories.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <TanStackQueryProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <SiteHeader />

                <main className="flex-1">{children}</main>

                <SiteFooter />
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
