import React, { useState, useRef } from 'react';
import { Phone, Calendar, Clock, Users, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2, Coffee } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReservationAndVideo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    guests: '2 Guests',
    tableType: 'Window Nook',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservationConfirmed, setReservationConfirmed] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showFullVideoModal, setShowFullVideoModal] = useState(false);

  const videoRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const confCode = 'BNR-' + Math.floor(1000 + Math.random() * 9000);
      setReservationConfirmed({
        code: confCode,
        ...formData
      });

      // Confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#C87A3E', '#FAF7F2', '#22C55E', '#F59E0B']
      });
    }, 900);
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsVideoMuted(videoRef.current.muted);
  };

  return (
    <section id="reserve" className="relative bg-[#1B3624] text-white pt-24 pb-28 overflow-hidden">
      
      {/* Organic Wavy Top Divider SVG matching reference design */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none -translate-y-[99%]">
        <svg 
          className="relative block w-full h-16 sm:h-24 text-[#1B3624]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,90 350,-40 500,60 C650,150 900,10 1200,80 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Decorative ambient subtle background glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cafe-caramel/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Reservation Form matching Reference Image */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-[10px] uppercase tracking-[0.25em] font-bold mb-4 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-cafe-caramel" />
              RESERVE A TABLE
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
              Book Your Cozy Spot
            </h2>

            {/* Subtitle */}
            <p className="text-emerald-100/80 text-sm sm:text-base font-light mb-6">
              Good food, great coffee, and even better company.
            </p>

            {/* Contact Us Pill Button matching reference */}
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cafe-caramel hover:bg-cafe-caramel-hover text-white text-xs font-semibold uppercase tracking-wider shadow-caramel-glow hover:scale-[1.02] transition-all mb-8"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact Us: (555) 234-BEANS</span>
            </a>

            {/* Form Container */}
            <form onSubmit={handleFormSubmit} className="w-full space-y-4">
              
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-full bg-[#13281A] border border-emerald-900/80 text-white placeholder-emerald-300/40 text-sm focus:outline-none focus:border-cafe-caramel transition-colors"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-full bg-[#13281A] border border-emerald-900/80 text-white placeholder-emerald-300/40 text-sm focus:outline-none focus:border-cafe-caramel transition-colors"
                />
              </div>

              {/* Date & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 rounded-full bg-[#13281A] border border-emerald-900/80 text-white text-sm focus:outline-none focus:border-cafe-caramel transition-colors"
                  />
                </div>

                <div>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 rounded-full bg-[#13281A] border border-emerald-900/80 text-white text-sm focus:outline-none focus:border-cafe-caramel transition-colors"
                  >
                    <option value="1 Guest">1 Guest (Solo Reading)</option>
                    <option value="2 Guests">2 Guests (Cozy Table)</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5+ Guests">5+ Guests (Large Gathering)</option>
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <select
                  name="tableType"
                  value={formData.tableType}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-full bg-[#13281A] border border-emerald-900/80 text-white text-sm focus:outline-none focus:border-cafe-caramel transition-colors"
                >
                  <option value="Window Nook">Window Sun Nook</option>
                  <option value="Fireplace Lounge">Cozy Fireplace Lounge</option>
                  <option value="Garden Patio">Outdoor Sunlit Patio</option>
                  <option value="Library Corner">Quiet Study & Books Corner</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Special requests or dietary notes (optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-2xl bg-[#13281A] border border-emerald-900/80 text-white placeholder-emerald-300/40 text-sm focus:outline-none focus:border-cafe-caramel transition-colors resize-none"
                />
              </div>

              {/* Submit Button matching reference orange color */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#D48D55] hover:bg-[#C87A3E] text-white font-semibold text-sm uppercase tracking-[0.15em] shadow-lg hover:shadow-caramel-glow transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                ) : (
                  <span>Send Reservation Request</span>
                )}
              </button>

            </form>

          </div>

          {/* Right Column: Video Showcase Frame matching Reference Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Outer Glowing Border Frame matching reference */}
              <div className="relative rounded-3xl overflow-hidden bg-black/60 border-2 border-amber-500/40 shadow-2xl p-2 group">
                
                {/* Video Container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-900 flex items-center justify-center">
                  
                  {/* Video Element */}
                  <video
                    ref={videoRef}
                    src="/coffee-hero.mp4"
                    poster="/images/brew-guide-video.jpg"
                    loop
                    muted={isVideoMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Video Header Bar Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-white font-medium border border-white/10">
                      <Coffee className="w-3 h-3 text-cafe-caramel" />
                      <span className="truncate max-w-[220px]">Coffee Maker Making Coffee | Full HD</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-red-600/90 text-white text-[9px] font-bold uppercase tracking-wider">
                      HD
                    </span>
                  </div>

                  {/* Big Play Overlay (when paused) */}
                  {!isVideoPlaying && (
                    <button
                      onClick={toggleVideoPlay}
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/35 hover:bg-black/20 transition-all group-hover:scale-105"
                      title="Play Video"
                    >
                      <div className="w-16 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-current ml-0.5" />
                      </div>
                    </button>
                  )}

                  {/* Bottom Controls Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={toggleVideoPlay}
                        className="text-white hover:text-cafe-caramel"
                      >
                        {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>
                      <button 
                        onClick={toggleVideoMute}
                        className="text-white hover:text-cafe-caramel"
                      >
                        {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <span className="text-[10px] font-mono text-stone-300">
                        0:15 Artisanal Brew
                      </span>
                    </div>

                    <button
                      onClick={() => setShowFullVideoModal(true)}
                      className="text-white hover:text-cafe-caramel p-1"
                      title="Watch Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Caption underneath video */}
                <div className="p-3 text-center">
                  <p className="text-xs font-serif text-amber-200/90">
                    "From fresh grounds to golden crema — experience the craft behind every pour."
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Reservation Confirmation Modal */}
      {reservationConfirmed && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-cafe-cream-50 text-cafe-forest rounded-3xl max-w-md w-full p-8 shadow-2xl border border-cafe-cream-300 relative text-center animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-[10px] uppercase font-bold tracking-widest text-cafe-caramel">
              Reservation Confirmed
            </span>

            <h3 className="font-serif text-2xl font-bold text-cafe-forest mt-1 mb-2">
              See You Soon, {reservationConfirmed.name}!
            </h3>

            <p className="text-xs text-cafe-roast/80 mb-6">
              We've reserved your cozy spot at Beanora. A confirmation note has been sent to <strong>{reservationConfirmed.email}</strong>.
            </p>

            <div className="bg-white rounded-2xl p-4 border border-cafe-cream-300 text-left space-y-2 mb-6">
              <div className="flex justify-between text-xs">
                <span className="text-cafe-roast/70">Booking Code:</span>
                <span className="font-mono font-bold text-cafe-forest">{reservationConfirmed.code}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-cafe-roast/70">Date & Party:</span>
                <span className="font-semibold text-cafe-forest">{reservationConfirmed.date || 'Today'} • {reservationConfirmed.guests}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-cafe-roast/70">Table Preference:</span>
                <span className="font-semibold text-cafe-caramel">{reservationConfirmed.tableType}</span>
              </div>
            </div>

            <button
              onClick={() => setReservationConfirmed(null)}
              className="w-full py-3 rounded-full bg-cafe-forest hover:bg-cafe-forest-light text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Wonderful, Thanks!
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Video Modal */}
      {showFullVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setShowFullVideoModal(false)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center font-bold hover:bg-black"
            >
              ✕
            </button>
            <video
              src="/coffee-hero.mp4"
              controls
              autoPlay
              className="w-full aspect-video object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}
