import React, { useEffect, useState, useRef } from 'react';

const WhyQuitEasy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🏥",
      title: "Stop Smoking Services",
      description: "Stop smoking services will give you free support and advice. You can speak to them to find out how they can help.",
    
    },
    {
      icon: "💊",
      title: "Stop Smoking Aids",
      description: "E-cigarettes (vapes), nicotine gum, nicotine patches, and stop smoking tablets can help you not smoke when you feel you really want to.",
      highlight: "Multiple options available"
    },
    {
      icon: "📱",
      title: "Digital Support",
      description: "Use the free Quiteasy app, get daily text support, and access videos and information online.",
      highlight: "24/7 digital help"
    },
    {
      icon: "💡",
      title: "Practical Tips",
      description: "Make a list of reasons why you want to quit, stay away from things that make you want to smoke, and throw away any cigarettes you have.",
      highlight: "Simple but effective"
    }
  ];

  const comparisons = [
    {
      traditional: "Trying alone",
      quiteasy: "Getting professional help",
      icon: "🎯"
    },
    {
      traditional: "Limited support",
      quiteasy: "Multiple support options",
      icon: "📚"
    },
    {
      traditional: "One method only",
      quiteasy: "Combining different methods",
      icon: "🔄"
    },
    {
      traditional: "No guidance",
      quiteasy: "Expert advice available",
      icon: "💡"
    }
  ];

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
              <pattern id="why-dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" className="text-purple-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#why-dot-grid)" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <span className="inline-block text-xs sm:text-sm md:text-base font-bold tracking-widest text-purple-700 bg-white/70 ring-1 ring-purple-200 rounded-full px-4 py-2 shadow-sm">
            Free Support
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600">
            <span className="text-purple-900">Ways to Quit</span> <span className="text-purple-700">Smoking</span>
          </h2>
          <div className="mt-4 h-1 w-28 mx-auto bg-gradient-to-r from-purple-400 to-purple-300 rounded-full"></div>
          <p className="mt-6 text-lg sm:text-xl text-purple-700/90 max-w-3xl mx-auto">
            You can try quitting smoking on your own, but most people find it very hard. There are many ways to help you stop smoking — you can use more than one.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-purple-200 to-purple-100 ${activeFeature === index ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}>
              <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/60 p-6 sm:p-8 md:p-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.01]">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-50"></div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-md ring-4 ring-purple-100">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-2">{feature.title}</h3>
                    <p className="text-purple-700 text-base sm:text-lg leading-relaxed">{feature.description}</p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-sm font-semibold">
                      <span>✨</span>
                      <span>{feature.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-900">Doing Alone vs. Getting Help</h3>
            <p className="mt-2 text-purple-700">See why getting support makes quitting easier</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {comparisons.map((comparison, index) => (
              <div key={index} className="relative flex items-center justify-between gap-4 rounded-2xl border border-purple-200 bg-white/90 p-5 sm:p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700 text-lg">{comparison.icon}</div>
                  <div className="text-purple-900 font-bold">{comparison.traditional}</div>
                </div>
                <div className="hidden sm:block text-green-600">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white text-lg">{comparison.icon}</div>
                  <div className="text-purple-900 font-bold">{comparison.quiteasy}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-5 text-center shadow-md">
              <div className="text-xl sm:text-2xl font-extrabold text-purple-900">Free</div>
              <div className="mt-1 text-purple-700 font-semibold">Support Available</div>
              <div className="mt-1 text-sm text-purple-600">Free virtual support available</div>
            </div>
            <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-5 text-center shadow-md">
              <div className="text-xl sm:text-2xl font-extrabold text-purple-900">Multiple</div>
              <div className="mt-1 text-purple-700 font-semibold">Methods to Choose</div>
              <div className="mt-1 text-sm text-purple-600">Find what works for you</div>
            </div>
            <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-5 text-center shadow-md">
              <div className="text-xl sm:text-2xl font-extrabold text-purple-900">24/7</div>
              <div className="mt-1 text-purple-700 font-semibold">Digital Help</div>
              <div className="mt-1 text-sm text-purple-600">App, texts, and online</div>
            </div>
            <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-5 text-center shadow-md">
              <div className="text-xl sm:text-2xl font-extrabold text-purple-900">Expert</div>
              <div className="mt-1 text-purple-700 font-semibold">Advice Available</div>
              <div className="mt-1 text-sm text-purple-600">Professional guidance</div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default WhyQuitEasy;
