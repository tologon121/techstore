'use client';

import { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import { PackageSearch, RefreshCw } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  searchQuery?: string;
  onClearFilters?: () => void;
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="h-52 skeleton" />
      <div className="p-5 space-y-3">
        <div className="skeleton h-4 w-20 rounded-full" />
        <div className="skeleton h-5 w-4/5 rounded-lg" />
        <div className="skeleton h-4 w-full rounded-lg" />
        <div className="skeleton h-4 w-3/4 rounded-lg" />
        <div className="flex justify-between items-center mt-4">
          <div className="skeleton h-7 w-24 rounded-lg" />
          <div className="skeleton h-9 w-24 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({
  products,
  loading = false,
  searchQuery,
  onClearFilters,
}: ProductGridProps) {
  // Loading state
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-5">
          <PackageSearch className="w-10 h-10 text-gray-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          No products found
        </h3>
        <p className="text-gray-400 text-sm max-w-xs mb-6">
          {searchQuery
            ? `We couldn't find any products matching "${searchQuery}". Try a different search term.`
            : 'No products match your current filters. Try adjusting your selection.'}
        </p>
        {onClearFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Clear all filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'both' }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
