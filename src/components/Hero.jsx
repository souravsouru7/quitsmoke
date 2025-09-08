import React, { useEffect, useState } from 'react';
import QuitSmokeForm from './QuitSmokeForm';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <section
        className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-[#2f6b3c]/20 via-white to-[#4a1f7a]/40 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } transition-all duration-500 pt-20 md:pt-0`}
      >
        {/* Top-left prominent logo */}
        <div className="absolute left-4 top-4 z-20 md:left-8 md:top-6">
          <img
            src="/logo.png"
            alt="Quit Easy logo"
            className="h-16 w-auto sm:h-24 md:h-36 lg:h-40 drop-shadow"
            loading="eager"
            decoding="async"
          />
        </div>
        {/* Gradient glow + grid background */}
        <div className="pointer-events-none absolute inset-0">
          {/* soft radial glows */}
          <div className="absolute left-[-10%] top-[-10%] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-[#4a1f7a]/30 via-[#2f6b3c]/20 to-transparent blur-[80px]" />
          <div className="absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#2f6b3c]/25 via-[#4a1f7a]/15 to-transparent blur-[90px]" />

          {/* subtle grid */}
          <svg className="absolute inset-0 -z-10 opacity-[0.12]" aria-hidden="true">
            <defs>
              <pattern id="qs-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0V32" fill="none" stroke="currentColor" className="text-[#4a1f7a]" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#qs-grid)" />
          </svg>

          {/* floating orbs */}
          <div className="absolute -left-10 top-16 h-24 w-24 motion-safe:animate-[float_8s_ease-in-out_infinite] rounded-full bg-[#2f6b3c]/15 blur-xl" />
          <div className="absolute right-10 top-24 h-28 w-28 motion-safe:animate-[float_10s_ease-in-out_infinite] rounded-full bg-[#4a1f7a]/20 blur-xl" />
        </div>

        {/* Main container */}
        <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl grid-cols-1 gap-8 px-5 py-14 sm:gap-10 md:grid-cols-2 md:gap-16 md:px-10">
          {/* Left: content */}
          <div className="flex flex-col justify-center">
            {/* Header */}
            <div className="flex flex-col">
              <h1 className="mb-4 font-['Space_Grotesk'] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Your Journey to a
                <span className="bg-gradient-to-r from-[#2f6b3c] via-[#3d4b8b] to-[#4a1f7a] bg-clip-text text-transparent"> Smoke-Free Life</span>
              </h1>
              <p className="mb-10 max-w-xl font-['Space_Grotesk'] text-base leading-7 text-slate-600 sm:text-lg md:text-xl">
                Join thousands who have successfully quit smoking with our evidence-based approach.
                Start your transformation today and reclaim your health.
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:shadow-md">
                <div className="text-2xl">🫁</div>
                <div>
                  <h3 className="font-semibold text-slate-800">Better Breathing</h3>
                  <p className="text-sm text-slate-600">Improve lung function in just 2 weeks</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:shadow-md">
                <div className="text-2xl">💰</div>
                <div>
                  <h3 className="font-semibold text-slate-800">Save Money</h3>
                  <p className="text-sm text-slate-600">Keep thousands in your pocket yearly</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:shadow-md">
                <div className="text-2xl">❤️</div>
                <div>
                  <h3 className="font-semibold text-slate-800">Healthier Heart</h3>
                  <p className="text-sm text-slate-600">Reduce heart disease risk significantly</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => setShowForm(true)}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4a1f7a] via-[#3d4b8b] to-[#2f6b3c] px-7 py-3 font-['Space_Grotesk'] text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#4a1f7a]/30 sm:w-auto"
              >
                <span>Start Your Journey</span>
                <svg
                  className="transition-transform group-hover:translate-x-1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="#how-it-works"
                className="relative inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-white/80 px-6 py-3 font-['Space_Grotesk'] text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:text-[#4a1f7a] backdrop-blur w-full sm:w-auto"
              >
                <span>Learn How It Works</span>
                <span className="text-lg">ℹ️</span>
              </a>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative flex min-h-[300px] items-center justify-center">
            <img
              src="/human-lungs-with-face-expression.png"
              alt="Healthy lungs with positive expression"
              className="mx-auto max-w-[320px] select-none sm:max-w-[420px] md:max-w-[560px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center">
          <div className="mx-auto h-10 w-0.5 overflow-hidden rounded bg-slate-300/40 sm:h-14">
            <div className="h-5 w-full motion-safe:animate-[scroll_2s_ease-in-out_infinite] bg-gradient-to-b from-[#4a1f7a] to-[#2f6b3c] sm:h-7" />
          </div>
          <span className="mt-2 block text-[11px] font-semibold tracking-wider text-slate-500 sm:text-xs">
            Discover Our Method
          </span>
        </div>
      </section>

      {/* Quit Smoking Form */}
      <QuitSmokeForm isOpen={showForm} onClose={handleCloseForm} />
    </>
  );
};

export default Hero;
