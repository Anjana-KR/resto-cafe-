import React, { useState } from 'react';
import { ArrowRight, Sparkles, Award, Coffee, Heart, CheckCircle2 } from 'lucide-react';

export default function LifestyleBanner() {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="lifestyle" className="py-16 sm:py-24 bg-cafe-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Large Rounded Warm Banner matching Reference Image */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#E8DEC8] via-[#E4D7BE] to-[#D9C8A8] border border-[#D5C29E] p-8 sm:p-12 lg:p-16 shadow-cozy overflow-hidden">
          
          {/* Organic aesthetic background curve shapes matching the reference art */}
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border-[18px] border-cafe-caramel/20 pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full border border-cafe-mocha/15 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cafe-caramel/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-cafe-mocha/20 text-cafe-forest text-[11px] uppercase tracking-[0.25em] font-bold mb-5 shadow-xs">
                <Sparkles className="w-3 h-3 text-cafe-caramel" />
                OUR STORY
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold text-cafe-forest tracking-tight leading-[1.15] mb-6">
                More Than Coffee, <br />
                <span className="italic text-cafe-forest font-semibold">It's a Lifestyle.</span>
              </h2>

              <p className="text-cafe-roast text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-normal">
                Beanora was born from a simple idea — that great coffee can make everyday moments feel special. We're here to bring you the finest beans, crafted with care, in a space that feels like home.
              </p>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={() => setShowStoryModal(true)}
                  className="px-7 py-3.5 rounded-full bg-cafe-forest hover:bg-cafe-forest-light text-white font-semibold text-xs uppercase tracking-[0.15em] shadow-md hover:shadow-forest-glow hover:scale-[1.02] transition-all flex items-center gap-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-cafe-mocha/20 w-full">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center text-cafe-forest shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-cafe-caramel" />
                  </div>
                  <span className="text-xs font-semibold text-cafe-forest">100% Ethical Sourcing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center text-cafe-forest shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-cafe-caramel" />
                  </div>
                  <span className="text-xs font-semibold text-cafe-forest">Small Drum Roasting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center text-cafe-forest shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-cafe-caramel" />
                  </div>
                  <span className="text-xs font-semibold text-cafe-forest">Community Focused</span>
                </div>
              </div>

            </div>

            {/* Right Visual Column matching reference photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative max-w-md w-full">
                
                {/* Image Container with organic warm curve */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white group">
                  <img
                    src="./images/lifestyle-latte.jpg"
                    alt="Marbled Iced Latte & Roasted Beans"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Glass Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-cafe-caramel text-white flex items-center justify-center shadow-sm">
                        <Coffee className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-serif text-sm font-bold text-cafe-forest">Crafted with Soul</p>
                        <p className="text-[11px] text-cafe-roast/80">Every cup pulled by hand</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cafe-forest text-white text-[10px] uppercase tracking-wider font-semibold">
                      Fresh Daily
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Story & Philosophy Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-cafe-cream-50 rounded-3xl max-w-xl w-full p-6 sm:p-10 shadow-2xl border border-cafe-cream-300 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-cafe-cream-300 text-cafe-roast hover:bg-cafe-cream-200 flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cafe-cream-200 text-cafe-mocha text-[10px] uppercase tracking-widest font-bold mb-3">
              EST. 2019
            </div>
            
            <h3 className="font-serif text-3xl font-bold text-cafe-forest mb-4">
              The Beanora Philosophy
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-cafe-roast leading-relaxed">
              <p>
                In a fast-paced world of rushed espresso shots in disposable cups, Beanora was created as an antidote. We believe coffee is not mere fuel; it is a grounding ritual, a pause button on a chaotic day.
              </p>
              <p>
                We partner directly with family-run farms across Ethiopia, Colombia, and Kerala, paying above fair-trade prices for shade-grown, organic beans. Each batch is roasted slowly in our vintage cast-iron drum roaster, letting natural fruit and chocolate nuances blossom.
              </p>
              <p>
                Whether you come to finish your novel, meet an old friend, or simply close your eyes with a warm mug, you are always at home here.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-cafe-cream-200 flex items-center justify-between">
              <div>
                <p className="font-serif text-base font-bold text-cafe-forest">Sarah & Julian Vance</p>
                <p className="text-xs text-cafe-roast/70">Co-Founders & Head Roasters</p>
              </div>
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-6 py-2.5 rounded-full bg-cafe-forest hover:bg-cafe-forest-light text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
