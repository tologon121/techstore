'use client';

import { useState } from 'react';
import { Mail, CheckCircle2, Loader2, Send } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <Mail className="w-7 h-7 text-white" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Stay ahead of the curve
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto">
          Get exclusive deals, early access to new arrivals, and expert tech
          tips delivered to your inbox every week.
        </p>

        {status === 'success' ? (
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/30 backdrop-blur-sm rounded-2xl px-6 py-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-300" />
            <div className="text-left">
              <p className="font-bold text-white">You&apos;re on the list!</p>
              <p className="text-blue-200 text-sm">
                Check your inbox for a welcome gift 🎁
              </p>
            </div>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-sm transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-6 py-4 rounded-xl hover:bg-blue-50 transition-all disabled:opacity-70 whitespace-nowrap text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Subscribe Free
                  </>
                )}
              </button>
            </form>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-blue-200">
              <span>✓ No spam, ever</span>
              <span>✓ Unsubscribe anytime</span>
              <span>✓ Weekly digest only</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
