'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import OrderSummary from '@/components/OrderSummary';
import {
  ArrowLeft,
  Lock,
  CreditCard,
  User,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Loader2,
  CheckCircle2,
  Wallet,
  Bitcoin,
} from 'lucide-react';
import { CheckoutFormData, FormErrors } from '@/types';

const STEPS = ['Contact', 'Shipping', 'Payment'];

const initialForm: CheckoutFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: 'United States',
  paymentMethod: 'card',
  cardNumber: '',
  cardExpiry: '',
  cardCvc: '',
  saveInfo: false,
};

function validate(form: CheckoutFormData, step: number): FormErrors {
  const errors: FormErrors = {};

  if (step >= 0) {
    if (!form.firstName.trim()) errors.firstName = 'First name is required';
    if (!form.lastName.trim()) errors.lastName = 'Last name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = 'Enter a valid email address';
    if (!form.phone.trim()) errors.phone = 'Phone number is required';
  }

  if (step >= 1) {
    if (!form.address.trim()) errors.address = 'Address is required';
    if (!form.city.trim()) errors.city = 'City is required';
    if (!form.state.trim()) errors.state = 'State is required';
    if (!form.zip.trim()) errors.zip = 'ZIP code is required';
  }

  if (step >= 2 && form.paymentMethod === 'card') {
    if (!form.cardNumber?.replace(/\s/g, '').match(/^\d{16}$/))
      errors.cardNumber = 'Enter a valid 16-digit card number';
    if (!form.cardExpiry?.match(/^\d{2}\/\d{2}$/))
      errors.cardExpiry = 'Enter expiry as MM/YY';
    if (!form.cardCvc?.match(/^\d{3,4}$/))
      errors.cardCvc = 'Enter a valid CVV';
  }

  return errors;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutFormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const shipping = totalPrice >= 50 ? 0 : 9.99;
  const tax = totalPrice * 0.085;
  const total = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          Nothing to checkout
        </h2>
        <p className="text-gray-400 mb-6">
          Your cart is empty. Add some products first.
        </p>
        <Link href="/catalog" className="btn-primary inline-flex">
          Browse Products
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  const setField = (field: keyof CheckoutFormData, value: string | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const ne = { ...e }; delete ne[field]; return ne; });
  };

  const formatCardNumber = (val: string) =>
    val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  };

  const handleNext = () => {
    const errs = validate(form, step);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    if (step < 2) setStep(step + 1);
  };

  const handleSubmit = async () => {
    const errs = validate(form, 2);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    clearCart();
    router.push('/order-success');
  };

  const inputClass = (field: string) =>
    `input-field ${errors[field] ? 'input-error border-red-300 ring-2 ring-red-100' : ''}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/cart" className="hover:text-blue-600 transition-colors">Cart</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-700 font-medium">Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ── Left: Form ────────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/cart" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-blue-600 text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </Link>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900">Checkout</h1>

          {/* Step indicator */}
          <div className="flex items-center gap-0">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center">
                <button
                  onClick={() => i < step && setStep(i)}
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                    i <= step ? 'text-blue-600' : 'text-gray-300'
                  } ${i < step ? 'cursor-pointer hover:text-blue-700' : 'cursor-default'}`}
                >
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                    i < step
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : i === step
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-gray-200 text-gray-300'
                  }`}>
                    {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
                {i < STEPS.length - 1 && (
                  <div className={`w-12 sm:w-20 h-0.5 mx-2 ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          {/* ── Step 0: Contact ──────────────────────────────────────── */}
          {step === 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <User className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={form.firstName}
                    onChange={(e) => setField('firstName', e.target.value)}
                    className={inputClass('firstName')}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1.5">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => setField('lastName', e.target.value)}
                    className={inputClass('lastName')}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1.5">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    className={`${inputClass('email')} pl-10`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    className={`${inputClass('phone')} pl-10`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
              </div>
            </div>
          )}

          {/* ── Step 1: Shipping ─────────────────────────────────────── */}
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">Shipping Address</h2>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  <textarea
                    placeholder="123 Main Street, Apt 4B"
                    value={form.address}
                    onChange={(e) => setField('address', e.target.value)}
                    rows={2}
                    className={`${inputClass('address')} pl-10 resize-none`}
                  />
                </div>
                {errors.address && <p className="text-red-500 text-xs mt-1.5">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="San Francisco"
                    value={form.city}
                    onChange={(e) => setField('city', e.target.value)}
                    className={inputClass('city')}
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1.5">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="California"
                    value={form.state}
                    onChange={(e) => setField('state', e.target.value)}
                    className={inputClass('state')}
                  />
                  {errors.state && <p className="text-red-500 text-xs mt-1.5">{errors.state}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="94102"
                    value={form.zip}
                    onChange={(e) => setField('zip', e.target.value)}
                    className={inputClass('zip')}
                  />
                  {errors.zip && <p className="text-red-500 text-xs mt-1.5">{errors.zip}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country</label>
                  <select
                    value={form.country}
                    onChange={(e) => setField('country', e.target.value)}
                    className="input-field"
                  >
                    {['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Japan'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* ── Step 2: Payment ──────────────────────────────────────── */}
          {step === 2 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">Payment Method</h2>
              </div>

              {/* Method selector */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'card', label: 'Credit Card', icon: CreditCard },
                  { value: 'paypal', label: 'PayPal', icon: Wallet },
                  { value: 'crypto', label: 'Crypto', icon: Bitcoin },
                ].map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => setField('paymentMethod', value)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                      form.paymentMethod === value
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </button>
                ))}
              </div>

              {form.paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={form.cardNumber}
                        onChange={(e) => setField('cardNumber', formatCardNumber(e.target.value))}
                        maxLength={19}
                        className={`${inputClass('cardNumber')} pl-10 font-mono`}
                      />
                    </div>
                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1.5">{errors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Expiry Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={form.cardExpiry}
                        onChange={(e) => setField('cardExpiry', formatExpiry(e.target.value))}
                        maxLength={5}
                        className={`${inputClass('cardExpiry')} font-mono`}
                      />
                      {errors.cardExpiry && <p className="text-red-500 text-xs mt-1.5">{errors.cardExpiry}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={form.cardCvc}
                        onChange={(e) => setField('cardCvc', e.target.value.replace(/\D/g, '').slice(0, 4))}
                        maxLength={4}
                        className={`${inputClass('cardCvc')} font-mono`}
                      />
                      {errors.cardCvc && <p className="text-red-500 text-xs mt-1.5">{errors.cardCvc}</p>}
                    </div>
                  </div>
                </div>
              )}

              {form.paymentMethod === 'paypal' && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                  <Wallet className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-blue-700">You will be redirected to PayPal to complete your payment securely.</p>
                </div>
              )}

              {form.paymentMethod === 'crypto' && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                  <Bitcoin className="w-10 h-10 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-amber-700">You will receive a crypto wallet address after placing your order.</p>
                </div>
              )}

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.saveInfo}
                  onChange={(e) => setField('saveInfo', e.target.checked)}
                  className="w-4 h-4 rounded accent-blue-600"
                />
                <span className="text-sm text-gray-600">
                  Save my information for faster checkout next time
                </span>
              </label>
            </div>
          )}

          {/* ── Navigation Buttons ──────────────────────────────────── */}
          <div className="flex gap-3">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="btn-secondary px-6 py-3.5 rounded-xl"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
            {step < 2 ? (
              <button
                onClick={handleNext}
                className="btn-primary flex-1 py-3.5 rounded-xl text-base"
              >
                Continue to {STEPS[step + 1]}
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-primary flex-1 py-4 rounded-xl text-base disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Order...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Place Order — ${total.toFixed(2)}
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* ── Right: Order Summary ──────────────────────────────────── */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <OrderSummary showPromoCode={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
