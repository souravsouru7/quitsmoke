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

        {/* Main content - classic mobile design */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 sm:px-8 md:px-12">
          <div className="text-center max-w-6xl w-full">
            
            {/* Main heading - classic mobile design */}
            <div className="mb-16 sm:mb-20 md:mb-24">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight mb-6 sm:mb-8 md:mb-10">
                <div className="typewriter-dynamic text-purple-900 mb-3 sm:mb-4">BELIEVE</div>
                <div className="typewriter-dynamic-delay text-purple-600">in people</div>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-700 font-light max-w-4xl mx-auto leading-relaxed typewriter-dynamic-slow">
                Transform your life with our revolutionary approach to wellness and personal growth
              </p>
            </div>

            {/* Call to action section - classic mobile design */}
            <div className="mb-16 sm:mb-20 md:mb-24">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-center">
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full sm:w-auto px-12 sm:px-16 md:px-20 py-5 sm:py-6 md:py-7 bg-purple-600 text-white font-bold text-xl sm:text-2xl md:text-3xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Journey
                </button>
                
                <button className="w-full sm:w-auto px-12 sm:px-16 md:px-20 py-5 sm:py-6 md:py-7 border-3 border-purple-600 text-purple-600 font-bold text-xl sm:text-2xl md:text-3xl rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl">
                  Learn More
                </button>
              </div>
            </div>

            {/* Feature cards - classic mobile design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-purple-200 hover:bg-white hover:border-purple-400 transition-all duration-500 transform hover:-translate-y-3 shadow-xl hover:shadow-2xl">
                <div className="text-6xl sm:text-7xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-4 sm:mb-6 typewriter-dynamic-delay">Fast Results</h3>
                <p className="text-purple-700 text-base sm:text-lg md:text-xl typewriter-dynamic-slow leading-relaxed">See meaningful changes in just 7 days with our proven methodology</p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-purple-200 hover:bg-white hover:border-purple-400 transition-all duration-500 transform hover:-translate-y-3 shadow-xl hover:shadow-2xl">
                <div className="text-6xl sm:text-7xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">💪</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-4 sm:mb-6 typewriter-dynamic-delay">Proven Method</h3>
                <p className="text-purple-700 text-base sm:text-lg md:text-xl typewriter-dynamic-slow leading-relaxed">Scientifically backed approach trusted by thousands worldwide</p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-purple-200 hover:bg-white hover:border-purple-400 transition-all duration-500 transform hover:-translate-y-3 shadow-xl hover:shadow-2xl sm:col-span-2 lg:col-span-1">
                <div className="text-6xl sm:text-7xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-4 sm:mb-6 typewriter-dynamic-delay">24/7 Support</h3>
                <p className="text-purple-700 text-base sm:text-lg md:text-xl typewriter-dynamic-slow leading-relaxed">Always here when you need us with round-the-clock assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements - classic mobile design */}
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 z-40">
          <button className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-purple-700 transition-all duration-300 border-3 border-purple-400 hover:scale-110">
            <span className="text-3xl sm:text-4xl">💬</span>
          </button>
        </div>

        {/* Scroll indicator - classic mobile design */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 sm:bottom-8 md:bottom-10 z-30">
          <div className="flex flex-col items-center text-purple-600">
            <span className="text-base sm:text-lg mb-3 sm:mb-4 font-bold">Scroll Down</span>
            <div className="w-8 h-12 sm:w-10 sm:h-16 border-3 border-purple-300 rounded-full flex justify-center">
              <div className="w-2 h-4 sm:w-3 sm:h-6 bg-purple-500 rounded-full mt-2 animate-bounce"></div>
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
