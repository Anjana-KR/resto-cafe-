import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Volume2, VolumeX, Menu, X, Calendar } from 'lucide-react';
import { toggleCafeAmbiance, isAmbiancePlaying } from '../utils/audio';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const active = toggleCafeAmbiance();
    setSoundActive(active);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-cafe-cream-50/90 backdrop-blur-md py-3 shadow-cozy border-b border-cafe-cream-200' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-cafe-forest flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 text-cafe-caramel" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-cafe-forest group-hover:text-cafe-caramel transition-colors">
                Beanora
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-cafe-mocha font-semibold -mt-1">
                Artisanal Cafe
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#hero-story" 
              className="text-sm font-medium text-cafe-roast hover:text-cafe-caramel transition-colors"
            >
              Story & Craft
            </a>
            <a 
              href="#drinks" 
              className="text-sm font-medium text-cafe-roast hover:text-cafe-caramel transition-colors"
            >
              Signature Drinks
            </a>
            <a 
              href="#lifestyle" 
              className="text-sm font-medium text-cafe-roast hover:text-cafe-caramel transition-colors"
            >
              Our Philosophy
            </a>
            <a 
              href="#app" 
              className="text-sm font-medium text-cafe-roast hover:text-cafe-caramel transition-colors"
            >
              Mobile App
            </a>
            <a 
              href="#reserve" 
              className="text-sm font-medium text-cafe-roast hover:text-cafe-caramel transition-colors"
            >
              Book a Spot
            </a>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-3">
            {/* Ambient Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundActive ? "Mute Cozy Cafe Ambiance" : "Play Cozy Cafe Ambiance"}
              className={`p-2.5 rounded-full border transition-all flex items-center justify-center ${
                soundActive 
                  ? 'bg-cafe-caramel text-white border-cafe-caramel shadow-caramel-glow animate-pulse' 
                  : 'bg-white/80 text-cafe-roast border-cafe-cream-200 hover:border-cafe-caramel'
              }`}
            >
              {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-white/80 border border-cafe-cream-200 hover:border-cafe-caramel text-cafe-forest transition-all"
              aria-label="View Order Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cafe-caramel text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Table Button */}
            <a
              href="#reserve"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cafe-forest hover:bg-cafe-forest-light text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-forest-glow transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-cafe-caramel" />
              <span>Book Table</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-cafe-forest hover:bg-cafe-cream-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden flex justify-end">
          <div className="w-4/5 max-w-sm bg-cafe-cream-50 h-full p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-cafe-cream-200 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-cafe-forest flex items-center justify-center text-white">
                    <Coffee className="w-4 h-4 text-cafe-caramel" />
                  </div>
                  <span className="font-serif text-xl font-bold text-cafe-forest">Beanora</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-cafe-roast hover:bg-cafe-cream-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-base font-medium text-cafe-forest">
                <a 
                  href="#hero-story" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-cafe-caramel border-b border-cafe-cream-100"
                >
                  Story & Craft
                </a>
                <a 
                  href="#drinks" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-cafe-caramel border-b border-cafe-cream-100"
                >
                  Signature Drinks
                </a>
                <a 
                  href="#lifestyle" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-cafe-caramel border-b border-cafe-cream-100"
                >
                  Our Philosophy
                </a>
                <a 
                  href="#app" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-cafe-caramel border-b border-cafe-cream-100"
                >
                  Mobile App
                </a>
                <a 
                  href="#reserve" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-cafe-caramel border-b border-cafe-cream-100"
                >
                  Book a Spot
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-cafe-cream-200">
              <a
                href="#reserve"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-cafe-forest text-white font-semibold text-center block shadow-md hover:bg-cafe-forest-light"
              >
                Reserve Your Cozy Spot
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
