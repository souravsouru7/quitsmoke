import React, { useEffect, useState, useRef } from 'react';
import './WhyQuitEasy.css';

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
      highlight: "Free NHS support available"
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
      description: "Use the free NHS Quit Smoking app, get daily text support, and access videos and information online.",
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
    <section className={`why-quiteasy ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      {/* Animated Background */}
      <div className="why-background">
        <div className="why-overlay"></div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="why-container">
        {/* Header Section */}
        <div className="why-header">
          <div className="why-badge">
            <span className="badge-text">Free Support</span>
            <div className="badge-accent"></div>
          </div>
          
          <h2 className="why-title">
            <span className="title-main">Ways to Quit</span>
            <span className="title-accent">Smoking</span>
          </h2>
          
          <p className="why-subtitle">
            You can try quitting smoking on your own but most people find it very hard. 
            There are lots of different ways to help you stop smoking. You can use more than one of these ways.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-section">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                style={{ '--index': index }}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="icon-glow"></div>
                </div>
                
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-highlight">{feature.highlight}</div>
                </div>
                
                <div className="feature-border"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="comparison-section">
          <div className="comparison-header">
            <h3 className="comparison-title">Going Alone vs. Getting Help</h3>
            <p className="comparison-subtitle">See why getting support makes quitting easier</p>
          </div>
          
          <div className="comparison-grid">
            {comparisons.map((comparison, index) => (
              <div key={index} className="comparison-row">
                <div className="comparison-item traditional">
                  <div className="item-icon">{comparison.icon}</div>
                  <div className="item-text">{comparison.traditional}</div>
                </div>
                
                <div className="comparison-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="comparison-item scientific">
                  <div className="item-icon">{comparison.icon}</div>
                  <div className="item-text">{comparison.quiteasy}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="metrics-section">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-number">Free</div>
              <div className="metric-label">Support Available</div>
              <div className="metric-detail">NHS stop smoking services</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-number">Multiple</div>
              <div className="metric-label">Methods to Choose</div>
              <div className="metric-detail">Find what works for you</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-number">24/7</div>
              <div className="metric-label">Digital Help</div>
              <div className="metric-detail">App, texts, and online</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-number">Expert</div>
              <div className="metric-label">Advice Available</div>
              <div className="metric-detail">Professional guidance</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="why-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-text">You can find your local stop smoking service and get free support and advice to help you quit smoking for good.</p>
            <div className="cta-actions">
              <button className="cta-button primary">
                <span className="btn-text">Find Local Service</span>
                <span className="btn-arrow">→</span>
              </button>
              <button className="cta-button secondary">
                <span className="btn-text">Get Free Support</span>
                <span className="btn-icon">▶</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyQuitEasy;
