import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Truck,
  RotateCcw,
  Star,
  Zap,
  ChevronRight,
} from 'lucide-react';

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '200+', label: 'Products' },
  { value: '2-Day', label: 'Avg. Delivery' },
];

const guarantees = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
  { icon: Shield, title: '2-Year Warranty', desc: 'On all products' },
  { icon: RotateCcw, title: '30-Day Returns', desc: 'No questions asked' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950 text-white">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping" />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-violet-400 rounded-full opacity-40 animate-ping [animation-delay:1s]" />
        <div className="absolute bottom-32 left-[20%] w-1 h-1 bg-cyan-400 rounded-full opacity-50 animate-ping [animation-delay:2s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-blue-300 font-medium mb-8">
            <Star className="w-4 h-4 text-amber-400 fill-current" />
            <span>Rated #1 Tech Store by 50,000+ customers</span>
            <ChevronRight className="w-4 h-4" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Next-gen tech,{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                delivered fast.
              </span>
              {/* Underline decoration */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10 Q75 2 150 8 Q225 14 298 6"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Shop the latest smartphones, laptops, and accessories from the
            world&apos;s top brands. Every product is curated for quality, and
            shipped with care.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/catalog"
              className="group inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-[0.98] text-base"
            >
              <Zap className="w-5 h-5" />
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-sm transition-all duration-300 active:scale-[0.98] text-base"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-2xl mx-auto">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-black text-white mb-0.5">{value}</p>
                <p className="text-xs text-slate-400 font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {guarantees.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-left"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-slate-400 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z"
            fill="rgb(249 250 251)"
          />
        </svg>
      </div>
    </section>
  );
}
