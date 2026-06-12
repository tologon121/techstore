'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ShoppingCart,
  Check,
  Star,
  ArrowLeft,
  Shield,
  Truck,
  RotateCcw,
  ChevronRight,
  Heart,
  Share2,
  Minus,
  Plus,
  CheckCircle2,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductById, getRelatedProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params);
  const product = getProductById(id);

  if (!product) notFound();

  const { addToCart, isInCart, getItemQuantity } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'reviews'>('specs');

  const inCart = isInCart(product.id);
  const cartQty = getItemQuantity(product.id);
  const related = getRelatedProducts(product);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ── Breadcrumb ─────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-sm text-gray-400 mb-8"
      >
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link
          href="/catalog"
          className="hover:text-blue-600 transition-colors"
        >
          Catalog
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link
          href={`/catalog?category=${product.category}`}
          className="hover:text-blue-600 transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-700 font-medium truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      {/* ── Product Layout ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

        {/* Image Panel */}
        <div className="space-y-4">
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl h-[420px] flex items-center justify-center overflow-hidden border border-gray-100 group">
            <span className="text-[140px] md:text-[180px] leading-none select-none transform group-hover:scale-105 transition-transform duration-700 filter drop-shadow-2xl">
              {product.emoji}
            </span>

            {/* Badges */}
            {product.badge && (
              <span className="absolute top-5 left-5 bg-orange-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="absolute top-5 right-5 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                -{discount}%
              </span>
            )}

            {/* Share + Wishlist floating buttons */}
            <div className="absolute bottom-5 right-5 flex flex-col gap-2">
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all border border-gray-100"
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    wishlisted
                      ? 'text-red-500 fill-red-500'
                      : 'text-gray-400'
                  }`}
                />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all border border-gray-100"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Thumbnail row placeholder */}
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                className={`w-16 h-16 rounded-xl bg-gray-100 border-2 flex items-center justify-center text-2xl transition-all hover:border-blue-300 ${
                  i === 1 ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                {product.emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Info Panel */}
        <div className="flex flex-col">
          {/* Category */}
          <Link
            href={`/catalog?category=${product.category}`}
            className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors mb-4"
          >
            {product.category}
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            {product.name}
          </h1>

          {/* Rating + Review count */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-amber-400 fill-amber-400'
                      : i < product.rating
                      ? 'text-amber-400 fill-amber-200'
                      : 'text-gray-200 fill-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-gray-700">{product.rating}</span>
            <span className="text-gray-400 text-sm">
              ({product.reviewCount.toLocaleString()} reviews)
            </span>
            {product.inStock ? (
              <span className="flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                In Stock
              </span>
            ) : (
              <span className="text-red-500 text-sm font-semibold">
                Out of Stock
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed mb-5 text-base">
            {product.longDescription}
          </p>

          {/* Colors */}
          {product.colors && (
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Available Colors
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg border border-gray-200 font-medium cursor-pointer hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-extrabold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                  Save ${(product.originalPrice - product.price).toFixed(0)}
                </span>
              </>
            )}
          </div>

          {/* Quantity selector */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm font-semibold text-gray-700">Qty:</span>
            <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1.5">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                disabled={qty <= 1}
                className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-10 text-center font-bold text-gray-900">
                {qty}
              </span>
              <button
                onClick={() => setQty(Math.min(10, qty + 1))}
                disabled={qty >= 10}
                className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
            {inCart && (
              <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-lg">
                {cartQty} in cart
              </span>
            )}
          </div>

          {/* Add to Cart + Buy Now */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold text-base transition-all duration-300 active:scale-[0.98] ${
                justAdded
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                  : product.inStock
                  ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl hover:shadow-blue-200'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </>
              )}
            </button>
            <Link
              href="/cart"
              className="px-6 py-4 rounded-2xl border-2 border-gray-200 hover:border-blue-400 font-bold text-gray-700 hover:text-blue-600 transition-all text-center whitespace-nowrap"
            >
              View Cart
            </Link>
          </div>

          {/* Guarantee badges */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: Truck, label: 'Free Shipping', sub: 'Orders over $50' },
              { icon: Shield, label: '2-Year Warranty', sub: 'Included' },
              { icon: RotateCcw, label: '30-Day Returns', sub: 'Free returns' },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center"
              >
                <Icon className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
                <p className="text-xs font-semibold text-gray-800">{label}</p>
                <p className="text-xs text-gray-400">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tabs: Specs + Reviews ──────────────────────────────────── */}
      <div className="mb-16">
        <div className="border-b border-gray-100 mb-6">
          <div className="flex gap-6">
            {(['specs', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold capitalize border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab === 'specs' ? 'Specifications' : 'Customer Reviews'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'specs' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
            {product.specs.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-gray-900">{value}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-xl">
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
              <div className="flex items-center justify-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-4xl font-extrabold text-gray-900 mb-1">
                {product.rating}
              </p>
              <p className="text-gray-400 text-sm">
                Based on {product.reviewCount.toLocaleString()} reviews
              </p>
              <div className="mt-5 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => {
                  const pct = star === 5 ? 72 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 2 : 1;
                  return (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-4 text-right">{star}</span>
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 w-8">{pct}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Related Products ───────────────────────────────────────── */}
      {related.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900">
              You May Also Like
            </h2>
            <Link
              href={`/catalog?category=${product.category}`}
              className="text-blue-600 text-sm font-semibold hover:underline"
            >
              See All {product.category}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* ── Back link ─────────────────────────────────────────────── */}
      <div className="mt-12">
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>
      </div>
    </div>
  );
}
