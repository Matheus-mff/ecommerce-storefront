import type { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "prd_001",
    slug: "nova-x1-wireless-mouse",
    name: "Nova X1 Wireless Mouse",
    shortDescription:
      "Lightweight wireless gaming mouse built for speed and precision.",
    description:
      "A lightweight wireless gaming mouse designed for fast, accurate movement and long gaming sessions. The Nova X1 combines a high-performance sensor with a clean ergonomic shape and low-latency wireless connectivity.",
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
        id: "nova-x1-main",
        src: "/products/nova-x1-wireless-mouse.png",
        alt: "Nova X1 Wireless Mouse",
      },
    ],
    specifications: [
      { label: "Connectivity", value: "2.4 GHz Wireless" },
      { label: "Weight", value: "59g" },
      { label: "Sensor", value: "26,000 DPI" },
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
      "Compact mechanical keyboard with wireless connectivity and hot-swappable switches.",
    description:
      "A compact 75% mechanical keyboard built for gaming and everyday use. The Vertex 75 combines flexible wireless connectivity, hot-swappable switches, and a space-efficient layout.",
    brand: "Vertex",
    category: "keyboards",
    price: 149.99,
    rating: 4.8,
    reviewCount: 267,
    availability: "low-stock",
    stock: 5,
    images: [
      {
        id: "vertex-75-main",
        src: "/products/vertex-75-mechanical-keyboard.png",
        alt: "Vertex 75 Mechanical Keyboard",
      },
    ],
    specifications: [
      { label: "Layout", value: "75%" },
      { label: "Connectivity", value: "USB-C / Bluetooth / 2.4 GHz" },
      { label: "Switches", value: "Hot-swappable" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-06-20",
  },

  {
    id: "prd_003",
    slug: "echo-pro-wireless-headset",
    name: "Echo Pro Wireless Headset",
    shortDescription:
      "Comfortable wireless headset with long battery life and clear voice chat.",
    description:
      "A versatile wireless gaming headset designed for clear sound, long sessions, and reliable voice communication. The Echo Pro supports both low-latency wireless and Bluetooth connectivity.",
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
        id: "echo-pro-main",
        src: "/products/echo-pro-wireless-headset.png",
        alt: "Echo Pro Wireless Headset",
      },
    ],
    specifications: [
      { label: "Battery", value: "Up to 40 hours" },
      { label: "Connectivity", value: "2.4 GHz / Bluetooth" },
      { label: "Microphone", value: "Detachable" },
    ],
    featured: false,
    newArrival: true,
    createdAt: "2026-09-02",
  },

  {
    id: "prd_004",
    slug: "vertex-tkl-mechanical-keyboard",
    name: "Vertex TKL Mechanical Keyboard",
    shortDescription:
      "Tenkeyless mechanical keyboard focused on durability and competitive play.",
    description:
      "A streamlined tenkeyless keyboard for players who want more mouse space without giving up dedicated function keys. The Vertex TKL features a rigid aluminum top plate and responsive mechanical switches.",
    brand: "Vertex",
    category: "keyboards",
    price: 119.99,
    originalPrice: 139.99,
    rating: 4.5,
    reviewCount: 198,
    availability: "in-stock",
    stock: 16,
    images: [
      {
        id: "vertex-tkl-main",
        src: "/products/vertex-tkl-mechanical-keyboard.png",
        alt: "Vertex TKL Mechanical Keyboard",
      },
    ],
    specifications: [
      { label: "Layout", value: "Tenkeyless" },
      { label: "Connection", value: "USB-C" },
      { label: "Frame", value: "Aluminum top plate" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-05-18",
  },

  {
    id: "prd_005",
    slug: "orbit-60-he-mechanical-keyboard",
    name: "Orbit 60 HE Mechanical Keyboard",
    shortDescription:
      "Compact 60% keyboard with adjustable magnetic switches for fast input.",
    description:
      "A performance-focused 60% keyboard using magnetic Hall Effect switches with adjustable actuation. The Orbit 60 HE is designed for players who prioritize responsiveness and compact desk space.",
    brand: "Orbit",
    category: "keyboards",
    price: 179.99,
    rating: 4.9,
    reviewCount: 91,
    availability: "out-of-stock",
    stock: 0,
    images: [
      {
        id: "orbit-60-main",
        src: "/products/orbit-60-he-mechanical-keyboard.png",
        alt: "Orbit 60 HE Mechanical Keyboard",
      },
    ],
    specifications: [
      { label: "Layout", value: "60%" },
      { label: "Switch type", value: "Hall Effect magnetic" },
      { label: "Actuation", value: "Adjustable" },
    ],
    featured: true,
    newArrival: true,
    createdAt: "2026-09-28",
  },

  {
    id: "prd_006",
    slug: "nova-air-wireless-mouse",
    name: "Nova Air Wireless Mouse",
    shortDescription:
      "Ultra-light wireless mouse designed for fast competitive movement.",
    description:
      "The Nova Air focuses on low weight, balanced ergonomics, and responsive wireless performance. Its compact shell is designed for fast flicks and precise tracking.",
    brand: "Nova",
    category: "mice",
    price: 74.99,
    rating: 4.6,
    reviewCount: 116,
    availability: "low-stock",
    stock: 3,
    images: [
      {
        id: "nova-air-main",
        src: "/products/nova-air-wireless-mouse.png",
        alt: "Nova Air Wireless Mouse",
      },
    ],
    specifications: [
      { label: "Weight", value: "52g" },
      { label: "Sensor", value: "24,000 DPI" },
      { label: "Battery", value: "Up to 70 hours" },
    ],
    featured: true,
    newArrival: true,
    createdAt: "2026-09-14",
  },

  {
    id: "prd_007",
    slug: "pulse-s2-gaming-mouse",
    name: "Pulse S2 Gaming Mouse",
    shortDescription:
      "Affordable wired gaming mouse with a comfortable symmetrical shape.",
    description:
      "A dependable wired gaming mouse designed for everyday gaming. The Pulse S2 combines a responsive optical sensor, lightweight cable, and comfortable symmetrical body.",
    brand: "Pulse",
    category: "mice",
    price: 44.99,
    rating: 4.3,
    reviewCount: 328,
    availability: "in-stock",
    stock: 31,
    images: [
      {
        id: "pulse-s2-main",
        src: "/products/pulse-s2-gaming-mouse.png",
        alt: "Pulse S2 Gaming Mouse",
      },
    ],
    specifications: [
      { label: "Connectivity", value: "USB wired" },
      { label: "Weight", value: "68g" },
      { label: "Sensor", value: "12,000 DPI" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-03-11",
  },

  {
    id: "prd_008",
    slug: "echo-air-wireless-headset",
    name: "Echo Air Wireless Headset",
    shortDescription:
      "Lightweight wireless headset built for comfort during long sessions.",
    description:
      "The Echo Air combines a lightweight frame, breathable ear cushions, and balanced wireless audio. It is designed for players who value comfort over long gaming sessions.",
    brand: "Echo",
    category: "headsets",
    price: 99.99,
    rating: 4.4,
    reviewCount: 207,
    availability: "in-stock",
    stock: 14,
    images: [
      {
        id: "echo-air-main",
        src: "/products/echo-air-wireless-headset.png",
        alt: "Echo Air Wireless Headset",
      },
    ],
    specifications: [
      { label: "Battery", value: "Up to 32 hours" },
      { label: "Weight", value: "245g" },
      { label: "Connectivity", value: "2.4 GHz Wireless" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-04-25",
  },

  {
    id: "prd_009",
    slug: "sonic-core-wired-headset",
    name: "Sonic Core Wired Headset",
    shortDescription:
      "Straightforward wired headset with detailed audio and a flip-to-mute microphone.",
    description:
      "A reliable wired headset for gaming, calls, and media. The Sonic Core delivers balanced stereo audio through comfortable over-ear cushions and includes a convenient flip-to-mute microphone.",
    brand: "Sonic",
    category: "headsets",
    price: 69.99,
    originalPrice: 79.99,
    rating: 4.2,
    reviewCount: 412,
    availability: "in-stock",
    stock: 27,
    images: [
      {
        id: "sonic-core-main",
        src: "/products/sonic-core-wired-headset.png",
        alt: "Sonic Core Wired Headset",
      },
    ],
    specifications: [
      { label: "Connection", value: "3.5 mm" },
      { label: "Drivers", value: "50 mm" },
      { label: "Microphone", value: "Flip-to-mute" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-02-08",
  },

  {
    id: "prd_010",
    slug: "axis-pro-wireless-controller",
    name: "Axis Pro Wireless Controller",
    shortDescription:
      "Premium wireless controller with rear buttons and adjustable triggers.",
    description:
      "A customizable wireless controller for PC and console gaming. The Axis Pro includes remappable rear buttons, adjustable trigger stops, and textured grips for better control.",
    brand: "Axis",
    category: "controllers",
    price: 159.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviewCount: 152,
    availability: "in-stock",
    stock: 11,
    images: [
      {
        id: "axis-pro-main",
        src: "/products/axis-pro-wireless-controller.png",
        alt: "Axis Pro Wireless Controller",
      },
    ],
    specifications: [
      { label: "Connectivity", value: "Wireless / USB-C" },
      { label: "Rear buttons", value: "4 remappable" },
      { label: "Triggers", value: "Adjustable stops" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-07-05",
  },

  {
    id: "prd_011",
    slug: "forge-x-controller",
    name: "Forge X Controller",
    shortDescription:
      "Responsive wired controller with textured grips and programmable buttons.",
    description:
      "A durable wired controller designed for responsive PC gaming. The Forge X includes programmable rear inputs, tactile controls, and textured grips.",
    brand: "Forge",
    category: "controllers",
    price: 64.99,
    rating: 4.4,
    reviewCount: 236,
    availability: "low-stock",
    stock: 2,
    images: [
      {
        id: "forge-x-main",
        src: "/products/forge-x-controller.png",
        alt: "Forge X Controller",
      },
    ],
    specifications: [
      { label: "Connection", value: "USB-C wired" },
      { label: "Rear buttons", value: "2 programmable" },
      { label: "Compatibility", value: "PC" },
    ],
    featured: false,
    newArrival: true,
    createdAt: "2026-09-08",
  },

  {
    id: "prd_012",
    slug: "cast-one-usb-microphone",
    name: "Cast One USB Microphone",
    shortDescription:
      "Desktop USB microphone for streaming, voice chat, and content creation.",
    description:
      "A compact USB condenser microphone designed for clear voice capture without complicated audio equipment. The Cast One includes onboard gain control, mute functionality, and a removable desktop stand.",
    brand: "Cast",
    category: "microphones",
    price: 109.99,
    rating: 4.7,
    reviewCount: 174,
    availability: "in-stock",
    stock: 13,
    images: [
      {
        id: "cast-one-main",
        src: "/products/cast-one-usb-microphone.png",
        alt: "Cast One USB Microphone",
      },
    ],
    specifications: [
      { label: "Connection", value: "USB-C" },
      { label: "Pattern", value: "Cardioid" },
      { label: "Controls", value: "Gain / mute" },
    ],
    featured: true,
    newArrival: true,
    createdAt: "2026-09-21",
  },

  {
    id: "prd_013",
    slug: "glide-xl-mousepad",
    name: "Glide XL Mousepad",
    shortDescription:
      "Large desk mousepad with a smooth control surface and stitched edges.",
    description:
      "An extended mousepad designed to provide consistent tracking across a large desk area. The Glide XL uses a balanced cloth surface with durable stitched edges and a non-slip rubber base.",
    brand: "Glide",
    category: "mousepads",
    price: 34.99,
    rating: 4.6,
    reviewCount: 521,
    availability: "in-stock",
    stock: 42,
    images: [
      {
        id: "glide-xl-main",
        src: "/products/glide-xl-mousepad.png",
        alt: "Glide XL Mousepad",
      },
    ],
    specifications: [
      { label: "Size", value: "900 × 400 mm" },
      { label: "Surface", value: "Cloth" },
      { label: "Base", value: "Non-slip rubber" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-01-16",
  },

  {
    id: "prd_014",
    slug: "dock-7-usb-hub",
    name: "Dock 7 USB Hub",
    shortDescription:
      "Compact seven-port desktop hub for expanding your setup connectivity.",
    description:
      "A clean aluminum desktop hub designed to keep peripherals connected without clutter. The Dock 7 combines USB-A, USB-C, and card reader connectivity in a compact enclosure.",
    brand: "Dock",
    category: "accessories",
    price: 59.99,
    rating: 4.5,
    reviewCount: 189,
    availability: "in-stock",
    stock: 19,
    images: [
      {
        id: "dock-7-main",
        src: "/products/dock-7-usb-hub.png",
        alt: "Dock 7 USB Hub",
      },
    ],
    specifications: [
      { label: "Ports", value: "7" },
      { label: "Connection", value: "USB-C" },
      { label: "Material", value: "Aluminum" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-04-03",
  },

  {
    id: "prd_015",
    slug: "stand-pro-headset-stand",
    name: "Stand Pro Headset Stand",
    shortDescription:
      "Weighted aluminum headset stand with an integrated USB charging port.",
    description:
      "A minimalist headset stand designed to keep your desk organized while providing a convenient charging connection. The Stand Pro uses a weighted base and aluminum construction for stability.",
    brand: "Stand",
    category: "accessories",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.3,
    reviewCount: 98,
    availability: "in-stock",
    stock: 22,
    images: [
      {
        id: "stand-pro-main",
        src: "/products/stand-pro-headset-stand.png",
        alt: "Stand Pro Headset Stand",
      },
    ],
    specifications: [
      { label: "Material", value: "Aluminum" },
      { label: "Charging", value: "USB-A" },
      { label: "Base", value: "Weighted non-slip" },
    ],
    featured: false,
    newArrival: true,
    createdAt: "2026-08-30",
  },

  {
    id: "prd_016",
    slug: "apex-96-mechanical-keyboard",
    name: "Apex 96 Mechanical Keyboard",
    shortDescription:
      "Compact full-featured mechanical keyboard with a numpad and rotary control.",
    description:
      "The Apex 96 keeps nearly all the functionality of a full-size keyboard in a tighter layout. It combines hot-swappable switches, wireless connectivity, and a programmable rotary control.",
    brand: "Apex",
    category: "keyboards",
    price: 164.99,
    originalPrice: 184.99,
    rating: 4.7,
    reviewCount: 132,
    availability: "in-stock",
    stock: 12,
    images: [
      {
        id: "apex-96-main",
        src: "/products/apex-96-mechanical-keyboard.png",
        alt: "Apex 96 Mechanical Keyboard",
      },
    ],
    specifications: [
      { label: "Layout", value: "96%" },
      { label: "Connectivity", value: "USB-C / Bluetooth / 2.4 GHz" },
      { label: "Switches", value: "Hot-swappable" },
    ],
    featured: false,
    newArrival: true,
    createdAt: "2026-10-01",
  },

  {
    id: "prd_017",
    slug: "nova-ergo-wireless-mouse",
    name: "Nova Ergo Wireless Mouse",
    shortDescription:
      "Ergonomic wireless mouse designed for comfort and precise everyday control.",
    description:
      "The Nova Ergo uses a sculpted right-handed shape designed to reduce wrist strain during long work and gaming sessions while maintaining accurate wireless tracking.",
    brand: "Nova",
    category: "mice",
    price: 79.99,
    rating: 4.5,
    reviewCount: 145,
    availability: "in-stock",
    stock: 20,
    images: [
      {
        id: "nova-ergo-main",
        src: "/products/nova-ergo-wireless-mouse.png",
        alt: "Nova Ergo Wireless Mouse",
      },
    ],
    specifications: [
      { label: "Connectivity", value: "Bluetooth / 2.4 GHz" },
      { label: "Weight", value: "82g" },
      { label: "Sensor", value: "18,000 DPI" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-07-27",
  },

  {
    id: "prd_018",
    slug: "echo-studio-headset",
    name: "Echo Studio Headset",
    shortDescription:
      "Premium closed-back headset tuned for detailed gaming and media audio.",
    description:
      "The Echo Studio focuses on richer sound reproduction with large drivers, deep ear cushions, and a reinforced aluminum frame designed for long listening sessions.",
    brand: "Echo",
    category: "headsets",
    price: 189.99,
    rating: 4.8,
    reviewCount: 86,
    availability: "low-stock",
    stock: 4,
    images: [
      {
        id: "echo-studio-main",
        src: "/products/echo-studio-headset.png",
        alt: "Echo Studio Headset",
      },
    ],
    specifications: [
      { label: "Drivers", value: "53 mm" },
      { label: "Connection", value: "USB-C / 3.5 mm" },
      { label: "Frame", value: "Aluminum" },
    ],
    featured: true,
    newArrival: true,
    createdAt: "2026-10-04",
  },

  {
    id: "prd_019",
    slug: "axis-compact-controller",
    name: "Axis Compact Controller",
    shortDescription:
      "Smaller wireless controller designed for portability and comfortable grip.",
    description:
      "The Axis Compact offers the core controls of a full-size gamepad in a smaller lightweight body. It supports wireless play and USB-C charging.",
    brand: "Axis",
    category: "controllers",
    price: 84.99,
    rating: 4.4,
    reviewCount: 118,
    availability: "in-stock",
    stock: 17,
    images: [
      {
        id: "axis-compact-main",
        src: "/products/axis-compact-controller.png",
        alt: "Axis Compact Controller",
      },
    ],
    specifications: [
      { label: "Connectivity", value: "Bluetooth / USB-C" },
      { label: "Battery", value: "Up to 25 hours" },
      { label: "Compatibility", value: "PC / Mobile" },
    ],
    featured: false,
    newArrival: true,
    createdAt: "2026-09-25",
  },

  {
    id: "prd_020",
    slug: "forge-elite-wireless-controller",
    name: "Forge Elite Wireless Controller",
    shortDescription:
      "High-end wireless controller with customizable sticks and rear controls.",
    description:
      "The Forge Elite is designed for players who want extensive customization, featuring interchangeable thumbsticks, rear inputs, trigger stops, and low-latency wireless connectivity.",
    brand: "Forge",
    category: "controllers",
    price: 179.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviewCount: 73,
    availability: "in-stock",
    stock: 8,
    images: [
      {
        id: "forge-elite-main",
        src: "/products/forge-elite-wireless-controller.png",
        alt: "Forge Elite Wireless Controller",
      },
    ],
    specifications: [
      { label: "Connectivity", value: "2.4 GHz / USB-C" },
      { label: "Rear inputs", value: "4 programmable" },
      { label: "Thumbsticks", value: "Interchangeable" },
    ],
    featured: true,
    newArrival: true,
    createdAt: "2026-10-06",
  },

  {
    id: "prd_021",
    slug: "cast-mini-usb-microphone",
    name: "Cast Mini USB Microphone",
    shortDescription:
      "Compact USB microphone designed for voice chat and small desk setups.",
    description:
      "The Cast Mini provides clear voice capture in a compact footprint. It connects directly over USB-C and includes a simple mute control for calls, gaming, and casual streaming.",
    brand: "Cast",
    category: "microphones",
    price: 69.99,
    rating: 4.4,
    reviewCount: 209,
    availability: "in-stock",
    stock: 26,
    images: [
      {
        id: "cast-mini-main",
        src: "/products/cast-mini-usb-microphone.png",
        alt: "Cast Mini USB Microphone",
      },
    ],
    specifications: [
      { label: "Connection", value: "USB-C" },
      { label: "Pattern", value: "Cardioid" },
      { label: "Mount", value: "Integrated desktop stand" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-06-02",
  },

  {
    id: "prd_022",
    slug: "cast-pro-streaming-microphone",
    name: "Cast Pro Streaming Microphone",
    shortDescription:
      "Premium streaming microphone with multiple pickup patterns and monitoring.",
    description:
      "The Cast Pro is built for streaming and content creation with selectable pickup patterns, real-time headphone monitoring, gain control, and a solid metal body.",
    brand: "Cast",
    category: "microphones",
    price: 169.99,
    rating: 4.8,
    reviewCount: 121,
    availability: "in-stock",
    stock: 10,
    images: [
      {
        id: "cast-pro-main",
        src: "/products/cast-pro-streaming-microphone.png",
        alt: "Cast Pro Streaming Microphone",
      },
    ],
    specifications: [
      { label: "Connection", value: "USB-C" },
      { label: "Patterns", value: "4 selectable" },
      { label: "Monitoring", value: "3.5 mm zero-latency" },
    ],
    featured: false,
    newArrival: true,
    createdAt: "2026-09-30",
  },

  {
    id: "prd_023",
    slug: "glide-control-mousepad",
    name: "Glide Control Mousepad",
    shortDescription:
      "Medium-size control mousepad designed for precise low-speed movement.",
    description:
      "The Glide Control uses a textured cloth surface designed to provide greater stopping power and predictable mouse movement for players who prioritize precision.",
    brand: "Glide",
    category: "mousepads",
    price: 24.99,
    rating: 4.5,
    reviewCount: 347,
    availability: "in-stock",
    stock: 38,
    images: [
      {
        id: "glide-control-main",
        src: "/products/glide-control-mousepad.png",
        alt: "Glide Control Mousepad",
      },
    ],
    specifications: [
      { label: "Size", value: "450 × 400 mm" },
      { label: "Surface", value: "Textured control cloth" },
      { label: "Base", value: "Natural rubber" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-05-09",
  },

  {
    id: "prd_024",
    slug: "dock-mini-usb-c-hub",
    name: "Dock Mini USB-C Hub",
    shortDescription:
      "Portable USB-C hub with essential ports for laptops and compact setups.",
    description:
      "The Dock Mini adds everyday connectivity without taking much desk or bag space. Its aluminum enclosure includes USB, HDMI, and card-reader connectivity.",
    brand: "Dock",
    category: "accessories",
    price: 39.99,
    rating: 4.3,
    reviewCount: 274,
    availability: "in-stock",
    stock: 33,
    images: [
      {
        id: "dock-mini-main",
        src: "/products/dock-mini-usb-c-hub.png",
        alt: "Dock Mini USB-C Hub",
      },
    ],
    specifications: [
      { label: "Ports", value: "5" },
      { label: "Video", value: "HDMI 4K" },
      { label: "Connection", value: "USB-C" },
    ],
    featured: false,
    newArrival: false,
    createdAt: "2026-03-29",
  },

  {
    id: "prd_025",
    slug: "cable-core-management-kit",
    name: "Cable Core Management Kit",
    shortDescription:
      "Modular desk cable-management kit for keeping gaming setups organized.",
    description:
      "The Cable Core kit includes reusable cable clips, hook-and-loop straps, and an under-desk cable channel designed to reduce visible cable clutter.",
    brand: "Core",
    category: "accessories",
    price: 29.99,
    rating: 4.6,
    reviewCount: 311,
    availability: "in-stock",
    stock: 45,
    images: [
      {
        id: "cable-core-main",
        src: "/products/cable-core-management-kit.png",
        alt: "Cable Core Management Kit",
      },
    ],
    specifications: [
      { label: "Cable clips", value: "8" },
      { label: "Straps", value: "10 reusable" },
      { label: "Cable channel", value: "60 cm" },
    ],
    featured: false,
    newArrival: true,
    createdAt: "2026-09-17",
  },
];
