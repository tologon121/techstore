'use client';

import { useState, useMemo, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, ArrowUpDown, Grid3X3, List } from 'lucide-react';
import { products } from '@/data/products';
import { Category } from '@/types';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import ProductCard from '@/components/ProductCard';

const SORT_OPTIONS = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'name', label: 'Name A–Z' },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]['value'];

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as Category) || 'All';
  const initialSort = (searchParams.get('sort') as SortValue) || 'default';

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>(initialCategory);
  const [sort, setSort] = useState<SortValue>(initialSort);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      counts[p.category as string] = (counts[p.category as string] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered + sorted products
  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const matchesCat = category === 'All' || p.category === category;
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result = [...result].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
    }

    return result;
  }, [search, category, sort]);

  const clearFilters = useCallback(() => {
    setSearch('');
    setCategory('All');
    setSort('default');
  }, []);

  const hasActiveFilters =
    search || category !== 'All' || sort !== 'default';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* ── Page Header ────────────────────────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
              {category === 'All' ? 'All Products' : category}
            </h1>
            <p className="text-gray-400 text-sm">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
              {search ? ` for "${search}"` : ''}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="ml-2 text-blue-600 hover:underline font-medium"
                >
                  Clear filters
                </button>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* ── Search Bar ─────────────────────────────────────────────── */}
      <div className="mb-5">
        <SearchBar
          value={search}
          onChange={setSearch}
          resultCount={filtered.length}
          showResultCount
        />
      </div>

      {/* ── Filters + Sort Row ─────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Category filter */}
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <CategoryFilter
            selected={category}
            onChange={setCategory}
            counts={categoryCounts}
          />
        </div>

        {/* Right side: sort + view toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Sort dropdown */}
          <div className="relative flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors">
            <ArrowUpDown className="w-4 h-4 text-gray-400 shrink-0" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortValue)}
              className="appearance-none bg-transparent cursor-pointer focus:outline-none pr-1 text-sm"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* View toggle */}
          <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg transition-colors ${
                view === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              aria-label="Grid view"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg transition-colors ${
                view === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile filters toggle */}
          <button
            className="sm:hidden flex items-center gap-1.5 bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* ── Active Filter Tags ─────────────────────────────────────── */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-6">
          {category !== 'All' && (
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
              Category: {category}
              <button
                onClick={() => setCategory('All')}
                className="hover:text-blue-900 text-blue-500 ml-1"
              >
                ×
              </button>
            </span>
          )}
          {search && (
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
              Search: &ldquo;{search}&rdquo;
              <button
                onClick={() => setSearch('')}
                className="hover:text-blue-900 text-blue-500 ml-1"
              >
                ×
              </button>
            </span>
          )}
          {sort !== 'default' && (
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
              Sort: {SORT_OPTIONS.find((o) => o.value === sort)?.label}
              <button
                onClick={() => setSort('default')}
                className="hover:text-blue-900 text-blue-500 ml-1"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}

      {/* ── Product Grid / List ────────────────────────────────────── */}
      {view === 'grid' ? (
        <ProductGrid
          products={filtered}
          searchQuery={search}
          onClearFilters={clearFilters}
        />
      ) : (
        /* List view */
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <ProductGrid
              products={[]}
              searchQuery={search}
              onClearFilters={clearFilters}
            />
          ) : (
            filtered.map((product) => (
              <div key={product.id} className="max-w-2xl">
                <ProductCard product={product} />
              </div>
            ))
          )}
        </div>
      )}

      {/* ── Results Footer ─────────────────────────────────────────── */}
      {filtered.length > 0 && (
        <p className="text-center text-sm text-gray-400 mt-12">
          Showing {filtered.length} of {products.length} products
        </p>
      )}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
