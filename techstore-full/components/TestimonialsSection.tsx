import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Customer Reviews
          </p>
          <h2 className="section-heading">
            Loved by thousands
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Don&apos;t take our word for it — see what real customers are saying
            about their TechStore experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 relative group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-200 fill-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                &ldquo;{t.comment}&rdquo;
              </p>

              {/* Product */}
              <div className="text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded-full mb-3">
                Purchased: {t.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2.5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-gray-900">4.9 out of 5</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-500 text-sm">Based on 15,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
