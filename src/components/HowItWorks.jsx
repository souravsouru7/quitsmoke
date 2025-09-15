import React, { useState, useEffect } from "react";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Set Your Quit Date",
      description: "Choose the perfect day to start your smoke-free journey. Mark it on your calendar and get ready for a healthier life.",
      icon: "📅",
      color: "#9333ea",
      accent: "START",
      position: "left"
    },
    {
      number: "02", 
      title: "Track Your Progress",
      description: "Watch your progress with fun visuals and see how much money you're saving. Every day smoke-free is a victory!",
      icon: "📊",
      color: "#7e22ce",
      accent: "GROW",
      position: "right"
    },
    {
      number: "03",
      title: "Replace Cravings",
      description: "Discover healthy habits and activities to replace smoking urges. Stay busy and focused on your goals.",
      icon: "🌱",
      color: "#6d28d9",
      accent: "TRANSFORM",
      position: "left"
    },
    {
      number: "04",
      title: "Celebrate Milestones",
      description: "Reach important milestones and celebrate your success. Stay motivated with rewards and achievements.",
      icon: "🎉",
      color: "#5b21b6",
      accent: "SUCCEED",
      position: "right"
    }
  ];

  return (
    <section
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
              <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" className="text-purple-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-grid)" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <span className="inline-block text-xs sm:text-sm md:text-base font-bold tracking-widest text-purple-700 bg-white/70 ring-1 ring-purple-200 rounded-full px-4 py-2 shadow-sm">
            DISCOVER
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600">
            How <span className="text-purple-700">QuitEasy</span> Works
          </h2>
          <div className="mt-4 h-1 w-28 mx-auto bg-gradient-to-r from-purple-400 to-purple-300 rounded-full"></div>
          <p className="mt-6 text-lg sm:text-xl text-purple-700/90 max-w-2xl mx-auto">
            Your journey to a smoke-free life in 4 innovative steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveStep(index)}
              className={`group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-purple-200 to-purple-100 transition-all duration-300 ${
                index === activeStep ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/60 p-6 sm:p-8 md:p-10 hover:-translate-y-0.5 hover:scale-[1.01] transition-transform duration-300">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-50"></div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-md ring-4 ring-purple-100 group-hover:scale-105 transition-transform">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-purple-600 tracking-widest">{step.accent}</span>
                      <span className="inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-2">{step.title}</h3>
                    <p className="text-purple-700 text-base sm:text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 mt-6">
                  <div className="h-2 w-full bg-purple-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-purple-500 to-purple-400"
                      style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 md:mt-20">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`group relative h-3 w-10 sm:w-12 rounded-full transition-all duration-300 ${
                  index <= activeStep ? 'bg-purple-600' : 'bg-purple-200 hover:bg-purple-300'
                }`}
                aria-label={`Go to step ${index + 1}`}
              >
                <span className="absolute inset-0 rounded-full"></span>
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-200 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  Step {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-purple-200 to-purple-100 shadow-2xl">
            <div className="relative rounded-3xl border border-white/60 bg-gradient-to-br from-purple-50 to-white p-8 sm:p-10 md:p-12">
              <div className="absolute -top-10 -left-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-purple-100"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-purple-200"></div>
              <div className="relative z-10 text-center">
                <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-purple-700 bg-white/80 ring-1 ring-purple-200 rounded-full px-4 py-2 shadow-sm">
                  READY TO BEGIN?
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-700">
                  Start Your Smoke-Free Journey Today
                </h3>
                <p className="mt-4 text-purple-700/90 max-w-2xl mx-auto">
                  Join thousands of people who have successfully quit smoking with QuitEasy's innovative approach
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <button className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-2xl text-white font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-700 to-purple-600">
                    Begin Your Journey
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

export default HowItWorks;
