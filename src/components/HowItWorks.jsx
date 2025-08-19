import React, { useState, useEffect } from "react";
import './HowItWorks.css';

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
      color: "#10b981",
      accent: "START",
      position: "left"
    },
    {
      number: "02", 
      title: "Track Your Progress",
      description: "Watch your progress with fun visuals and see how much money you're saving. Every day smoke-free is a victory!",
      icon: "📊",
      color: "#059669",
      accent: "GROW",
      position: "right"
    },
    {
      number: "03",
      title: "Replace Cravings",
      description: "Discover healthy habits and activities to replace smoking urges. Stay busy and focused on your goals.",
      icon: "🌱",
      color: "#047857",
      accent: "TRANSFORM",
      position: "left"
    },
    {
      number: "04",
      title: "Celebrate Milestones",
      description: "Reach important milestones and celebrate your success. Stay motivated with rewards and achievements.",
      icon: "🎉",
      color: "#065f46",
      accent: "SUCCEED",
      position: "right"
    }
  ];

  return (
    <section className={`how-it-works ${isVisible ? 'visible' : ''}`}>
      {/* Floating Geometric Shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <div className="title-wrapper">
            <span className="title-prefix">DISCOVER</span>
            <h2 className="how-it-works-title">
              How <span className="title-accent">QuitEasy</span> Works
            </h2>
            <div className="title-underline">
              <div className="underline-line"></div>
              <div className="underline-dot"></div>
            </div>
          </div>
          <p className="how-it-works-subtitle">
            Your journey to a smoke-free life in 4 innovative steps
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step-card step-${step.position} ${index === activeStep ? 'active' : ''}`}
              style={{ '--accent-color': step.color }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step Number Badge */}
              <div className="step-number-badge">
                <span className="step-number">{step.number}</span>
                <div className="badge-accent">{step.accent}</div>
              </div>

              {/* Main Content */}
              <div className="step-content">
                <div className="step-icon-wrapper">
                  <div className="step-icon">{step.icon}</div>
                  <div className="icon-glow"></div>
                </div>
                
                <div className="step-text">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="step-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="progress-indicator">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="timeline-container">
          <div className="timeline-line">
            {steps.map((_, index) => (
              <div 
                key={index}
                className={`timeline-marker ${index <= activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="marker-dot"></div>
                <div className="marker-label">Step {index + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="cta-section">
          <div className="cta-card">
            <div className="cta-pattern"></div>
            <div className="cta-content">
              <div className="cta-header">
                <span className="cta-badge">READY TO BEGIN?</span>
                <h3 className="cta-title">Start Your Smoke-Free Journey Today</h3>
                <p className="cta-text">Join thousands of people who have successfully quit smoking with QuitEasy's innovative approach</p>
              </div>
              
              <div className="cta-actions">
                <button className="cta-button primary">
                  <span>Begin Your Journey</span>
                  <div className="button-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </button>
                
                <button className="cta-button secondary">
                  <span>Learn More</span>
                  <div className="button-icon">ℹ️</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
