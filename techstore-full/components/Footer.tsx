import Link from 'next/link';
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  X,
  AtSign,
  Globe,
  Rss,
  Shield,
  Truck,
  RotateCcw,
  CreditCard,
} from 'lucide-react';

const shopLinks = [
  { href: '/catalog', label: 'All Products' },
  { href: '/catalog?category=Smartphones', label: 'Smartphones' },
  { href: '/catalog?category=Laptops', label: 'Laptops' },
  { href: '/catalog?category=Accessories', label: 'Accessories' },
  { href: '/catalog?sort=rating', label: 'Top Rated' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Press Kit' },
  { href: '#', label: 'Blog' },
];

const supportLinks = [
  { href: '#', label: 'Help Center' },
  { href: '#', label: 'Track Your Order' },
  { href: '#', label: 'Returns & Refunds' },
  { href: '#', label: 'Warranty Claims' },
  { href: '#', label: 'Privacy Policy' },
];

const socialLinks = [
  { icon: X, href: '#', label: 'X (Twitter)' },
  { icon: AtSign, href: '#', label: 'Instagram' },
  { icon: Rss, href: '#', label: 'YouTube' },
  { icon: Globe, href: '#', label: 'GitHub' },
];

const trustBadges = [
  { icon: Shield, label: '2-Year Warranty' },
  { icon: Truck, label: 'Free Shipping $50+' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: CreditCard, label: 'Secure Checkout' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Trust badges row */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-sm font-medium text-gray-400"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-extrabold text-white">
                TechStore
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              Your trusted destination for premium tech products. We curate
              the world&apos;s best gadgets and deliver them to your door with
              exceptional service.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>hello@techstore.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>123 Tech Ave, San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TechStore, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
          <p className="text-xs text-gray-600">
            Built with Next.js 15 & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
