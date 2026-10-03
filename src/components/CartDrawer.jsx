import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Coffee, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    const num = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(num);
    setOrderComplete(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#C87A3E', '#1B3624', '#F59E0B']
    });

    setTimeout(() => {
      onClearCart();
    }, 100);
  };

  const handleCloseAndReset = () => {
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in">
      <div className="w-full max-w-md bg-cafe-cream-50 h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-cafe-cream-300 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-cafe-cream-300">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cafe-forest flex items-center justify-center text-white">
                <Coffee className="w-4 h-4 text-cafe-caramel" />
              </div>
              <h3 className="font-serif text-xl font-bold text-cafe-forest">
                Your Cafe Order
              </h3>
            </div>
            <button
              onClick={handleCloseAndReset}
              className="p-1.5 rounded-full hover:bg-cafe-cream-200 text-cafe-roast transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          {orderComplete ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-cafe-caramel">
                Order Received
              </span>
              <h4 className="font-serif text-2xl font-bold text-cafe-forest mt-1 mb-2">
                Brewing Right Now!
              </h4>
              <p className="text-xs text-cafe-roast/80 mb-6">
                Your order <strong>{orderNumber}</strong> has been transmitted directly to our barista bar. It will be piping hot in ~10 minutes.
              </p>
              <button
                onClick={handleCloseAndReset}
                className="w-full py-3 rounded-full bg-cafe-forest hover:bg-cafe-forest-light text-white text-xs font-semibold uppercase tracking-wider shadow-md"
              >
                Back to Cafe
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-cafe-cream-200 flex items-center justify-center text-cafe-mocha/60 mb-4">
                <Coffee className="w-8 h-8" />
              </div>
              <p className="font-serif text-lg font-bold text-cafe-forest">
                Your Tray is Empty
              </p>
              <p className="text-xs text-cafe-roast/70 max-w-xs mt-1">
                Explore our signature Caramel Latte, Cappuccino, or Cold Brew to get started.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-cafe-cream-200 max-h-[50vh] overflow-y-auto pr-2 mt-4">
              {cartItems.map((item) => (
                <div key={item.id} className="py-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover border border-cafe-cream-300"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm font-bold text-cafe-forest truncate">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-cafe-roast/70">
                      {item.milk || 'Oat Milk'} • {item.size || '12oz'}
                    </p>
                    <p className="font-serif text-xs font-bold text-cafe-forest mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-cafe-cream-300">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="text-cafe-roast hover:text-cafe-caramel"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-cafe-forest px-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="text-cafe-roast hover:text-cafe-caramel"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Delete Item */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-stone-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Subtotal & Checkout */}
        {!orderComplete && cartItems.length > 0 && (
          <div className="pt-6 border-t border-cafe-cream-300">
            <div className="space-y-1.5 text-xs text-cafe-roast mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-serif font-bold text-cafe-forest pt-2 border-t border-cafe-cream-200">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-4 rounded-full bg-cafe-forest hover:bg-cafe-forest-light text-white font-semibold text-xs uppercase tracking-[0.15em] shadow-md hover:shadow-forest-glow flex items-center justify-center gap-2 transition-all"
            >
              <span>Place Cafe Order (${total.toFixed(2)})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <p className="text-[10px] text-center text-cafe-roast/60 mt-2">
              Ready for pickup in ~8-12 mins at 422 Timberland Way Bar.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
