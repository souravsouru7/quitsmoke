import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Premium Background */}
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
        <div className="bg-overlay"></div>
        
        {/* Subtle Floating Elements */}
        <div className="floating-elements">
          <div className="floating-element element-1" style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.005}px, ${(mousePosition.y - window.innerHeight / 2) * 0.005}px)`
          }}></div>
          <div className="floating-element element-2" style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * -0.008}px, ${(mousePosition.y - window.innerHeight / 2) * -0.008}px)`
          }}></div>
          <div className="floating-element element-3" style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.003}px, ${(mousePosition.y - window.innerHeight / 2) * -0.003}px)`
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Premium Text Section */}
          <div className="text-section">
            <div className="badge">
              <span className="badge-text">Evidence-Based Approach</span>
              <div className="badge-accent"></div>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line line-1">
                <span className="text-primary">Transform</span>
                <span className="text-secondary">Your Life</span>
              </span>
              <span className="title-line line-2">
                <span className="text-accent">One Breath</span>
                <span className="text-primary">at a Time</span>
              </span>
            </h1>
            
            <p className="hero-description">
              QuitEasy combines cutting-edge behavioral science with personalized support to help you break free from smoking addiction permanently.
            </p>
            
            <div className="stats-section">
              <div className="stat-item">
                <div className="stat-number">94.2%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">12,847</div>
                <div className="stat-label">Lives Transformed</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Premium CTA Section */}
          <div className="cta-section">
            <button className="cta-primary">
              <span className="btn-content">
                <span className="btn-text">Begin Your Journey</span>
                <span className="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </span>
            </button>
            
            <button className="cta-secondary">
              <span className="btn-text">Learn Our Method</span>
              <div className="btn-accent"></div>
            </button>
          </div>
        </div>

        {/* Visual Section with Public Image */}
        <div className="visual-section">
          <div className="main-visual">
            <div className="visual-container">
              <img 
                src="/human-lungs-with-face-expression.png" 
                alt="Healthy lungs with positive expression" 
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line">
          <div className="scroll-progress"></div>
        </div>
        <span className="scroll-text">Discover Our Approach</span>
      </div>
    </section>
  );
};

export default Hero;
