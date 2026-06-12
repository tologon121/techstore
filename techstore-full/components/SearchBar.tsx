'use client';

import { Search, X, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  loading?: boolean;
  resultCount?: number;
  showResultCount?: boolean;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search products, brands, categories...',
  loading = false,
  resultCount,
  showResultCount = false,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  // Keyboard shortcut: "/" to focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        inputRef.current?.blur();
        onChange('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onChange]);

  return (
    <div className="relative">
      {/* Search icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        {loading ? (
          <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
        ) : (
          <Search
            className={`w-5 h-5 transition-colors ${
              focused ? 'text-blue-500' : 'text-gray-400'
            }`}
          />
        )}
      </div>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className={`w-full pl-12 pr-12 py-3.5 bg-white border rounded-xl text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 ${
          focused
            ? 'border-blue-400 ring-2 ring-blue-100 shadow-sm'
            : 'border-gray-200 hover:border-gray-300'
        }`}
        autoComplete="off"
        spellCheck={false}
      />

      {/* Right side: result count or clear button */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {showResultCount && value && resultCount !== undefined && (
          <span className="text-xs text-gray-400 font-medium whitespace-nowrap hidden sm:block">
            {resultCount} found
          </span>
        )}

        {value ? (
          <button
            onClick={() => {
              onChange('');
              inputRef.current?.focus();
            }}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        ) : (
          <span className="hidden sm:flex items-center gap-0.5 text-xs text-gray-300 bg-gray-100 px-1.5 py-0.5 rounded font-mono">
            /
          </span>
        )}
      </div>
    </div>
  );
}
