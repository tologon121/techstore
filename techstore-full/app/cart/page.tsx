'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItemCard from '@/components/CartItem';
import OrderSummary from '@/components/OrderSummary';
import {
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  Trash2,
  ShoppingCart,
} from 'lucide-react';

export default function CartPage() {
  const { items, clearCart, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
        {/* Empty state */}
        <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12 text-gray-300" />
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          Your cart is empty
        </h2>
        <p className="text-gray-400 mb-8 max-w-xs mx-auto">
          Looks like you haven&apos;t added anything yet. Explore our catalog
          and find something you&apos;ll love!
        </p>
        <Link
          href="/catalog"
          className="btn-primary inline-flex text-base px-8 py-4 rounded-2xl"
        >
          <ShoppingCart className="w-5 h-5" />
          Start Shopping
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Popular links */}
        <div className="mt-10">
          <p className="text-sm text-gray-400 mb-3">Popular categories:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Smartphones', 'Laptops', 'Accessories'].map((cat) => (
              <Link
                key={cat}
                href={`/catalog?category=${cat}`}
                className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-gray-400 mt-1">
            {totalItems} item{totalItems !== 1 ? 's' : ''} in your cart
          </p>
        </div>
        <button
          onClick={clearCart}
          className="hidden sm:flex items-center gap-2 text-sm text-red-400 hover:text-red-600 hover:bg-red-50 font-medium px-3 py-2 rounded-lg transition-all"
        >
          <Trash2 className="w-4 h-4" />
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ── Cart Items ──────────────────────────────────────────── */}
        <div className="lg:col-span-2">
          {/* Header row */}
          <div className="hidden sm:grid grid-cols-3 text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
            <span className="col-span-2">Product</span>
            <span className="text-right">Total</span>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <CartItemCard key={item.product.id} item={item} />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
            <button
              onClick={clearCart}
              className="sm:hidden flex items-center gap-1.5 text-sm text-red-400 hover:text-red-600 font-medium"
            >
              <Trash2 className="w-4 h-4" />
              Clear Cart
            </button>
          </div>
        </div>

        {/* ── Order Summary ───────────────────────────────────────── */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <OrderSummary showCheckoutButton showPromoCode />
          </div>
        </div>
      </div>
    </div>
  );
}
