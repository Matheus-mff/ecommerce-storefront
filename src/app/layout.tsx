import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { TanStackQueryProvider } from "@/components/providers/tanstack-query-provider";
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
      <body>
        <TanStackQueryProvider>
          <SiteHeader />
          <main>{children}</main>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
