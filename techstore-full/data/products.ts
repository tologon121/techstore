import { Product, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    price: 999,
    originalPrice: 1099,
    category: 'Smartphones',
    description: "Apple's flagship smartphone with titanium design and A17 Pro chip.",
    longDescription:
      'The iPhone 15 Pro redefines what a smartphone can do. Crafted from aerospace-grade titanium — the same material used in spacecraft — it is incredibly strong yet remarkably light. Powered by the A17 Pro chip, built on 3-nanometer technology, it delivers a massive leap in performance and efficiency. The 48MP main camera with a second‑generation sensor‑shift optical image stabilization captures stunning photos in any light. A17 Pro also makes iPhone 15 Pro a groundbreaking gaming device, capable of running console-quality games.',
    image: '/images/iphone15pro.jpg',
    emoji: '📱',
    rating: 4.9,
    reviewCount: 2847,
    badge: 'Best Seller',
    inStock: true,
    specs: [
      { label: 'Chip', value: 'A17 Pro' },
      { label: 'Display', value: '6.1" Super Retina XDR' },
      { label: 'Camera', value: '48MP Main + 12MP Ultra Wide' },
      { label: 'Storage', value: '128GB – 1TB' },
      { label: 'Battery', value: 'Up to 23 hours video' },
      { label: 'Build', value: 'Titanium + Textured matte glass' },
      { label: 'Connectivity', value: 'USB-C, 5G, Wi-Fi 6E' },
      { label: 'OS', value: 'iOS 17' },
    ],
    colors: ['Black Titanium', 'White Titanium', 'Blue Titanium', 'Natural Titanium'],
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24',
    price: 899,
    category: 'Smartphones',
    description: 'Premium Android smartphone with Galaxy AI and Snapdragon 8 Gen 3.',
    longDescription:
      'Galaxy S24 is your epic new everyday. Embedded with Galaxy AI, it unlocks a new era of mobile AI experiences. The Snapdragon 8 Gen 3 Mobile Platform delivers exceptional performance for every task. The 50MP main camera with advanced Nightography captures stunning detail day and night. With a 6.2-inch Dynamic AMOLED 2X display running at up to 120Hz, every interaction is buttery smooth. Engineered with an armored aluminum frame and Corning Gorilla Glass Victus 2, Galaxy S24 is built to last.',
    image: '/images/galaxys24.jpg',
    emoji: '📱',
    rating: 4.8,
    reviewCount: 1923,
    badge: 'New',
    inStock: true,
    specs: [
      { label: 'Chip', value: 'Snapdragon 8 Gen 3' },
      { label: 'Display', value: '6.2" Dynamic AMOLED 2X, 120Hz' },
      { label: 'Camera', value: '50MP + 12MP + 10MP Triple' },
      { label: 'Storage', value: '128GB / 256GB' },
      { label: 'Battery', value: '4000mAh, 25W Fast Charge' },
      { label: 'Build', value: 'Armor Aluminum + Gorilla Glass' },
      { label: 'Connectivity', value: 'USB-C, 5G, Wi-Fi 6E' },
      { label: 'OS', value: 'Android 14, One UI 6.1' },
    ],
    colors: ['Onyx Black', 'Marble Gray', 'Cobalt Violet', 'Amber Yellow'],
  },
  {
    id: '3',
    name: 'MacBook Air M3',
    price: 1299,
    originalPrice: 1399,
    category: 'Laptops',
    description: 'Impossibly thin Apple laptop with M3 chip and 18-hour battery life.',
    longDescription:
      'MacBook Air with M3 is the world\'s best consumer laptop. Strikingly thin at just 11.5mm and weighing only 2.7 pounds, it features the powerful M3 chip with an 8-core CPU and up to 10-core GPU. The 13.6-inch Liquid Retina display is brilliant and color accurate, perfect for photos, videos, and your work. With up to 18 hours of battery life, it goes all day and beyond. Up to 24GB of unified memory makes everything fast and fluid. It has a fanless design, so it is completely silent as you work.',
    image: '/images/macbookairm3.jpg',
    emoji: '💻',
    rating: 4.9,
    reviewCount: 3102,
    badge: "Editor's Choice",
    inStock: true,
    specs: [
      { label: 'Chip', value: 'Apple M3' },
      { label: 'CPU', value: '8-core' },
      { label: 'GPU', value: 'Up to 10-core' },
      { label: 'Display', value: '13.6" Liquid Retina' },
      { label: 'Memory', value: '8GB / 16GB / 24GB Unified' },
      { label: 'Storage', value: '256GB – 2TB SSD' },
      { label: 'Battery', value: 'Up to 18 hours' },
      { label: 'Weight', value: '2.7 pounds (1.24 kg)' },
    ],
    colors: ['Midnight', 'Starlight', 'Space Gray', 'Sky Blue'],
  },
  {
    id: '4',
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 1199,
    category: 'Laptops',
    description: 'Professional business laptop with military-grade durability and Intel Core Ultra.',
    longDescription:
      'The ThinkPad X1 Carbon Gen 12 is the pinnacle of business performance. It features the latest Intel Core Ultra processors with Intel AI Boost NPU, delivering intelligent performance where you need it. With MIL-SPEC tested durability across 12 categories, this laptop handles whatever your day throws at it. The 14-inch IPS anti-glare display is perfect for long working sessions. Weighing just 2.48 lbs, it is one of the lightest 14" business laptops available. The legendary ThinkPad keyboard provides an unmatched typing experience during long workdays.',
    image: '/images/thinkpadx1.jpg',
    emoji: '💻',
    rating: 4.7,
    reviewCount: 1456,
    inStock: true,
    specs: [
      { label: 'Processor', value: 'Intel Core Ultra 7 165U' },
      { label: 'Display', value: '14" IPS Anti-glare, 2.8K OLED option' },
      { label: 'Memory', value: 'Up to 64GB LPDDR5' },
      { label: 'Storage', value: 'Up to 2TB SSD' },
      { label: 'Battery', value: '57Wh, up to 15 hours' },
      { label: 'Weight', value: '2.48 lbs (1.12 kg)' },
      { label: 'MIL-SPEC', value: 'MIL-STD-810H (12 tests)' },
      { label: 'OS', value: 'Windows 11 Pro' },
    ],
    colors: ['Deep Black'],
  },
  {
    id: '5',
    name: 'AirPods Pro',
    price: 249,
    category: 'Accessories',
    description: 'Wireless earbuds with Adaptive Audio and next-level noise cancellation.',
    longDescription:
      'AirPods Pro (2nd generation) deliver up to 2x more Active Noise Cancellation than the previous generation, so you can immerse yourself in sound. Adaptive Audio dynamically blends Active Noise Cancellation and Transparency mode to tailor your listening experience. Personalized Spatial Audio with dynamic head tracking places sound all around you. A new touch control on the stem lets you swipe to adjust volume. The H2 chip powers the most advanced audio technology in AirPods. The MagSafe Charging Case with Built-in Speaker offers up to 30 hours total listening time.',
    image: '/images/airpodspro.jpg',
    emoji: '🎧',
    rating: 4.8,
    reviewCount: 5612,
    badge: 'Popular',
    inStock: true,
    specs: [
      { label: 'Chip', value: 'H2' },
      { label: 'ANC', value: 'Up to 2x improved' },
      { label: 'Audio', value: 'Adaptive Audio, Spatial Audio' },
      { label: 'Battery', value: '6hr + 24hr with case (30hr total)' },
      { label: 'Charging', value: 'MagSafe / Lightning / USB-C' },
      { label: 'Resistance', value: 'IPX4 sweat & water resistant' },
      { label: 'Controls', value: 'Touch control on stem' },
      { label: 'Compatibility', value: 'iPhone, iPad, Mac, Apple Watch' },
    ],
  },
  {
    id: '6',
    name: 'Logitech MX Master 3S',
    price: 99,
    originalPrice: 119,
    category: 'Accessories',
    description: 'The ultimate productivity mouse with MagSpeed scroll and 8K DPI sensor.',
    longDescription:
      'MX Master 3S is an iconic mouse designed for performance and precision. The new 8000 DPI Darkfield sensor tracks on any surface, including glass. The ultra-fast MagSpeed electromagnetic scroll wheel is 90% quieter and can scroll 1000 lines per second. With multi-device flow, work seamlessly across up to 3 computers — even switching between Mac and Windows. The ergonomic shape is crafted to fit perfectly in your right hand. USB-C quick charging gives you 3 hours of use from just 1 minute of charge. App-specific customization lets you personalize up to 7 buttons per application.',
    image: '/images/mxmaster3s.jpg',
    emoji: '🖱️',
    rating: 4.8,
    reviewCount: 3891,
    badge: 'Sale',
    inStock: true,
    specs: [
      { label: 'Sensor', value: 'Darkfield 8000 DPI' },
      { label: 'Scroll', value: 'MagSpeed Electromagnetic' },
      { label: 'Buttons', value: '7 customizable' },
      { label: 'Connectivity', value: 'Bluetooth / USB Receiver' },
      { label: 'Multi-device', value: 'Up to 3 devices' },
      { label: 'Battery', value: '70 days, USB-C charging' },
      { label: 'Quick Charge', value: '3hr use from 1min charge' },
      { label: 'Compatibility', value: 'Mac, Windows, Linux, iPadOS' },
    ],
    colors: ['Graphite', 'Pale Gray'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James Carter',
    role: 'Software Engineer',
    avatar: '👨‍💻',
    rating: 5,
    comment:
      'Ordered the MacBook Air M3 and it arrived in 2 days. Packaging was perfect, setup was a breeze, and the laptop is an absolute beast. Best tech purchase I have made in years.',
    product: 'MacBook Air M3',
  },
  {
    id: '2',
    name: 'Sofia Reyes',
    role: 'Content Creator',
    avatar: '👩‍🎨',
    rating: 5,
    comment:
      'The AirPods Pro completely changed my work-from-home experience. Noise cancellation is insane — I can finally focus with two kids running around. TechStore had the best price too!',
    product: 'AirPods Pro',
  },
  {
    id: '3',
    name: 'Marcus Liu',
    role: 'Product Designer',
    avatar: '👨‍🎨',
    rating: 5,
    comment:
      'Switched from Android to iPhone 15 Pro after seeing the camera samples online. TechStore had it in stock when everywhere else was sold out. 10/10 would buy again.',
    product: 'iPhone 15 Pro',
  },
  {
    id: '4',
    name: 'Aria Patel',
    role: 'Marketing Director',
    avatar: '👩‍💼',
    rating: 5,
    comment:
      'The MX Master 3S is everything reviewers said and more. The scroll wheel alone is worth the price. Customer support at TechStore was incredibly helpful when I had questions.',
    product: 'Logitech MX Master 3S',
  },
];

export const categories = [
  { value: 'All', label: 'All Products', emoji: '🛍️' },
  { value: 'Smartphones', label: 'Smartphones', emoji: '📱' },
  { value: 'Laptops', label: 'Laptops', emoji: '💻' },
  { value: 'Accessories', label: 'Accessories', emoji: '🎧' },
] as const;

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}
