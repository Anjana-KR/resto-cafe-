import React, { useState } from 'react';
import { Sparkles, Star, Plus, Check, Coffee, Heart, ArrowRight } from 'lucide-react';
import { SIGNATURE_DRINKS } from '../data/coffeeData';

export default function SignatureDrinks({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedItem, setAddedItem] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);

  const categories = [
    { id: 'all', label: 'All Drinks' },
    { id: 'espresso', label: 'Espresso & Lattes' },
    { id: 'coldbrew', label: 'Cold Brews' },
  ];

  const filteredDrinks = activeCategory === 'all' 
    ? SIGNATURE_DRINKS 
    : SIGNATURE_DRINKS.filter(d => d.category === activeCategory);

  const handleQuickAdd = (drink, e) => {
    e.stopPropagation();
    onAddToCart({
      ...drink,
      size: 'Regular (12oz)',
      milk: 'Oat Milk',
      sweetness: 'Normal'
    });
    setAddedItem(drink.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section id="drinks" className="py-24 sm:py-32 bg-cafe-cream-100 relative">
      {/* Decorative subtle coffee bean shapes in background */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-cafe-caramel/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cafe-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header matching reference image */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cafe-cream-200 text-cafe-mocha text-[11px] uppercase tracking-[0.25em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cafe-caramel" />
            POPULAR CHOICES
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cafe-forest tracking-tight">
            <span className="underline-accent">_Our Signature Drinks_</span>
          </h2>
          
          <p className="text-cafe-roast/80 text-sm sm:text-base mt-4 font-normal">
            Handcrafted with single-origin beans, velvety textured milk, and house-made artisan syrups.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cafe-forest text-white shadow-md'
                    : 'bg-white text-cafe-forest hover:bg-cafe-cream-200 border border-cafe-cream-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Main Signature Cards Matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {filteredDrinks.slice(0, 3).map((drink) => (
            <div
              key={drink.id}
              onClick={() => setSelectedDrink(drink)}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-cafe-cream-200 shadow-cozy hover:shadow-cozy-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Area with organic circular warm backdrop matching reference */}
                <div className="relative w-full aspect-square rounded-2xl bg-[#EBE5DA] overflow-hidden flex items-center justify-center p-4 mb-6 group-hover:bg-[#E4DDD1] transition-colors">
                  
                  {/* Organic circular badge outline behind the cup */}
                  <div className="absolute inset-4 rounded-full border border-cafe-caramel/25 scale-95 group-hover:scale-100 transition-transform duration-500" />
                  
                  {/* Drink Image */}
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Rating Tag */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-cafe-forest flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{drink.rating}</span>
                  </div>

                  {/* Temperature Pill */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-cafe-forest/90 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                    {drink.temperature}
                  </div>
                </div>

                {/* Title & Description matching reference */}
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-bold text-cafe-forest group-hover:text-cafe-caramel transition-colors">
                    {drink.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-cafe-roast/80 mt-2 line-clamp-2">
                    {drink.tagline}
                  </p>
                </div>
              </div>

              {/* Price & Order Now Button matching reference image */}
              <div className="mt-8 text-center flex flex-col items-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-cafe-forest tracking-tight mb-4">
                  ${drink.price.toFixed(2)}
                </span>

                <button
                  onClick={(e) => handleQuickAdd(drink, e)}
                  className={`w-full py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 ${
                    addedItem === drink.id
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-cafe-forest hover:bg-cafe-forest-light text-white shadow-sm hover:shadow-forest-glow hover:scale-[1.02]'
                  }`}
                >
                  {addedItem === drink.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to Order!</span>
                    </>
                  ) : (
                    <>
                      <span>Order Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Extended Menu Grid if more items */}
        {filteredDrinks.length > 3 && (
          <div className="mt-12 pt-12 border-t border-cafe-cream-200">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-cafe-forest text-center mb-8">
              More Artisanal Blends
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrinks.slice(3).map(drink => (
                <div 
                  key={drink.id}
                  onClick={() => setSelectedDrink(drink)}
                  className="bg-white/80 rounded-2xl p-5 border border-cafe-cream-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4 cursor-pointer hover:border-cafe-caramel/40"
                >
                  <img 
                    src={drink.image} 
                    alt={drink.name} 
                    className="w-20 h-20 rounded-xl object-cover" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-lg font-bold text-cafe-forest truncate">{drink.name}</h4>
                    <p className="text-xs text-cafe-roast/70 line-clamp-1 mt-0.5">{drink.tagline}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-serif text-base font-bold text-cafe-forest">${drink.price.toFixed(2)}</span>
                      <button
                        onClick={(e) => handleQuickAdd(drink, e)}
                        className="p-1.5 rounded-full bg-cafe-forest hover:bg-cafe-forest-light text-white"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Drink Details Modal */}
      {selectedDrink && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-cafe-cream-50 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-cafe-cream-300 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedDrink(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-cafe-cream-300 text-cafe-roast hover:bg-cafe-cream-200 flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
              <img
                src={selectedDrink.image}
                alt={selectedDrink.name}
                className="w-36 h-36 rounded-2xl object-cover shadow-md border-2 border-white"
              />
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-cafe-caramel">
                  Artisan Recipe
                </span>
                <h3 className="font-serif text-2xl font-bold text-cafe-forest mt-1">
                  {selectedDrink.name}
                </h3>
                <p className="text-xs text-cafe-roast/80 mt-1 font-medium">
                  {selectedDrink.tagline}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="font-serif text-2xl font-bold text-cafe-forest">
                    ${selectedDrink.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-cafe-roast/60 bg-cafe-cream-200 px-2 py-0.5 rounded-full">
                    {selectedDrink.calories}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cafe-roast leading-relaxed mb-6 bg-white/70 p-4 rounded-xl border border-cafe-cream-200">
              {selectedDrink.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-cafe-forest mb-2">
                Tasting Notes
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedDrink.flavorNotes.map((note, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white border border-cafe-caramel/30 text-cafe-caramel text-xs font-semibold">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={(e) => {
                handleQuickAdd(selectedDrink, e);
                setSelectedDrink(null);
              }}
              className="w-full py-3.5 rounded-full bg-cafe-forest hover:bg-cafe-forest-light text-white font-semibold text-xs uppercase tracking-[0.15em] shadow-md hover:shadow-forest-glow transition-all"
            >
              Add to Cafe Order — ${selectedDrink.price.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
