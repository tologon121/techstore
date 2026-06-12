import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Award, Headphones, Zap } from 'lucide-react';

import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import NewsletterSection from '@/components/NewsletterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'TechStore — Premium Tech, Delivered Fast',
  description:
    'Shop the latest smartphones, laptops, and accessories. Curated products, free shipping on $50+, and 30-day returns.',
};

const featured = products.filter((p) => p.badge).slice(0, 3);

const categoryShowcase = [
  {
    label: 'Smartphones',
    emoji: '📱',
    desc: 'The latest flagships from Apple & Samsung',
    color: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-50 to-cyan-50',
    border: 'border-blue-100 hover:border-blue-300',
    count: products.filter((p) => p.category === 'Smartphones').length,
  },
  {
    label: 'Laptops',
    emoji: '💻',
    desc: 'Powerful machines for work & creativity',
    color: 'from-violet-500 to-purple-600',
    bg: 'from-violet-50 to-purple-50',
    border: 'border-violet-100 hover:border-violet-300',
    count: products.filter((p) => p.category === 'Laptops').length,
  },
  {
    label: 'Accessories',
    emoji: '🎧',
    desc: 'Complete your ultimate tech setup',
    color: 'from-emerald-500 to-teal-600',
    bg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100 hover:border-emerald-300',
    count: products.filter((p) => p.category === 'Accessories').length,
  },
];

const whyUs = [
  {
    icon: TrendingUp,
    title: 'Always Up to Date',
    desc: 'We constantly refresh our catalog to carry the newest and most innovative products from the world\'s leading brands.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    desc: 'Every product ships with a 2-year warranty. If you\'re not 100% satisfied, our 30-day hassle-free returns have you covered.',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    desc: 'Our tech-savvy support team is available around the clock by email, phone, and live chat to help you with any question.',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Handpicked for you
            </p>
            <h2 className="section-heading">Featured Products</h2>
            <p className="text-gray-500 mt-2">
              Our editors&apos; top picks — the very best in their class.
            </p>
          </div>
          <Link
            href="/catalog"
            className="hidden sm:inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-sm group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/catalog" className="btn-primary">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Browse by Category
            </p>
            <h2 className="section-heading">Shop Your Way</h2>
            <p className="section-subheading max-w-lg mx-auto">
              Explore our curated selection across three core categories —
              each one packed with the best products on the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryShowcase.map((cat) => (
              <Link
                key={cat.label}
                href={`/catalog?category=${cat.label}`}
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${cat.bg} ${cat.border} p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color}`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-3xl mb-5 shadow-lg`}
                >
                  {cat.emoji}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cat.label}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{cat.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium bg-white/70 px-2.5 py-1 rounded-full border border-white">
                    {cat.count} products
                  </span>
                  <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    Shop Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All products teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Full Catalog
            </p>
            <h2 className="section-heading">All Products</h2>
          </div>
          <Link
            href="/catalog"
            className="hidden sm:inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-sm group"
          >
            See Everything
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(3, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Why Choose Us
            </p>
            <h2 className="section-heading">Built for tech lovers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map(({ icon: Icon, title, desc, iconColor, iconBg }) => (
              <div key={title} className="text-center">
                <div
                  className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                >
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-32 h-32 rounded-full bg-white blur-2xl" />
            <div className="absolute bottom-4 right-4 w-40 h-40 rounded-full bg-white blur-2xl" />
          </div>
          <div className="relative">
            <Zap className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Ready to upgrade?
            </h2>
            <p className="text-blue-100 mb-8 text-lg max-w-lg mx-auto">
              Browse our full catalog and find your next favorite piece of technology.
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all hover:shadow-2xl active:scale-95 text-base"
            >
              Explore the Catalog
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
