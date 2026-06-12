import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  Heart,
  Zap,
  TrendingUp,
  Shield,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about TechStore — our mission, values, and the team behind your favorite tech destination.',
};

const stats = [
  { value: '2019', label: 'Founded' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '15+', label: 'Countries Served' },
  { value: '4.9★', label: 'Average Rating' },
];

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    desc: 'We hand-select every product in our catalog, rejecting anything that doesn\'t meet our strict quality criteria. If we wouldn\'t buy it ourselves, we won\'t sell it.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Customer First',
    desc: 'Every decision we make starts with a single question: "Is this good for our customers?" From our pricing to our return policy, you always come first.',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
  },
  {
    icon: Globe,
    title: 'Sustainable Future',
    desc: 'We are committed to reducing our environmental impact through responsible packaging, carbon-neutral shipping, and partnerships with eco-conscious brands.',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: Heart,
    title: 'Genuine Passion',
    desc: 'We are a team of genuine tech enthusiasts. Our passion shows in every product recommendation, every customer interaction, and every detail of the shopping experience.',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
  },
];

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-founder',
    emoji: '👨‍💼',
    bio: 'Former product lead at Apple. Founded TechStore with a vision to democratize access to premium tech.',
  },
  {
    name: 'Sarah Kim',
    role: 'COO & Co-founder',
    emoji: '👩‍💼',
    bio: '10 years in operations at Amazon. Obsessed with fast, reliable logistics and customer experience.',
  },
  {
    name: 'Marcus Torres',
    role: 'Head of Engineering',
    emoji: '👨‍💻',
    bio: 'Full-stack engineer. Built TechStore\'s platform from the ground up, scaling to serve 50K+ customers.',
  },
  {
    name: 'Priya Patel',
    role: 'Head of Customer Success',
    emoji: '👩‍💻',
    bio: 'Customer advocate with a 98% satisfaction rate. Believes every support interaction is an opportunity to delight.',
  },
  {
    name: 'Jordan Lee',
    role: 'Lead Product Curator',
    emoji: '🧑‍🔬',
    bio: 'Tests and reviews every product before it hits the catalog. Has personally unboxed over 1,000 devices.',
  },
  {
    name: 'Maya Rodriguez',
    role: 'Marketing Director',
    emoji: '👩‍🎨',
    bio: 'Brand storyteller. Grew TechStore\'s community to 200K+ followers through authentic, helpful content.',
  },
];

const milestones = [
  { year: '2019', event: 'TechStore founded with a catalog of 12 products.' },
  { year: '2020', event: 'Reached 5,000 customers. Launched next-day shipping.' },
  { year: '2021', event: 'Expanded to 15 countries. Won "Best New E-Commerce" award.' },
  { year: '2022', event: '25,000 customers. Launched the Accessories category.' },
  { year: '2023', event: '50,000 customers and growing. Achieved carbon-neutral shipping.' },
  { year: '2024', event: 'Launched TechStore 2.0 with AI-powered recommendations.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950 text-white py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-blue-300 font-medium mb-6">
            <Zap className="w-4 h-4" />
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight">
            We&apos;re passionate about{' '}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              great technology
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            TechStore was born from a simple belief: everyone deserves access
            to the world&apos;s best tech, delivered with transparency, care,
            and exceptional service — no compromises.
          </p>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-1.5">
                  {value}
                </p>
                <p className="text-gray-500 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Making premium tech accessible to everyone
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              We started TechStore because we were frustrated with the
              experience of buying tech online. Too many choices, too little
              guidance, and too many stores more interested in selling than in
              helping.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              So we built the store we always wanted to shop at: curated,
              honest, and built around your needs. Every product in our catalog
              has been personally reviewed by our team. We explain what
              products are actually good for and who they&apos;re best suited
              for.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We&apos;re not trying to be the store with the most products. We
              want to be the store with the right products — the ones worth
              your money and your trust.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, label: 'Always Fresh', desc: 'We update our catalog weekly with the latest releases.' },
              { icon: Shield, label: 'Vetted Quality', desc: 'Every product passes our 20-point quality checklist.' },
              { icon: Star, label: 'Top Rated', desc: '4.9/5 average customer rating across all products.' },
              { icon: Heart, label: 'Built with Care', desc: 'Every detail of TechStore is designed with you in mind.' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                <Icon className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">{label}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              What We Stand For
            </p>
            <h2 className="section-heading">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, iconColor, iconBg }) => (
              <div
                key={title}
                className="card p-6 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
            How We Got Here
          </p>
          <h2 className="section-heading">Our Journey</h2>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 sm:-translate-x-0.5" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Year bubble */}
                <div className="relative z-10 flex items-center justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center text-xs font-extrabold shadow-lg shadow-blue-200">
                    {m.year}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 sm:w-[42%] sm:flex-none ${
                    i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-[58%]'
                  }`}
                >
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-600">{m.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              The People Behind TechStore
            </p>
            <h2 className="section-heading">Meet Our Team</h2>
            <p className="section-subheading max-w-xl mx-auto">
              A diverse team of tech lovers, builders, and customer advocates
              united by a passion for exceptional products and service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="card p-6 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-violet-100 rounded-2xl flex items-center justify-center text-4xl mb-4 border border-gray-100 group-hover:border-blue-200 transition-colors">
                  {member.emoji}
                </div>
                <h3 className="font-bold text-gray-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-xs font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
          Ready to experience TechStore?
        </h2>
        <p className="text-gray-500 mb-8 text-lg">
          Browse our curated catalog of the world&apos;s best tech products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/catalog"
            className="btn-primary px-8 py-4 rounded-2xl text-base"
          >
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="btn-secondary px-8 py-4 rounded-2xl text-base"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
