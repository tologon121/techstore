# 🛒 TechStore — Next.js 15 E-Commerce App

A fully-featured, production-ready e-commerce storefront built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Full product catalog** — search, filter by category, sort by price/rating/name
- **Product detail pages** — specs, reviews, related products, color selector
- **Shopping cart** — persistent (localStorage), quantity control, promo codes
- **3-step checkout** — Contact → Shipping → Payment with full form validation
- **Order confirmation** — animated success screen with order tracking timeline
- **8 pages** — Home, Catalog, Product, Cart, Checkout, Order Success, About, Contact, 404
- **Responsive design** — mobile-first, works on all screen sizes
- **Skeleton loading** — smooth loading states on product grids
- **Announcement banner** — dismissible promo bar
- **Newsletter** — email capture with success state
- **Testimonials** — 4 customer reviews with star ratings

---

## 🛠 Tech Stack

- **Next.js 15** — App Router, Server Components, Metadata API
- **React 19** — Client Components, hooks, context
- **TypeScript 5** — Full type safety
- **Tailwind CSS 3** — Utility-first styling with custom components
- **Lucide React** — Icon library

---

## 📁 Project Structure

```
techstore-full/
├── app/
│   ├── about/page.tsx
│   ├── cart/page.tsx
│   ├── catalog/page.tsx
│   ├── checkout/page.tsx
│   ├── contact/page.tsx
│   ├── order-success/page.tsx
│   ├── product/[id]/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── AnnouncementBanner.tsx
│   ├── CartItem.tsx
│   ├── CategoryFilter.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── NewsletterSection.tsx
│   ├── OrderSummary.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── SearchBar.tsx
│   └── TestimonialsSection.tsx
├── context/CartContext.tsx
├── data/products.ts
├── types/index.ts
└── public/images/
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import at vercel.com → Deploy

Or:

```bash
npx vercel --prod
```

---

## 🛍 Demo Promo Code

Use **TECH10** at checkout for 10% off.

---

Built with ❤️ using Next.js 15 and Tailwind CSS.
