'use client';

import { useState } from 'react';
import { X, Truck } from 'lucide-react';

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-violet-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
        <Truck className="w-4 h-4 shrink-0 hidden sm:block" />
        <p className="text-sm font-medium text-center">
          🎉 Free shipping on all orders over{' '}
          <span className="font-bold">$50</span> — Use code{' '}
          <span className="font-bold bg-white/20 px-1.5 py-0.5 rounded">
            TECH10
          </span>{' '}
          for 10% off your first order!
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
