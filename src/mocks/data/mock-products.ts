import type { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "prd_001",
    slug: "nova-x1-wireless-mouse",
    name: "Nova X1 Wireless Mouse",
    shortDescription:
      "Lightweight wireless mouse built for fast, precise movement.",
    description:
      "The Nova X1 combines low-latency wireless performance, a lightweight shell, and a high-precision sensor designed for competitive gaming and everyday use.",
    brand: "Nova",
    category: "mice",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.7,
    reviewCount: 184,
    availability: "in-stock",
    stock: 24,
    images: [
      {
        id: "nova-x1-1",
        src: "/products/nova-x1/front.webp",
        alt: "Nova X1 wireless mouse viewed from the front",
      },
      {
        id: "nova-x1-2",
        src: "/products/nova-x1/side.webp",
        alt: "Nova X1 wireless mouse viewed from the side",
      },
    ],
    specifications: [
      {
        label: "Connectivity",
        value: "2.4 GHz Wireless",
      },
      {
        label: "Weight",
        value: "59 g",
      },
      {
        label: "Sensor",
        value: "26,000 DPI",
      },
    ],
    featured: true,
    newArrival: true,
    createdAt: "2026-08-12",
  },

  {
    id: "prd_002",
    slug: "vertex-75-mechanical-keyboard",
    name: "Vertex 75 Mechanical Keyboard",
    shortDescription:
      "Compact mechanical keyboard with hot-swappable switches and wireless connectivity.",
    description:
      "The Vertex 75 offers a compact 75% layout, hot-swappable switches, multi-device wireless support, and a solid aluminum frame for a premium typing experience.",
    brand: "Vertex",
    category: "keyboards",
    price: 149.99,
    rating: 4.8,
    reviewCount: 267,
    availability: "low-stock",
    stock: 5,
    images: [
      {
        id: "vertex-75-1",
        src: "/products/vertex-75/front.webp",
        alt: "Vertex 75 mechanical keyboard viewed from above",
      },
      {
        id: "vertex-75-2",
        src: "/products/vertex-75/angle.webp",
        alt: "Vertex 75 mechanical keyboard viewed from an angle",
      },
    ],
    specifications: [
      {
        label: "Layout",
        value: "75%",
      },
      {
        label: "Connectivity",
        value: "USB-C / Bluetooth / 2.4 GHz",
      },
      {
        label: "Switch support",
        value: "Hot-swappable",
      },
    ],
    featured: true,
    newArrival: false,
    createdAt: "2026-06-20",
  },

  {
    id: "prd_003",
    slug: "echo-pro-wireless-headset",
    name: "Echo Pro Wireless Headset",
    shortDescription:
      "Low-latency wireless headset with spatial audio and long battery life.",
    description:
      "The Echo Pro delivers clear spatial audio, a detachable microphone, and up to 40 hours of battery life for gaming, calls, and media.",
    brand: "Echo",
    category: "headsets",
    price: 129.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviewCount: 143,
    availability: "in-stock",
    stock: 18,
    images: [
      {
        id: "echo-pro-1",
        src: "/products/echo-pro/front.webp",
        alt: "Echo Pro wireless headset viewed from the front",
      },
      {
        id: "echo-pro-2",
        src: "/products/echo-pro/side.webp",
        alt: "Echo Pro wireless headset viewed from the side",
      },
    ],
    specifications: [
      {
        label: "Battery life",
        value: "Up to 40 hours",
      },
      {
        label: "Connectivity",
        value: "2.4 GHz Wireless / Bluetooth",
      },
      {
        label: "Microphone",
        value: "Detachable",
      },
    ],
    featured: false,
    newArrival: true,
    createdAt: "2026-09-02",
  },
];
