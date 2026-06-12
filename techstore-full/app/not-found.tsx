'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center">

        {/* Giant 404 */}
        <div className="relative mb-8">
          <p className="text-[140px] md:text-[180px] font-black leading-none select-none bg-gradient-to-br from-blue-100 to-violet-100 bg-clip-text text-transparent">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center border border-blue-100 shadow-lg">
              <ShoppingBag className="w-12 h-12 text-blue-300" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
          Oops! Page not found
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm mx-auto">
          We couldn&apos;t find the page you&apos;re looking for. It may have
          been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="btn-primary px-6 py-3.5 rounded-xl"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/catalog"
            className="btn-secondary px-6 py-3.5 rounded-xl"
          >
            <Search className="w-4 h-4" />
            Browse Catalog
          </Link>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">
            Popular pages
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/catalog?category=Smartphones', label: '📱 Smartphones' },
              { href: '/catalog?category=Laptops', label: '💻 Laptops' },
              { href: '/catalog?category=Accessories', label: '🎧 Accessories' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back to previous page
          </button>
        </div>
      </div>
    </div>
  );
}
