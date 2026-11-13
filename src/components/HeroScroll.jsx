import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronDown, ArrowRight, Sparkles, Coffee, Heart, Leaf, Sprout } from 'lucide-react';

const TOTAL_FRAMES = 152;

export default function HeroScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const heroTextRef = useRef(null);
  const vignetteRef = useRef(null);
  const progressBarRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const [isPreloading, setIsPreloading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  const imagesRef = useRef([]);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const currentFrameRef = useRef(-1);

  // 1. Preload 202 frames smoothly into memory
  useEffect(() => {
    let loadedCount = 0;
    const imgs = new Array(TOTAL_FRAMES);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const padIndex = String(i).padStart(3, '0');
      img.src = `${import.meta.env.BASE_URL}frames/frame_${padIndex}.jpg`;

      const onDone = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        setLoadPercentage(pct);

        // Show page as soon as initial frames are ready so user doesn't wait
        if (loadedCount >= 25) {
          setIsPreloading(false);
          if (canvasRef.current && currentFrameRef.current === -1) {
            drawFrame(0);
          }
        }
      };

      img.onload = onDone;
      img.onerror = onDone;
      imgs[i - 1] = img;
    }

    imagesRef.current = imgs;
  }, []);

  // 2. High-performance canvas drawing with cover aspect ratio
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!ctxRef.current) {
      ctxRef.current = canvas.getContext('2d', { alpha: false, desynchronized: true });
    }
    const ctx = ctxRef.current;
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    const scale = Math.max(width / imgW, height / imgH);
    const sw = imgW * scale;
    const sh = imgH * scale;
    const sx = (width - sw) / 2;
    const sy = (height - sh) / 2;

    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // 3. High-DPI canvas resizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      if (currentFrameRef.current >= 0) {
        drawFrame(currentFrameRef.current);
      } else {
        drawFrame(0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // 4. Scroll position tracking without React re-renders (zero frame drop)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const totalScrollable = containerHeight - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 5. 60fps lerp animation loop for silky smooth video motion & text transition
  useEffect(() => {
    let animId;

    const loop = () => {
      const target = targetProgressRef.current;
      // Smooth lerp factor (0.10 gives responsive yet buttery smooth fluid gliding)
      currentProgressRef.current += (target - currentProgressRef.current) * 0.10;
      const p = currentProgressRef.current;

      // Calculate target frame
      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(p * (TOTAL_FRAMES - 1)))
      );

      if (frameIdx !== currentFrameRef.current) {
        currentFrameRef.current = frameIdx;
        drawFrame(frameIdx);
      }

      // Keep hero heading fixed and fully visible throughout video scroll
      if (heroTextRef.current) {
        heroTextRef.current.style.opacity = '1';
        heroTextRef.current.style.transform = 'translate3d(0, 0, 0)';
        heroTextRef.current.style.pointerEvents = 'auto';
      }

      // Keep vignette stable for maximum text readability behind moving video
      if (vignetteRef.current) {
        vignetteRef.current.style.opacity = '1';
      }

      // Update right progress indicator line smoothly
      if (progressBarRef.current) {
        progressBarRef.current.style.height = `${(p * 100).toFixed(1)}%`;
      }

      // Hide bottom scroll indicator after scrolling started
      if (scrollIndicatorRef.current) {
        const indicatorOpacity = Math.max(0, 1 - (p / 0.10));
        scrollIndicatorRef.current.style.opacity = indicatorOpacity.toFixed(3);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [drawFrame]);

  return (
    <section 
      id="hero-story"
      ref={containerRef} 
      className="relative w-full bg-[#18110D]"
      style={{ height: '280vh' }}
    >
      {/* Sticky 100vh Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Canvas Background Screen */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            imageRendering: '-webkit-optimize-contrast',
            filter: 'contrast(1.04) saturate(1.06)',
            willChange: 'transform' 
          }}
        />

        {/* Subtle natural ambient gradient for seamless contrast without any box */}
        <div 
          ref={vignetteRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(245, 241, 234, 0.72) 0%, rgba(245, 241, 234, 0.35) 30%, transparent 60%)'
          }}
        />

        {/* Loading Overlay (dismisses as soon as initial frames are ready) */}
        {isPreloading && (
          <div className="absolute inset-0 bg-cafe-cream-50 z-50 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 rounded-full border-3 border-cafe-caramel border-t-transparent animate-spin mb-5" />
            <div className="flex items-center gap-2 mb-2">
              <Coffee className="w-6 h-6 text-cafe-caramel" />
              <h3 className="font-serif text-2xl font-bold tracking-tight text-cafe-forest">
                BEANORA
              </h3>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-cafe-mocha mb-4">
              Brewing Coffee Experience ({loadPercentage}%)
            </p>
            <div className="w-64 h-1.5 bg-cafe-cream-200 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-cafe-caramel to-cafe-forest transition-all duration-150"
                style={{ width: `${loadPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Sole Hero Text Section (From Reference Image - Clean, No Box) */}
        <div
          ref={heroTextRef}
          className="absolute left-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] flex flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-20 z-20 will-change-transform"
        >
          <div className="max-w-xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 border border-cafe-cream-300 text-cafe-forest text-[11px] uppercase tracking-[0.25em] font-semibold mb-6 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cafe-caramel" />
              PREMIUM COFFEE & MORE
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-cafe-forest tracking-tight leading-[1.08] mb-5">
              <span className="block">Good Coffee Brings</span>
              <span className="italic text-cafe-caramel underline-accent block">Better Days</span>
            </h1>

            {/* Subtext description */}
            <p className="text-cafe-roast/90 text-sm sm:text-base font-normal leading-relaxed max-w-md mb-8">
              At Beanora, we serve more than just coffee — we serve moments. Fresh brews, cozy vibes, and a place to be yourself.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#drinks"
                className="px-7 py-3.5 rounded-full bg-cafe-forest hover:bg-cafe-forest-light text-white font-semibold text-xs uppercase tracking-[0.15em] shadow-md hover:shadow-forest-glow hover:scale-[1.02] transition-all flex items-center gap-2 group"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#reserve"
                className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-cafe-forest border border-cafe-cream-300 font-semibold text-xs uppercase tracking-[0.15em] shadow-sm hover:scale-[1.02] transition-all"
              >
                Reserve Table
              </a>
            </div>

            {/* 4 Feature Badges (From Reference Image) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-cafe-cream-300/80">
              <div className="flex flex-col items-start gap-1.5 group">
                <div className="w-8 h-8 rounded-full bg-cafe-cream-200/80 flex items-center justify-center text-cafe-caramel group-hover:bg-cafe-caramel group-hover:text-white transition-all shadow-sm">
                  <Sprout className="w-4 h-4" />
                </div>
                <span className="text-[12px] font-semibold text-cafe-forest tracking-wide">
                  Fresh Beans
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5 group">
                <div className="w-8 h-8 rounded-full bg-cafe-cream-200/80 flex items-center justify-center text-cafe-caramel group-hover:bg-cafe-caramel group-hover:text-white transition-all shadow-sm">
                  <Coffee className="w-4 h-4" />
                </div>
                <span className="text-[12px] font-semibold text-cafe-forest tracking-wide">
                  Premium Taste
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5 group">
                <div className="w-8 h-8 rounded-full bg-cafe-cream-200/80 flex items-center justify-center text-cafe-caramel group-hover:bg-cafe-caramel group-hover:text-white transition-all shadow-sm">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-[12px] font-semibold text-cafe-forest tracking-wide">
                  Cozy Space
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5 group">
                <div className="w-8 h-8 rounded-full bg-cafe-cream-200/80 flex items-center justify-center text-cafe-caramel group-hover:bg-cafe-caramel group-hover:text-white transition-all shadow-sm">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-[12px] font-semibold text-cafe-forest tracking-wide">
                  Eco Friendly
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Scroll Hint at Bottom Center (Fades away once user scrolls) */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-3 pointer-events-none transition-opacity"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-stone-600 bg-white/60 px-3 py-1 rounded-full backdrop-blur-sm">
            Scroll to Watch Roast & Brew
          </span>
          <div className="w-8 h-8 rounded-full bg-white/70 border border-cafe-cream-300 backdrop-blur-sm flex items-center justify-center text-cafe-caramel animate-bounce shadow-sm">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Sleek Vertical Progress Rail on the Right */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 w-1 h-36 bg-black/20 backdrop-blur-sm rounded-full overflow-hidden hidden lg:block z-20 border border-white/20">
          <div 
            ref={progressBarRef}
            className="w-full bg-gradient-to-b from-cafe-caramel via-amber-400 to-emerald-400 rounded-full"
            style={{ height: '0%' }}
          />
        </div>

      </div>
    </section>
  );
}
