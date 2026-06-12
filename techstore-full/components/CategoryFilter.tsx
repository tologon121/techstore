'use client';

import { Category } from '@/types';
import { categories } from '@/data/products';

interface CategoryFilterProps {
  selected: Category;
  onChange: (category: Category) => void;
  counts: Record<string, number>;
}

export default function CategoryFilter({
  selected,
  onChange,
  counts,
}: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="radiogroup"
      aria-label="Filter by category"
    >
      {categories.map(({ value, label, emoji }) => {
        const count = value === 'All'
          ? Object.values(counts).reduce((a, b) => a + b, 0)
          : (counts[value] ?? 0);
        const isSelected = selected === value;

        return (
          <button
            key={value}
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(value as Category)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
              isSelected
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="text-base leading-none">{emoji}</span>
            <span>{label}</span>
            <span
              className={`text-xs font-bold min-w-[22px] h-[22px] flex items-center justify-center rounded-full ${
                isSelected
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
