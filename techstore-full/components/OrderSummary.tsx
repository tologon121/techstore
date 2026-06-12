'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Truck, Tag, Info, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface OrderSummaryProps {
  showCheckoutButton?: boolean;
  showPromoCode?: boolean;
  actionButton?: React.ReactNode;
}

export default function OrderSummary({
  showCheckoutButton = false,
  showPromoCode = true,
  actionButton,
}: OrderSummaryProps) {
  const { items, totalPrice, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const freeShippingThreshold = 50;
  const shipping = totalPrice >= freeShippingThreshold ? 0 : 9.99;
  const discount = promoApplied ? totalPrice * 0.1 : 0;
  const tax = (totalPrice - discount) * 0.085;
  const total = totalPrice - discount + shipping + tax;

  const amountToFreeShipping = freeShippingThreshold - totalPrice;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'TECH10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try TECH10');
      setPromoApplied(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h2 className="text-lg font-extrabold text-gray-900 mb-5">
        Order Summary
      </h2>

      {/* Item list */}
      <div className="space-y-3 mb-5">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center gap-3 text-sm"
          >
            <span className="text-xl shrink-0">{item.product.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800 truncate">
                {item.product.name}
              </p>
              <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
            </div>
            <span className="font-semibold text-gray-700 shrink-0">
              ${(item.product.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4 mb-4 space-y-2.5">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Subtotal ({totalItems} item{totalItems !== 1 ? 's' : ''})
          </span>
          <span className="font-semibold text-gray-700">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        {/* Discount */}
        {promoApplied && (
          <div className="flex justify-between text-sm">
            <span className="text-emerald-600 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              Promo (TECH10 -10%)
            </span>
            <span className="font-semibold text-emerald-600">
              -${discount.toFixed(2)}
            </span>
          </div>
        )}

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5" />
            Shipping
          </span>
          <span
            className={`font-semibold ${
              shipping === 0 ? 'text-emerald-600' : 'text-gray-700'
            }`}
          >
            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        {/* Tax */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 flex items-center gap-1.5">
            Tax (8.5%)
            <span title="Taxes calculated at checkout" className="text-gray-300">
              <Info className="w-3 h-3" />
            </span>
          </span>
          <span className="font-semibold text-gray-700">${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Free shipping progress */}
      {amountToFreeShipping > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
          <p className="text-xs text-amber-700 font-medium mb-2">
            Add{' '}
            <span className="font-bold">${amountToFreeShipping.toFixed(2)}</span>{' '}
            more for free shipping!
          </p>
          <div className="h-1.5 bg-amber-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-500 rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(
                  (totalPrice / freeShippingThreshold) * 100,
                  100
                )}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Promo code */}
      {showPromoCode && (
        <div className="mb-5">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value.toUpperCase());
                  setPromoError('');
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleApplyPromo()}
                placeholder="Promo code"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                disabled={promoApplied}
              />
            </div>
            <button
              onClick={handleApplyPromo}
              disabled={!promoCode || promoApplied}
              className="px-4 py-2.5 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              {promoApplied ? '✓ Applied' : 'Apply'}
            </button>
          </div>
          {promoError && (
            <p className="text-red-500 text-xs mt-1.5">{promoError}</p>
          )}
          {promoApplied && (
            <p className="text-emerald-600 text-xs mt-1.5 font-medium">
              ✓ TECH10 applied — 10% off!
            </p>
          )}
        </div>
      )}

      {/* Total */}
      <div className="border-t border-gray-100 pt-4 mb-5">
        <div className="flex justify-between items-baseline">
          <span className="text-base font-bold text-gray-900">
            Order Total
          </span>
          <span className="text-2xl font-extrabold text-gray-900">
            ${total.toFixed(2)}
          </span>
        </div>
        {shipping === 0 && (
          <p className="text-xs text-emerald-600 font-medium mt-1 text-right">
            🎉 You qualify for free shipping!
          </p>
        )}
      </div>

      {/* Action */}
      {actionButton}
      {showCheckoutButton && (
        <Link
          href="/checkout"
          className="btn-primary w-full text-base py-4 rounded-2xl"
        >
          Proceed to Checkout
          <ArrowRight className="w-5 h-5" />
        </Link>
      )}

      {/* Security note */}
      <p className="text-center text-xs text-gray-400 mt-4">
        🔒 256-bit SSL encryption • Your data is safe
      </p>
    </div>
  );
}
