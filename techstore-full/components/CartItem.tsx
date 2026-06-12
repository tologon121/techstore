'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2, Star } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItemCard({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const lineTotal = product.price * quantity;
  const savings = product.originalPrice
    ? (product.originalPrice - product.price) * quantity
    : 0;

  return (
    <div className="group flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">

      {/* Product thumbnail */}
      <Link
        href={`/product/${product.id}`}
        className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center shrink-0 text-4xl hover:scale-105 transition-transform select-none border border-gray-100"
        tabIndex={-1}
      >
        {product.emoji}
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0">
        {/* Name + remove */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <Link
              href={`/product/${product.id}`}
              className="font-semibold text-gray-900 text-sm hover:text-blue-600 transition-colors leading-snug line-clamp-2"
            >
              {product.name}
            </Link>
            <p className="text-xs text-gray-400 mt-0.5">{product.category}</p>
          </div>
          <button
            onClick={() => removeFromCart(product.id)}
            className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 shrink-0 opacity-0 group-hover:opacity-100"
            aria-label={`Remove ${product.name} from cart`}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Rating mini */}
        <div className="flex items-center gap-1 mt-1 mb-2.5">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs text-gray-400 font-medium">
            {product.rating}
          </span>
        </div>

        {/* Bottom: price + quantity */}
        <div className="flex items-center justify-between gap-2">
          {/* Price */}
          <div>
            <span className="text-base font-extrabold text-gray-900">
              ${lineTotal.toFixed(2)}
            </span>
            {quantity > 1 && (
              <span className="ml-1.5 text-xs text-gray-400">
                (${product.price}/ea)
              </span>
            )}
            {savings > 0 && (
              <p className="text-xs text-emerald-600 font-medium">
                Save ${savings.toFixed(2)}
              </p>
            )}
          </div>

          {/* Quantity stepper */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>

            <span className="w-8 text-center text-sm font-bold text-gray-900 tabular-nums">
              {quantity}
            </span>

            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={quantity >= 99}
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
