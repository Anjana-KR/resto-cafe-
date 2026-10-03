import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroScroll from './components/HeroScroll';
import SignatureDrinks from './components/SignatureDrinks';
import LifestyleBanner from './components/LifestyleBanner';
import MobileAppSection from './components/MobileAppSection';
import ReservationAndVideo from './components/ReservationAndVideo';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (drink) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === drink.id);
      if (existing) {
        return prev.map(item => 
          item.id === drink.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...drink, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-cafe-cream-50 text-cafe-espresso flex flex-col font-sans selection:bg-cafe-caramel selection:text-white">
      {/* Navigation */}
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Hero Section with Video Frame Scrub Animation */}
      <main className="flex-1">
        <HeroScroll />
        
        {/* Popular Choices: Signature Drinks */}
        <SignatureDrinks 
          onAddToCart={handleAddToCart} 
        />

        {/* Our Story & Lifestyle Banner */}
        <LifestyleBanner />

        {/* On The Go: Mobile Ordering App */}
        <MobileAppSection />

        {/* Reserve a Table & Espresso Video Spotlight */}
        <ReservationAndVideo />

        {/* Customer Community Reviews */}
        <ReviewsSection />
      </main>

      {/* Cafe Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
