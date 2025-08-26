import React, { useEffect, useState, useRef } from 'react';
import './SmokeEffects.css';

const SmokeEffects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeEffect, setActiveEffect] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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
      title: "2 Days",
      subtitle: "First Victory",
      description: "Carbon monoxide leaves your blood",
      icon: "🫁",
      image: "/2.png",
      alt: "Healthy blood cells and circulation",
      color: "#10b981",
      progress: 20,
      details: [
        "Blood pressure normalizes",
        "Oxygen levels increase",
        "Taste and smell improve"
      ]
    },
    {
      title: "12 Weeks",
      subtitle: "Heart Healing",
      description: "Blood flows better to heart and muscles",
      icon: "❤️",
      image: "/3.png",
      alt: "Strong heart and cardiovascular health",
      color: "#059669",
      progress: 60,
      details: [
        "Lung function increases by 30%",
        "Circulation improves significantly",
        "Exercise becomes easier"
      ]
    },
    {
      title: "9 Months",
      subtitle: "Lung Recovery",
      description: "Your lungs work better and breathing improves",
      icon: "🌬️",
      image: "/4.png",
      alt: "Healthy lungs and respiratory system",
      color: "#047857",
      progress: 100,
      details: [
        "Coughing and shortness of breath decrease",
        "Energy levels dramatically improve",
        "Risk of heart disease drops by half"
      ]
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
    <section className={`smoke-effects ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="smoke-container">
        {/* Unique Header with Journey Concept */}
        <div className="journey-header">
          <div className="journey-badge">
            <div className="badge-icon">🚀</div>
            <span className="badge-text">Your Health Journey</span>
          </div>
          
          <h2 className="journey-title">
            <span className="title-line">Transform Your Life</span>
            <span className="title-accent">One Day at a Time</span>
          </h2>
          
          <p className="journey-subtitle">
            Every day without smoking is a step toward a healthier, happier you. 
            Here's what happens on your journey to freedom.
          </p>
        </div>

        {/* Interactive Step Navigation */}
        <div className="step-navigation">
          <div className="step-indicators">
            {effects.map((effect, index) => (
              <div 
                key={index}
                className={`step-indicator ${index === activeEffect ? 'active' : ''} ${index < activeEffect ? 'completed' : ''}`}
                onClick={() => goToEffect(index)}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-info">
                  <span className="step-title">{effect.title}</span>
                  <span className="step-subtitle">{effect.subtitle}</span>
                </div>
                <div className="step-icon">{effect.icon}</div>
              </div>
            ))}
          </div>
          
          <div className="navigation-controls">
            <button 
              className={`nav-btn prev-btn ${activeEffect === 0 ? 'disabled' : ''}`}
              onClick={prevEffect}
              disabled={activeEffect === 0}
            >
              ← Previous
            </button>
            <div className="progress-display">
              Step {activeEffect + 1} of {effects.length}
            </div>
            <button 
              className={`nav-btn next-btn ${activeEffect === effects.length - 1 ? 'disabled' : ''}`}
              onClick={nextEffect}
              disabled={activeEffect === effects.length - 1}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Dynamic Content Display with Smooth Transitions */}
        <div className={`journey-content ${isTransitioning ? 'transitioning' : ''}`}>
          <div className="content-card">
            <div className="card-header">
              <div className="header-info">
                <h3 className="effect-title">{effects[activeEffect].title}</h3>
                <span className="effect-subtitle">{effects[activeEffect].subtitle}</span>
              </div>
              <div className="header-icon" style={{ backgroundColor: effects[activeEffect].color }}>
                {effects[activeEffect].icon}
              </div>
            </div>
            
            <div className="card-body">
              <div className="image-section">
                <img 
                  src={effects[activeEffect].image} 
                  alt={effects[activeEffect].alt}
                  className="effect-image"
                />
                <div className="image-overlay">
                  <div className="progress-ring">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle 
                        cx="40" 
                        cy="40" 
                        r="35" 
                        stroke="rgba(255,255,255,0.2)" 
                        strokeWidth="4" 
                        fill="none"
                      />
                      <circle 
                        cx="40" 
                        cy="40" 
                        r="35" 
                        stroke={effects[activeEffect].color}
                        strokeWidth="4" 
                        fill="none"
                        strokeDasharray={`${effects[activeEffect].progress * 2.2} 220`}
                        strokeDashoffset="0"
                        transform="rotate(-90 40 40)"
                        className="progress-circle"
                      />
                    </svg>
                    <span className="progress-text">{effects[activeEffect].progress}%</span>
                  </div>
                </div>
              </div>
              
              <div className="content-section">
                <p className="effect-description">{effects[activeEffect].description}</p>
                
                <div className="effect-details">
                  <h4>Key Benefits:</h4>
                  <ul className="benefits-list">
                    {effects[activeEffect].details.map((detail, index) => (
                      <li key={index} className="benefit-item">
                        <span className="benefit-icon">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="benefit-tags">
                  <span className="tag" style={{ backgroundColor: effects[activeEffect].color + '20', color: effects[activeEffect].color }}>
                    Healthier
                  </span>
                  <span className="tag" style={{ backgroundColor: effects[activeEffect].color + '20', color: effects[activeEffect].color }}>
                    Stronger
                  </span>
                  <span className="tag" style={{ backgroundColor: effects[activeEffect].color + '20', color: effects[activeEffect].color }}>
                    Better
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Transformation Showcase */}
        <div className="transformation-showcase">
          <div className="showcase-header">
            <h3>The Transformation</h3>
            <p>See the incredible changes in your body</p>
          </div>
          
          <div className="transformation-grid">
            <div className="transformation-card before">
              <div className="card-visual">
                <img src="/smoking.gif" alt="Before quitting" className="transformation-image" />
                <div className="visual-overlay">
                  <span className="overlay-icon">🚬</span>
                  <span className="overlay-text">Before</span>
                </div>
              </div>
              <div className="card-content">
                <h4>Damaged & Weak</h4>
                <ul className="symptom-list">
                  <li>Poor circulation</li>
                  <li>Difficulty breathing</li>
                  <li>Low energy</li>
                </ul>
              </div>
            </div>
            
            <div className="transformation-arrow">
              <div className="arrow-line"></div>
              <div className="arrow-head"></div>
              <span className="arrow-text">Transform</span>
            </div>
            
            <div className="transformation-card after">
              <div className="card-visual">
                <img src="/shortness-of-breath-lungs-breathing.gif" alt="After quitting" className="transformation-image" />
                <div className="visual-overlay">
                  <span className="overlay-icon">💚</span>
                  <span className="overlay-text">After</span>
                </div>
              </div>
              <div className="card-content">
                <h4>Healthy & Strong</h4>
                <ul className="benefit-list">
                  <li>Better circulation</li>
                  <li>Easy breathing</li>
                  <li>High energy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="stats-showcase">
          <div className="stat-item">
            <div className="stat-icon">❤️</div>
            <div className="stat-number">20%</div>
            <div className="stat-label">Heart Health</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🫁</div>
            <div className="stat-number">30%</div>
            <div className="stat-label">Lung Function</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⚡</div>
            <div className="stat-number">50%</div>
            <div className="stat-label">More Energy</div>
          </div>
        </div>

        {/* Action Section */}
        <div className="action-section">
          <div className="action-card">
            <div className="action-content">
              <h3>Ready to Start Your Journey?</h3>
              <p>Join thousands who have already transformed their lives</p>
              <div className="action-buttons">
                <button className="primary-btn">
                  <span>Start Now</span>
                  <span className="btn-arrow">→</span>
                </button>
                <button className="secondary-btn">
                  <span>Learn More</span>
                </button>
              </div>
            </div>
            <div className="action-visual">
              <div className="floating-elements">
                <div className="floating-icon">🫁</div>
                <div className="floating-icon">❤️</div>
                <div className="floating-icon">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmokeEffects;
