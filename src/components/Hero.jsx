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
        className={`relative min-h-screen overflow-hidden ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } transition-all duration-700`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        {/* Simple geometric background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-100 rotate-45 rounded-lg"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-purple-200 rotate-12 rounded-full"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-50 -rotate-12 rounded-lg"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-300 rotate-45 rounded-full"></div>
          </div>
        </div>

        {/* Logo - mobile responsive - slightly larger */}
        <div className="absolute left-4 top-4 sm:left-6 sm:top-6 md:left-8 md:top-8 z-30">
          <img
            src="/logo.png"
            alt="Quit Easy logo"
            className="h-20 w-auto sm:h-24 md:h-28 lg:h-36 xl:h-44 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Main content - mobile responsive */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-7xl w-full">
            
            {/* Main heading - mobile responsive */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-4 sm:mb-6 md:mb-8">
                <div className="typewriter-dynamic text-purple-900 mb-2 sm:mb-4">BELIEVE</div>
                <div className="typewriter-dynamic-delay text-purple-600">in people</div>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-700 font-light max-w-5xl mx-auto leading-relaxed typewriter-dynamic-slow px-4">
                Transform your life with our revolutionary approach to wellness and personal growth
              </p>
            </div>

            {/* Call to action section - mobile responsive */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center px-4">
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full sm:w-auto px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 bg-purple-600 text-white font-bold text-lg sm:text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Journey
                </button>
                
                <button className="w-full sm:w-auto px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 border-2 border-purple-600 text-purple-600 font-bold text-lg sm:text-xl rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Feature cards - mobile responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4">
              <div className="group bg-purple-50 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-3 sm:mb-4 typewriter-dynamic-delay">Fast Results</h3>
                <p className="text-purple-700 text-sm sm:text-base typewriter-dynamic-slow">See meaningful changes in just 7 days with our proven methodology</p>
              </div>
              
              <div className="group bg-purple-50 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">💪</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-3 sm:mb-4 typewriter-dynamic-delay">Proven Method</h3>
                <p className="text-purple-700 text-sm sm:text-base typewriter-dynamic-slow">Scientifically backed approach trusted by thousands worldwide</p>
              </div>
              
              <div className="group bg-purple-50 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-3 sm:mb-4 typewriter-dynamic-delay">24/7 Support</h3>
                <p className="text-purple-700 text-sm sm:text-base typewriter-dynamic-slow">Always here when you need us with round-the-clock assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements - mobile responsive */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40">
          <button className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-xl hover:bg-purple-700 transition-all duration-300 border-2 border-purple-400 hover:scale-110">
            <span className="text-2xl sm:text-3xl">💬</span>
          </button>
        </div>

        {/* Scroll indicator - mobile responsive */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-6 md:bottom-8 z-30">
          <div className="flex flex-col items-center text-purple-600">
            <span className="text-sm sm:text-base mb-2 sm:mb-3 font-semibold">Scroll</span>
            <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-purple-300 rounded-full flex justify-center">
              <div className="w-1 h-3 sm:w-2 sm:h-4 bg-purple-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Decorative corner elements - mobile responsive */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-100 rounded-full -translate-y-16 translate-x-16 sm:-translate-y-24 sm:translate-x-24 md:-translate-y-32 md:translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-200 rounded-full translate-y-20 -translate-x-20 sm:translate-y-30 sm:-translate-x-30 md:translate-y-40 md:-translate-x-40"></div>
      </section>

      {/* Quit Smoking Form */}
      <QuitSmokeForm isOpen={showForm} onClose={handleCloseForm} />
    </>
  );
};

export default Hero;
