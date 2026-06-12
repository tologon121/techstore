'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Clock,
  MessageSquare,
  HelpCircle,
  Package,
  CreditCard,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@techstore.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:hello@techstore.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    sub: 'Mon–Fri, 9AM–6PM PST',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '123 Tech Avenue',
    sub: 'San Francisco, CA 94102',
    href: 'https://maps.google.com',
  },
];

const faqTopics = [
  {
    icon: Package,
    label: 'Shipping & Delivery',
    desc: 'Track orders, delivery timelines, free shipping thresholds.',
  },
  {
    icon: CreditCard,
    label: 'Returns & Refunds',
    desc: 'Our 30-day hassle-free return policy and refund process.',
  },
  {
    icon: HelpCircle,
    label: 'Product Questions',
    desc: 'Compatibility, specs, and expert buying advice.',
  },
  {
    icon: MessageSquare,
    label: 'General Inquiries',
    desc: 'Press, partnerships, careers, and everything else.',
  },
];

interface FormState {
  name: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    topic: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const setField = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const ne = { ...e }; delete ne[field]; return ne; });
  };

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20)
      e.message = 'Message must be at least 20 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
  };

  const inputClass = (field: keyof FormState) =>
    `input-field ${errors[field] ? 'input-error' : ''}`;

  return (
    <div>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-blue-300 font-medium mb-5">
            <MessageSquare className="w-4 h-4" />
            We&apos;re here to help
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Have a question, feedback, or just want to say hello? Our team is
            ready to help and typically responds within a few hours.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left: Contact Info + FAQ Topics ─────────────────────── */}
          <div className="space-y-6">
            {/* Contact info cards */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Contact Details
              </h2>
              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {value}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900 text-sm">
                  Response Times
                </span>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Email</span>
                  <span className="font-semibold text-gray-900">Within 24h</span>
                </li>
                <li className="flex justify-between">
                  <span>Phone</span>
                  <span className="font-semibold text-gray-900">Immediate</span>
                </li>
                <li className="flex justify-between">
                  <span>Live Chat</span>
                  <span className="font-semibold text-gray-900">~2 minutes</span>
                </li>
              </ul>
            </div>

            {/* FAQ topics */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                Common Topics
              </h3>
              <div className="space-y-2">
                {faqTopics.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {label}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ─────────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {status === 'success' ? (
                /* Success state */
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5 animate-scale-in">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 mb-6 max-w-xs mx-auto">
                    Thanks for reaching out, {form.name.split(' ')[0]}. We&apos;ll
                    get back to you within 24 hours at{' '}
                    <span className="font-semibold text-blue-600">
                      {form.email}
                    </span>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setForm({
                        name: '',
                        email: '',
                        topic: '',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="text-blue-600 font-semibold hover:underline text-sm"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-900">
                      Send Us a Message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) => setField('name', e.target.value)}
                          className={inputClass('name')}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1.5">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) => setField('email', e.target.value)}
                          className={inputClass('email')}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1.5">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Topic */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Topic
                      </label>
                      <select
                        value={form.topic}
                        onChange={(e) => setField('topic', e.target.value)}
                        className="input-field"
                      >
                        <option value="">Select a topic (optional)</option>
                        <option value="shipping">Shipping & Delivery</option>
                        <option value="returns">Returns & Refunds</option>
                        <option value="product">Product Questions</option>
                        <option value="order">Order Issues</option>
                        <option value="partnership">Partnership</option>
                        <option value="press">Press & Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="How can we help you today?"
                        value={form.subject}
                        onChange={(e) => setField('subject', e.target.value)}
                        className={inputClass('subject')}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        placeholder="Tell us more about your question or concern. The more detail you share, the better we can help you."
                        value={form.message}
                        onChange={(e) => setField('message', e.target.value)}
                        rows={6}
                        className={`${inputClass('message')} resize-none`}
                      />
                      <div className="flex justify-between mt-1">
                        {errors.message ? (
                          <p className="text-red-500 text-xs">{errors.message}</p>
                        ) : (
                          <span />
                        )}
                        <span
                          className={`text-xs ${
                            form.message.length < 20
                              ? 'text-gray-300'
                              : 'text-emerald-500'
                          }`}
                        >
                          {form.message.length} / 20 min
                        </span>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full py-4 rounded-xl text-base disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting this form you agree to our{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                      . We never share your information with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
