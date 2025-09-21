import React, { useEffect, useState, useRef } from 'react';

const SmokeEffects = ({ onShowForm }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeEffect, setActiveEffect] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const effects = [
    {
      id: "day2",
      title: "2 Days",
      subtitle: "First Victory",
      description: "Your body starts healing immediately. Carbon monoxide leaves your blood, and oxygen levels begin to normalize.",
      icon: "🫁",
      image: "/2.png",
      alt: "Healthy blood cells and circulation",
      color: "#10b981",
      progress: 20,
      benefits: [
        "Blood pressure normalizes",
        "Oxygen levels increase",
        "Taste and smell improve",
        "Nicotine completely eliminated"
      ],
      stats: {
        oxygen: "+15%",
        circulation: "+10%",
        energy: "+5%"
      },
      milestone: "First 48 hours smoke-free"
    },
    {
      id: "week12",
      title: "12 Weeks",
      subtitle: "Heart Healing",
      description: "Your cardiovascular system is getting stronger. Blood flows better to your heart and muscles.",
      icon: "❤️",
      image: "/3.png",
      alt: "Strong heart and cardiovascular health",
      color: "#059669",
      progress: 60,
      benefits: [
        "Lung function increases by 30%",
        "Circulation improves significantly",
        "Exercise becomes easier",
        "Heart attack risk drops"
      ],
      stats: {
        oxygen: "+30%",
        circulation: "+25%",
        energy: "+40%"
      },
      milestone: "3 months of freedom"
    },
    {
      id: "month9",
      title: "9 Months",
      subtitle: "Lung Recovery",
      description: "Your lungs are working at their best. Breathing is easier, and your energy levels are dramatically improved.",
      icon: "🌬️",
      image: "/4.png",
      alt: "Healthy lungs and respiratory system",
      color: "#047857",
      progress: 100,
      benefits: [
        "Coughing and shortness of breath decrease",
        "Energy levels dramatically improve",
        "Risk of heart disease drops by half",
        "Lung cancer risk significantly reduced"
      ],
      stats: {
        oxygen: "+50%",
        circulation: "+45%",
        energy: "+80%"
      },
      milestone: "9 months of transformation"
    }
  ];

  const nextEffect = () => {
    if (activeEffect < effects.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveEffect(activeEffect + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevEffect = () => {
    if (activeEffect > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveEffect(activeEffect - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToEffect = (index) => {
    if (index !== activeEffect && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveEffect(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 sm:py-28 md:py-32 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      } transition-all duration-700 bg-gradient-to-b from-white to-purple-50/30`}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-100 rounded-full translate-x-16 -translate-y-16 blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-200 rounded-full -translate-x-24 translate-y-24 blur-sm"></div>
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smoke-dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" className="text-purple-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smoke-dot-grid)" />
          </svg>
        </div>
        {/* Soft animated gradient orbs */}
        <div className="pointer-events-none absolute -top-10 left-10 hidden md:block">
          <div className="h-40 w-40 rounded-full bg-gradient-to-br from-purple-200 to-purple-100 blur-2xl opacity-70 animate-pulse"></div>
        </div>
        <div className="pointer-events-none absolute -bottom-10 right-10 hidden md:block">
          <div className="h-48 w-48 rounded-full bg-gradient-to-tr from-purple-300 to-purple-100 blur-2xl opacity-60 animate-pulse"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold tracking-widest text-purple-700 bg-white/70 ring-1 ring-purple-200 rounded-full px-4 py-2 shadow-sm">
            <span>✨</span> Your Transformation Journey
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600">
            Watch Your Body <span className="text-purple-700">Heal & Transform</span>
          </h2>
          <div className="mt-4 h-1 w-28 mx-auto bg-gradient-to-r from-purple-400 to-purple-300 rounded-full"></div>
          <p className="mt-6 text-lg sm:text-xl text-purple-700/90 max-w-3xl mx-auto">
            Every moment without smoking is a victory. See the incredible changes happening as you progress through your smoke-free journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="relative">
            <div className="h-2 w-full bg-purple-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-500"
                style={{ width: `${((activeEffect + 1) / effects.length) * 100}%` }}
              ></div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {effects.map((effect, index) => (
                <button
                  key={effect.id}
                  onClick={() => goToEffect(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative rounded-2xl border ${
                    index === activeEffect
                      ? 'border-purple-500 bg-white ring-2 ring-purple-200'
                      : 'border-purple-200 bg-white/80 hover:bg-white hover:ring-1 hover:ring-purple-300'
                  } p-4 text-left shadow-md hover:shadow-lg transition-all`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`relative flex h-10 w-10 items-center justify-center rounded-xl ${
                      index <= activeEffect ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'
                    } text-lg`}>
                      {effect.icon}
                      {index < activeEffect && (
                        <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-green-600 ring-1 ring-purple-200 text-xs">✓</span>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-purple-900">{effect.title}</div>
                      <div className="text-sm text-purple-700/80">{effect.subtitle}</div>
                    </div>
                  </div>
                  {hoveredCard === index && (
                    <div className="absolute left-1/2 z-20 mt-2 w-64 -translate-x-1/2 rounded-xl border border-purple-200 bg-white p-4 shadow-xl">
                      <div className="text-sm text-purple-900 font-semibold mb-1">{effect.title}</div>
                      <p className="text-sm text-purple-700">{effect.description}</p>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-purple-700">
                        <div className="rounded-lg bg-purple-50 px-2 py-1 font-semibold">Oxygen {effect.stats.oxygen}</div>
                        <div className="rounded-lg bg-purple-50 px-2 py-1 font-semibold">Energy {effect.stats.energy}</div>
                      </div>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-white ring-1 ring-purple-200"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-purple-700">
              <button
                onClick={prevEffect}
                disabled={activeEffect === 0}
                className={`px-4 py-2 rounded-xl ring-1 ring-purple-300 text-purple-700 hover:bg-purple-50 transition ${
                  activeEffect === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                ← Previous
              </button>
              <div className="text-sm font-semibold">
                <span>{activeEffect + 1}</span>/<span>{effects.length}</span> · {effects[activeEffect].milestone}
              </div>
              <button
                onClick={nextEffect}
                disabled={activeEffect === effects.length - 1}
                className={`px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition ${
                  activeEffect === effects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`transition-transform ${isTransitioning ? 'scale-[0.99] opacity-90' : 'scale-100 opacity-100'} duration-300`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Left */}
            <div>
              <div className="relative overflow-hidden rounded-3xl border border-purple-200 bg-white p-6 sm:p-8 shadow-xl">
                <div className="relative">
                  <img
                    src={effects[activeEffect].image}
                    alt={effects[activeEffect].alt}
                    className="w-full rounded-2xl object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30"></div>
                  {/* subtle glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/5 to-transparent"></div>
                </div>
                <div className="mt-6 flex items-center justify-center">
                  <div className="relative">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" stroke="rgba(0,0,0,0.06)" strokeWidth="6" fill="none" />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="#7c3aed"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${effects[activeEffect].progress * 3.14} 314`}
                        strokeDashoffset="0"
                        transform="rotate(-90 60 60)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-extrabold text-purple-900">{effects[activeEffect].progress}%</span>
                      <span className="text-xs font-semibold text-purple-700">Recovery</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-purple-200 bg-purple-50 p-4 text-center">
                  <div className="text-2xl">🫁</div>
                  <div className="mt-1 text-lg font-extrabold text-purple-900">{effects[activeEffect].stats.oxygen}</div>
                  <div className="text-xs text-purple-700">Oxygen</div>
                </div>
                <div className="rounded-2xl border border-purple-200 bg-purple-50 p-4 text-center">
                  <div className="text-2xl">❤️</div>
                  <div className="mt-1 text-lg font-extrabold text-purple-900">{effects[activeEffect].stats.circulation}</div>
                  <div className="text-xs text-purple-700">Circulation</div>
                </div>
                <div className="rounded-2xl border border-purple-200 bg-purple-50 p-4 text-center">
                  <div className="text-2xl">⚡</div>
                  <div className="mt-1 text-lg font-extrabold text-purple-900">{effects[activeEffect].stats.energy}</div>
                  <div className="text-xs text-purple-700">Energy</div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-extrabold text-purple-900">{effects[activeEffect].title}</h3>
                  <span className="mt-1 inline-block text-sm font-semibold text-purple-700">{effects[activeEffect].subtitle}</span>
                </div>
                <div className="rounded-full bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1">
                  {effects[activeEffect].milestone}
                </div>
              </div>
              <p className="mt-4 text-purple-800 leading-relaxed">
                {effects[activeEffect].description}
              </p>
              <div className="mt-6">
                <h4 className="text-sm font-bold tracking-widest text-purple-700">KEY IMPROVEMENTS</h4>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {effects[activeEffect].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 rounded-xl border border-purple-200 bg-white p-3 shadow-sm hover:shadow-md hover:ring-1 hover:ring-purple-300 transition">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-600 text-white text-xs">✓</div>
                      <span className="text-purple-900 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-900">The Amazing Transformation</h3>
            <p className="mt-2 text-purple-700">See the incredible before and after changes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <div className="rounded-3xl border border-purple-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-2 text-purple-700 font-bold">
                <span>🚬</span> <span>Before</span>
              </div>
              <div className="mt-4 relative overflow-hidden rounded-2xl">
                <img src="/smoking.gif" alt="Before quitting" className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
              <div className="mt-4 grid gap-2 text-purple-800">
                <div className="flex items-center gap-2"><span>❌</span><span>Poor circulation</span></div>
                <div className="flex items-center gap-2"><span>❌</span><span>Difficulty breathing</span></div>
                <div className="flex items-center gap-2"><span>❌</span><span>Low energy levels</span></div>
                <div className="flex items-center gap-2"><span>❌</span><span>High disease risk</span></div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="flex flex-col items-center text-purple-700">
                <div className="h-24 w-1 bg-purple-200 rounded-full"></div>
                <div className="mt-2 font-bold">Transform</div>
                <div className="mt-2 text-2xl">✨</div>
              </div>
            </div>
            <div className="rounded-3xl border border-purple-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-2 text-green-600 font-bold">
                <span>💚</span> <span>After</span>
              </div>
              <div className="mt-4 relative overflow-hidden rounded-2xl">
                <img src="/shortness-of-breath-lungs-breathing.gif" alt="After quitting" className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
              <div className="mt-4 grid gap-2 text-purple-900">
                <div className="flex items-center gap-2"><span>✅</span><span>Excellent circulation</span></div>
                <div className="flex items-center gap-2"><span>✅</span><span>Easy breathing</span></div>
                <div className="flex items-center gap-2"><span>✅</span><span>High energy levels</span></div>
                <div className="flex items-center gap-2"><span>✅</span><span>Reduced disease risk</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-900">The Numbers Don't Lie</h3>
            <p className="mt-2 text-purple-700">Real improvements you can expect</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6 text-center shadow-md">
              <div className="mx-auto h-20 w-20 relative">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(0,0,0,0.06)" strokeWidth="8" fill="none"/>
                  <circle cx="50" cy="50" r="40" stroke="#7c3aed" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="50" transform="rotate(-90 50 50)"/>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-extrabold text-purple-900">20%</span>
              </div>
              <div className="mt-3 font-bold text-purple-900">Heart Health</div>
              <div className="text-sm text-purple-700">Reduced risk of heart disease</div>
            </div>
            <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6 text-center shadow-md">
              <div className="mx-auto h-20 w-20 relative">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(0,0,0,0.06)" strokeWidth="8" fill="none"/>
                  <circle cx="50" cy="50" r="40" stroke="#7c3aed" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="75" transform="rotate(-90 50 50)"/>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-extrabold text-purple-900">30%</span>
              </div>
              <div className="mt-3 font-bold text-purple-900">Lung Function</div>
              <div className="text-sm text-purple-700">Improved breathing capacity</div>
            </div>
            <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6 text-center shadow-md">
              <div className="mx-auto h-20 w-20 relative">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(0,0,0,0.06)" strokeWidth="8" fill="none"/>
                  <circle cx="50" cy="50" r="40" stroke="#7c3aed" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="125" transform="rotate(-90 50 50)"/>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-extrabold text-purple-900">50%</span>
              </div>
              <div className="mt-3 font-bold text-purple-900">Energy Boost</div>
              <div className="text-sm text-purple-700">Dramatically increased energy</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-purple-200 to-purple-100 shadow-2xl">
            <div className="relative rounded-3xl border border-white/60 bg-gradient-to-br from-purple-50 to-white p-8 sm:p-10 md:p-12 text-center">
              <div className="absolute -top-10 -left-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-purple-100"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-purple-200"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-700">Ready to Transform Your Life?</h3>
                <p className="mt-4 text-purple-700/90 max-w-3xl mx-auto">Join thousands who have started their journey to a healthier, smoke-free life.</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <button 
                    onClick={onShowForm}
                    className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-2xl text-white font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-700 to-purple-600"
                  >
                    Start Your Journey
                  </button>
                  <button className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 bg-white text-purple-700 ring-2 ring-purple-600 hover:bg-purple-600 hover:text-white shadow-lg hover:shadow-xl">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmokeEffects;
