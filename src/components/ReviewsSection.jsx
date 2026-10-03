import React from 'react';
import { Star, Quote, Sparkles, Heart } from 'lucide-react';
import { REVIEWS } from '../data/coffeeData';

export default function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28 bg-cafe-cream-50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cafe-cream-200 text-cafe-mocha text-[11px] uppercase tracking-[0.25em] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cafe-caramel" />
            COMMUNITY & VIBES
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cafe-forest tracking-tight">
            Cozy Words from <span className="italic text-cafe-caramel underline-accent">_Our Regulars_</span>
          </h2>
          <p className="text-cafe-roast/80 text-sm sm:text-base mt-4 font-normal">
            Every cup tells a story, and every table has shared a heartfelt conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-cafe-cream-200 shadow-cozy hover:shadow-cozy-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-cafe-caramel/20 absolute top-6 right-6" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-cafe-roast text-sm leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-cafe-cream-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-cafe-forest">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-cafe-roast/70 font-medium">
                    {review.role}
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-cafe-cream-100 text-[10px] font-semibold text-cafe-forest">
                  {review.favoriteDrink}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
