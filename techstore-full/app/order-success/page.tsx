import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  Package,
  Truck,
  Home,
  ArrowRight,
  Mail,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order Placed Successfully',
  description: 'Your order has been confirmed and is being processed.',
};

const steps = [
  {
    icon: CheckCircle2,
    title: 'Order Confirmed',
    desc: 'We\'ve received your order and sent a confirmation email.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    done: true,
  },
  {
    icon: Package,
    title: 'Being Packed',
    desc: 'Our team is carefully packing your items for shipment.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    done: false,
  },
  {
    icon: Truck,
    title: 'Out for Delivery',
    desc: 'Your package is on its way! Expected in 2-5 business days.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    done: false,
  },
  {
    icon: Home,
    title: 'Delivered',
    desc: 'Your order has arrived. Enjoy your new tech!',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    done: false,
  },
];

export default function OrderSuccessPage() {
  // Generate a random order number server-side
  const orderNumber = `TS-${(2024100000 + Math.floor(Math.random() * 99999))
    .toString()
    .slice(0, 9)}`;

  const estimatedDelivery = (() => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  })();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

      {/* ── Success Header ──────────────────────────────────────────── */}
      <div className="text-center mb-12">
        {/* Animated success icon */}
        <div className="relative inline-block mb-6">
          <div className="w-28 h-28 bg-emerald-100 rounded-full flex items-center justify-center mx-auto animate-scale-in">
            <CheckCircle2 className="w-14 h-14 text-emerald-500" />
          </div>
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full border-4 border-emerald-200 animate-ping opacity-30" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Order Confirmed! 🎉
        </h1>
        <p className="text-gray-500 text-lg mb-1">
          Thank you for shopping with TechStore.
        </p>
        <p className="text-gray-400 text-sm">
          A confirmation has been sent to your email address.
        </p>
      </div>

      {/* ── Order Details Card ──────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Order Number
            </p>
            <p className="text-base font-extrabold text-blue-600">
              {orderNumber}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Order Date
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Est. Delivery
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {estimatedDelivery}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Status
            </p>
            <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 border border-emerald-200 text-xs font-bold px-2.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Confirmed
            </span>
          </div>
        </div>
      </div>

      {/* ── Order Timeline ──────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-5">
          Order Tracking
        </h2>
        <div className="space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex gap-4">
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      step.done
                        ? `${step.bg} ${step.border}`
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        step.done ? step.color : 'text-gray-300'
                      }`}
                    />
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-0.5 flex-1 min-h-[32px] ${
                        step.done ? 'bg-emerald-200' : 'bg-gray-100'
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6 flex-1">
                  <p
                    className={`font-semibold text-sm ${
                      step.done ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                    {step.done && (
                      <span className="ml-2 text-xs text-emerald-600 font-bold">
                        ✓ Completed
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Support Info ────────────────────────────────────────────── */}
      <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5 mb-8">
        <h3 className="font-bold text-gray-900 mb-3 text-sm">
          Need help with your order?
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:hello@techstore.com"
            className="flex items-center gap-2 text-sm text-blue-600 font-medium hover:underline"
          >
            <Mail className="w-4 h-4" />
            hello@techstore.com
          </a>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-sm text-blue-600 font-medium hover:underline"
          >
            <Phone className="w-4 h-4" />
            +1 (555) 123-4567
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Mon–Fri, 9AM–6PM PST. Reference your order number: {orderNumber}
        </p>
      </div>

      {/* ── Action Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="btn-secondary flex-1 sm:flex-none sm:px-8 py-4 rounded-2xl text-base justify-center"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
        <Link
          href="/catalog"
          className="btn-primary flex-1 sm:flex-none sm:px-8 py-4 rounded-2xl text-base justify-center"
        >
          Continue Shopping
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
