import React, { useState } from 'react';
import { Sparkles, QrCode, Smartphone, Zap, Gift, Clock, Check } from 'lucide-react';

export default function MobileAppSection() {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <section id="app" className="py-20 sm:py-28 bg-cafe-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Phone Mockup matching Reference Image */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative max-w-sm sm:max-w-md w-full">
              
              {/* Organic warm glow behind the phone */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cafe-caramel/20 to-amber-200/40 rounded-full blur-3xl transform scale-90 pointer-events-none" />

              {/* Phone Mockup Frame */}
              <div className="relative mx-auto rounded-[3rem] p-3 bg-gradient-to-b from-[#2A231F] via-[#1E1916] to-[#120F0D] shadow-2xl border-4 border-[#3D332D]">
                
                {/* Screen content */}
                <div className="rounded-[2.5rem] overflow-hidden bg-cafe-cream-50 relative">
                  <img
                    src="./images/app-mockup.jpg"
                    alt="Beanora Mobile App Ordering UI"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating App Badge */}
                  <div className="absolute top-6 left-6 right-6 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-md flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cafe-caramel text-white flex items-center justify-center text-xs font-bold">
                      ★ 4.9
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cafe-forest">Beanora Rewards App</p>
                      <p className="text-[10px] text-cafe-roast/70">Over 50,000+ Coffee Lovers</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Content matching Reference Image */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cafe-cream-200 text-cafe-mocha text-[11px] uppercase tracking-[0.25em] font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cafe-caramel" />
              ON THE GO
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cafe-forest tracking-tight leading-[1.12] mb-5">
              Order Your Favorite Coffee <br />
              <span className="italic text-cafe-caramel underline-accent">_Anytime_</span>
            </h2>

            <p className="text-cafe-roast/90 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
              Beanora was born from a simple idea — that great coffee can make everyday moments feel special. We're here to bring you the finest beans, crafted with care, in a space that feels like home.
            </p>

            {/* 3 App Benefits */}
            <div className="space-y-4 mb-8 w-full max-w-md">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-cafe-cream-200 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-cafe-forest text-white flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-cafe-caramel" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cafe-forest">Skip the Line & Order Ahead</h4>
                  <p className="text-[11px] text-cafe-roast/75">Your cup is ready and steaming the second you walk through the door.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-cafe-cream-200 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-cafe-forest text-white flex items-center justify-center shrink-0">
                  <Gift className="w-4 h-4 text-cafe-caramel" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cafe-forest">Earn Bean Loyalty Stars</h4>
                  <p className="text-[11px] text-cafe-roast/75">Collect 1 star for every $1 spent. Redeem for artisan pastries and free roasts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-cafe-cream-200 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-cafe-forest text-white flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-cafe-caramel" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cafe-forest">Custom Roast Profiles</h4>
                  <p className="text-[11px] text-cafe-roast/75">Save your milk choice, sweetness temperature, and grind preferences.</p>
                </div>
              </div>
            </div>

            {/* Download Buttons matching Reference Image */}
            <div className="flex flex-wrap items-center gap-4">
              {/* App Store Button */}
              <button
                onClick={() => setShowQrModal(true)}
                className="px-6 py-3 rounded-2xl bg-[#121212] hover:bg-black text-white flex items-center gap-3 shadow-md hover:scale-[1.02] transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 0.6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.68-1.26z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-wider text-stone-400 leading-tight">Download on the</p>
                  <p className="text-xs font-bold leading-tight">App Store</p>
                </div>
              </button>

              {/* Google Play Button */}
              <button
                onClick={() => setShowQrModal(true)}
                className="px-6 py-3 rounded-2xl bg-[#121212] hover:bg-black text-white flex items-center gap-3 shadow-md hover:scale-[1.02] transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.378-.344-.61-.837-.61-1.39V3.204c0-.553.232-1.046.61-1.39zm11.306 11.31l2.42 2.42-12.062 6.94 9.642-9.36zm2.42-2.42l-2.42 2.42-9.642-9.36 12.062 6.94zm1.488 1.488l2.977-1.713a1.444 1.444 0 0 0 0-2.496l-2.977-1.713-1.86 1.961 1.86 1.961z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-wider text-stone-400 leading-tight">Get it on</p>
                  <p className="text-xs font-bold leading-tight">Google Play</p>
                </div>
              </button>

              {/* QR Code Quick trigger */}
              <button
                onClick={() => setShowQrModal(true)}
                className="p-3 rounded-2xl border border-cafe-cream-300 hover:border-cafe-caramel bg-white text-cafe-forest flex items-center gap-2 text-xs font-semibold"
                title="Scan QR Code"
              >
                <QrCode className="w-5 h-5 text-cafe-caramel" />
                <span className="hidden sm:inline">Instant QR</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-cafe-cream-50 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl border border-cafe-cream-300 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-cafe-cream-300 text-cafe-roast hover:bg-cafe-cream-200 flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>

            <div className="w-12 h-12 rounded-full bg-cafe-forest text-white flex items-center justify-center mx-auto mb-3">
              <QrCode className="w-6 h-6 text-cafe-caramel" />
            </div>

            <h3 className="font-serif text-xl font-bold text-cafe-forest mb-1">
              Scan to Download
            </h3>
            <p className="text-xs text-cafe-roast/80 mb-5">
              Point your phone camera to download Beanora on iOS & Android.
            </p>

            <div className="w-48 h-48 mx-auto bg-white p-4 rounded-2xl shadow-inner border border-cafe-cream-200 flex items-center justify-center mb-4">
              <div className="relative w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-cafe-caramel/40 rounded-xl bg-cafe-cream-50/50">
                <QrCode className="w-24 h-24 text-cafe-forest" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-cafe-mocha mt-1">BEANORA APP</span>
              </div>
            </div>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-full bg-cafe-forest text-white text-xs font-semibold uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
