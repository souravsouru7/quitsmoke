import React, { useEffect, useState } from 'react';

const Hero = ({ onShowForm }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {/* Mobile-only redesigned hero */}
      <section
        className={`md:hidden relative min-h-screen overflow-hidden ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } transition-all duration-700 pb-14`}
        style={{
          backgroundImage: "url('/bk.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/75"></div>
        {/* Modern layered radial gradients */}
        <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-multiply bg-[radial-gradient(120%_80%_at_50%_0%,#f5d0fe_0%,transparent_60%),radial-gradient(120%_80%_at_50%_100%,#ddd6fe_0%,transparent_60%)]"></div>

        {/* Top bar */}
        <header className="relative z-20 flex items-center justify-start px-5 pt-0">
          <img src="/logo.png" alt="Quit Easy" className="h-32 w-auto drop-shadow-2xl" loading="eager" decoding="async" />
        </header>

        {/* Main section - modern split with glass grid and marquee */}
        <main className="relative z-10 px-5 mt-2">
          <div className="text-left">
            <h1 className="text-[34px] font-extrabold leading-[1.1]">
              <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">SMALL STEP</div>
              <div className="bg-gradient-to-br from-fuchsia-700 to-purple-800 bg-clip-text text-transparent">BIG CHANGE</div>
            </h1>
            <p className="mt-2 text-sm text-purple-900/90">
              Transform your life with our simple, supportive, and proven approach
            </p>
          </div>

          {/* Glass feature grid */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-purple-100 shadow p-3 text-center">
              <div className="text-xl">🧠</div>
              <p className="mt-1 text-[11px] font-semibold text-purple-900">Mindful</p>
            </div>
            <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-purple-100 shadow p-3 text-center">
              <div className="text-xl">⏱️</div>
              <p className="mt-1 text-[11px] font-semibold text-purple-900">2‑min</p>
            </div>
            <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-purple-100 shadow p-3 text-center">
              <div className="text-xl">💸</div>
              <p className="mt-1 text-[11px] font-semibold text-purple-900">Save</p>
            </div>
          </div>

          {/* Marquee benefits */}
          <div className="mt-3 overflow-hidden rounded-full ring-1 ring-purple-200 bg-white/70">
            <div className="marquee-track gap-6 py-2 will-change-transform">
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">Fast Results</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">Proven Method</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">24/7 Support</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">Smoke‑Free Plan</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">Stress Coaching</span>
              {/* duplicate set for seamless loop */}
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">Fast Results</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">Proven Method</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">24/7 Support</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">Smoke‑Free Plan</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">Stress Coaching</span>
            </div>
          </div>
        </main>

        {/* Floating pill CTA */}
        <div className="md:hidden fixed bottom-10 left-0 right-0 z-30 flex justify-center px-6">
          <button
            onClick={onShowForm}
            className="w-full max-w-sm px-6 py-4 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-extrabold shadow-2xl active:scale-[0.99]"
          >
            Start Your Journey
          </button>
        </div>

        {/* Bottom spacer for safe area */}
        <div className="h-2"></div>
      </section>

      {/* Desktop/tablet original hero preserved */}
      <section
        className={`hidden md:block relative min-h-screen overflow-hidden ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } transition-all duration-700`}
        style={{
          backgroundImage: "url('/bk.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80 md:bg-white/70 backdrop-blur-md"></div>
        {/* Simple geometric background patterns */}
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-40 right-32 w-24 h-24 bg-purple-200 rotate-12 rounded-full"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-50 -rotate-12 rounded-lg"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-300 rotate-45 rounded-full"></div>
          </div>
        </div>

        {/* Logo - no background, larger on mobile */}
        <div className="absolute left-4 top-4 sm:left-6 sm:top-6 md:left-8 md:top-8 z-30">
          <img
            src="/logo.png"
            alt="Quit Easy logo"
            className="h-24 w-auto sm:h-20 md:h-24 lg:h-28 xl:h-32 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Main content - classic mobile design */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-8 md:px-12">
          <div className="text-center max-w-6xl w-full">
            {/* Mobile-first content card */}
            <div className="mx-auto max-w-md md:max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-8 sm:px-10 sm:py-12 md:bg-transparent md:backdrop-blur-0 md:shadow-none md:px-0 md:py-0">
              {/* Main heading - mobile refined */}
              <div className="mb-8 sm:mb-10 md:mb-16">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6 md:mb-10">
                  <div className="typewriter-dynamic text-purple-900 mb-2 sm:mb-3">SMALL STEP</div>
                  <div className="typewriter-dynamic-delay text-purple-600">BIG CHANGE</div>
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-purple-700 font-light max-w-3xl mx-auto leading-relaxed typewriter-dynamic-slow">
                  Transform your life with our simple, supportive, and proven approach
                </p>
              </div>

              {/* CTA buttons */}
              <div className="mb-8 sm:mb-12 md:mb-16">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 justify-center items-stretch sm:items-center">
                  <button
                    onClick={onShowForm}
                    className="w-full sm:w-auto px-7 sm:px-12 md:px-14 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-lg sm:text-xl md:text-2xl rounded-2xl shadow-2xl hover:shadow-3xl active:scale-[0.98] sm:hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-300/60"
                  >
                    Start Your Journey
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('owner-profile');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="w-full sm:w-auto px-7 sm:px-12 md:px-14 py-4 sm:py-5 md:py-6 border-2 border-purple-600 text-purple-700 bg-white/60 font-bold text-lg sm:text-xl md:text-2xl rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300/60"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Benefit chips - compact grid on mobile */}
              <div className="mx-auto mt-2 max-w-xl sm:max-w-3xl">
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-purple-800 ring-1 ring-purple-200 backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:ring-purple-400 shadow-sm">
                    <span className="text-lg">🚀</span>
                    <span className="font-semibold text-sm sm:text-base">Fast Results</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-purple-800 ring-1 ring-purple-200 backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:ring-purple-400 shadow-sm">
                    <span className="text-lg">💪</span>
                    <span className="font-semibold text-sm sm:text-base">Proven Method</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-purple-800 ring-1 ring-purple-200 backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:ring-purple-400 shadow-sm">
                    <span className="text-lg">🤝</span>
                    <span className="font-semibold text-sm sm:text-base">24/7 Support</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-purple-800 ring-1 ring-purple-200 backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:ring-purple-400 shadow-sm">
                    <span className="text-lg">🛡️</span>
                    <span className="font-semibold text-sm sm:text-base">Smoke‑Free Plan</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-purple-800 ring-1 ring-purple-200 backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:ring-purple-400 shadow-sm col-span-2 sm:col-span-1 justify-center">
                    <span className="text-lg">🧘</span>
                    <span className="font-semibold text-sm sm:text-base">Stress Coaching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements - classic mobile design (smaller) */}
        <div className="hidden sm:block fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 z-40">
          <button className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-purple-700 transition-all duration-300 border-2 border-purple-400 hover:scale-110">
            <span className="text-2xl sm:text-3xl">💬</span>
          </button>
        </div>

        {/* Scroll indicator removed for cleaner UI */}

        {/* Decorative corner elements - mobile responsive (smaller) */}
        <div className="hidden sm:block absolute top-0 right-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-purple-100 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-20 sm:translate-x-20 md:-translate-y-24 md:translate-x-24"></div>
        <div className="hidden sm:block absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-200 rounded-full translate-y-12 -translate-x-12 sm:translate-y-20 sm:-translate-x-20 md:translate-y-28 md:-translate-x-28"></div>
      </section>
    </>
  );
};

export default Hero;
