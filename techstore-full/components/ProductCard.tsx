'use client';

import Link from 'next/link';
import { ShoppingCart, Star, Check, Eye, Heart } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const badgeStyles: Record<string, string> = {
  'Best Seller': 'bg-orange-500 text-white',
  New: 'bg-blue-500 text-white',
  "Editor's Choice": 'bg-violet-600 text-white',
  Popular: 'bg-emerald-600 text-white',
  Sale: 'bg-red-500 text-white',
};

const categoryGradients: Record<string, string> = {
  Smartphones: 'from-blue-50 to-indigo-50',
  Laptops: 'from-violet-50 to-purple-50',
  Accessories: 'from-emerald-50 to-teal-50',
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const inCart = isInCart(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(!wishlist);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Link href={`/product/${product.id}`} className="group block h-full">
      <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/80 transition-all duration-300 flex flex-col h-full">

        {/* ── Product Image Area ─────────────────────────────────── */}
        <div
          className={`relative bg-gradient-to-br ${
            categoryGradients[product.category as string] ?? 'from-gray-50 to-gray-100'
          } h-52 flex items-center justify-center overflow-hidden`}
        >
          {/* Emoji image */}
          <span className="text-8xl select-none transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">
            {product.emoji}
          </span>

          {/* Overlay actions on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

          {/* Quick view button */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-white">
              <Eye className="w-3.5 h-3.5" />
              View Details
            </span>
          </div>

          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-3 left-3 ${
                badgeStyles[product.badge] ?? 'bg-gray-700 text-white'
              } text-xs font-bold px-2.5 py-1 rounded-full shadow-md`}
            >
              {product.badge}
            </span>
          )}

          {/* Discount */}
          {discount > 0 && (
            <span className="absolute top-3 right-12 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100 duration-300"
            aria-label={wishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                wishlist
                  ? 'text-red-500 fill-red-500'
                  : 'text-gray-400 hover:text-red-400'
              }`}
            />
          </button>

          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
              <span className="bg-gray-800 text-white text-sm font-bold px-4 py-2 rounded-xl">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* ── Product Info ───────────────────────────────────────── */}
        <div className="p-5 flex flex-col flex-1">
          {/* Category */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              {product.category}
            </span>
            {!product.inStock && (
              <span className="text-xs text-red-500 font-medium">
                Out of stock
              </span>
            )}
          </div>

          {/* Name */}
          <h3 className="font-bold text-gray-900 text-base leading-snug mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3 flex-1">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'text-amber-400 fill-amber-400'
                      : i < product.rating
                      ? 'text-amber-400 fill-amber-200'
                      : 'text-gray-200 fill-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              <span className="font-semibold text-gray-700">
                {product.rating}
              </span>{' '}
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Price + Add to Cart */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="text-2xl font-extrabold text-gray-900">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="ml-1.5 text-sm text-gray-400 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95 shrink-0 ${
                justAdded || inCart
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                  : product.inStock
                  ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-200'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added!</span>
                </>
              ) : inCart ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>In Cart</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
