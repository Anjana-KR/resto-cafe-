import React, { useState } from 'react';
import { Coffee, MapPin, Clock, Phone, Mail, ArrowRight, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#12261A] text-emerald-100/90 pt-20 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-emerald-900/60">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-cafe-forest-light flex items-center justify-center text-white shadow-md">
                <Coffee className="w-5 h-5 text-cafe-caramel" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Beanora
              </span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              A haven for mindful coffee rituals, artisanal drum roasts, and quiet morning moments. Every bean ethically sourced, every cup handcrafted.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#instagram" aria-label="Instagram" className="w-8 h-8 rounded-full bg-emerald-900/60 hover:bg-cafe-caramel text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#facebook" aria-label="Facebook" className="w-8 h-8 rounded-full bg-emerald-900/60 hover:bg-cafe-caramel text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="#twitter" aria-label="X / Twitter" className="w-8 h-8 rounded-full bg-emerald-900/60 hover:bg-cafe-caramel text-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Hours Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-white font-serif text-base font-bold">
              <Clock className="w-4 h-4 text-cafe-caramel" />
              <span>Cozy Cafe Hours</span>
            </div>
            <ul className="text-xs space-y-2 text-emerald-200/80">
              <li className="flex justify-between py-1 border-b border-emerald-900/40">
                <span>Monday – Friday:</span>
                <span className="font-semibold text-white">7:00 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-emerald-900/40">
                <span>Saturday:</span>
                <span className="font-semibold text-white">8:00 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-emerald-900/40">
                <span>Sunday:</span>
                <span className="font-semibold text-white">8:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Location Col */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-serif text-base font-bold">
              <MapPin className="w-4 h-4 text-cafe-caramel" />
              <span>Visit Our Nook</span>
            </div>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              422 Timberland Way<br />
              Artisanal Roasting Quarter<br />
              Portland, OR 97201
            </p>
            <div className="text-xs text-emerald-200/80 pt-1 space-y-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-cafe-caramel" /> (555) 234-BEANS
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-cafe-caramel" /> hello@beanoracafe.com
              </p>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white">
              The Daily Brew Letter
            </h4>
            <p className="text-xs text-emerald-200/80">
              Receive secret seasonal single-origin roasts, coffee brewing tips, and 15% off your first bean bag.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full bg-emerald-900/50 border border-emerald-800 text-xs text-white placeholder-emerald-400/50 focus:outline-none focus:border-cafe-caramel"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3.5 rounded-full bg-cafe-caramel hover:bg-cafe-caramel-hover text-white text-xs font-semibold flex items-center justify-center"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-300 font-semibold animate-in fade-in">
                  Welcome to the Beanora family! ☕
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/60 gap-4">
          <p>© {new Date().getFullYear()} Beanora Cafe & Roastery. Crafted with love, beans & steam.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#sustainability" className="hover:text-white transition-colors">Sustainability Pledge</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
