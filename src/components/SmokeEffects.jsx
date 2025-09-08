import React, { useEffect, useState, useRef } from 'react';
import './SmokeEffects.css';

const SmokeEffects = () => {
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
    <section className={`smoke-effects ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="background-effects">
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      <div className="smoke-container">
        {/* Hero Header */}
        <div className="hero-header">
          <div className="header-badge">
            <div className="badge-icon">✨</div>
            <span className="badge-text">Your Transformation Journey</span>
          </div>
          
          <h2 className="hero-title">
            <span className="title-line">Watch Your Body</span>
            <span className="title-accent">Heal & Transform</span>
          </h2>
          
          <p className="hero-subtitle">
            Every moment without smoking is a victory. See the incredible changes happening in your body 
            as you progress through your smoke-free journey.
          </p>
        </div>

        {/* Interactive Timeline Navigation */}
        <div className="timeline-navigation">
          <div className="timeline-container">
            <div className="timeline-track">
              <div 
                className="timeline-progress" 
                style={{ width: `${((activeEffect + 1) / effects.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="timeline-milestones">
              {effects.map((effect, index) => (
                <div 
                  key={effect.id}
                  className={`milestone ${index === activeEffect ? 'active' : ''} ${index < activeEffect ? 'completed' : ''}`}
                  onClick={() => goToEffect(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="milestone-dot" style={{ '--milestone-color': effect.color }}>
                    <div className="milestone-icon">{effect.icon}</div>
                    {index < activeEffect && <div className="checkmark">✓</div>}
                  </div>
                  <div className="milestone-label">{effect.title}</div>
                  <div className="milestone-subtitle">{effect.subtitle}</div>
                  
                  {/* Hover Card */}
                  {hoveredCard === index && (
                    <div className="hover-card">
                      <div className="hover-content">
                        <h4>{effect.title}</h4>
                        <p>{effect.description}</p>
                        <div className="hover-stats">
                          <div className="stat">
                            <span className="stat-value">{effect.stats.oxygen}</span>
                            <span className="stat-label">Oxygen</span>
                          </div>
                          <div className="stat">
                            <span className="stat-value">{effect.stats.energy}</span>
                            <span className="stat-label">Energy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="navigation-controls">
            <button 
              className={`nav-btn prev-btn ${activeEffect === 0 ? 'disabled' : ''}`}
              onClick={prevEffect}
              disabled={activeEffect === 0}
            >
              <span className="btn-icon">←</span>
              <span className="btn-text">Previous</span>
            </button>
            
            <div className="progress-info">
              <div className="progress-text">
                <span className="current-step">{activeEffect + 1}</span>
                <span className="separator">/</span>
                <span className="total-steps">{effects.length}</span>
              </div>
              <div className="progress-label">{effects[activeEffect].milestone}</div>
            </div>
            
            <button 
              className={`nav-btn next-btn ${activeEffect === effects.length - 1 ? 'disabled' : ''}`}
              onClick={nextEffect}
              disabled={activeEffect === effects.length - 1}
            >
              <span className="btn-text">Next</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>

        {/* Main Content Display */}
        <div className={`main-content ${isTransitioning ? 'transitioning' : ''}`}>
          <div className="content-grid">
            {/* Left Side - Visual & Stats */}
            <div className="visual-section">
              <div className="image-container">
                <div className="image-wrapper">
                  <img 
                    src={effects[activeEffect].image} 
                    alt={effects[activeEffect].alt}
                    className="main-image"
                  />
                  <div className="image-glow" style={{ '--glow-color': effects[activeEffect].color }}></div>
                </div>
                
                <div className="progress-ring">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle 
                      cx="60" 
                      cy="60" 
                      r="50" 
                      stroke="rgba(255,255,255,0.1)" 
                      strokeWidth="6" 
                      fill="none"
                    />
                    <circle 
                      cx="60" 
                      cy="60" 
                      r="50" 
                      stroke={effects[activeEffect].color}
                      strokeWidth="6" 
                      fill="none"
                      strokeDasharray={`${effects[activeEffect].progress * 3.14} 314`}
                      strokeDashoffset="0"
                      transform="rotate(-90 60 60)"
                      className="progress-circle"
                    />
                  </svg>
                  <div className="progress-content">
                    <span className="progress-percentage">{effects[activeEffect].progress}%</span>
                    <span className="progress-label">Recovery</span>
                  </div>
                </div>
              </div>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">🫁</div>
                  <div className="stat-value">{effects[activeEffect].stats.oxygen}</div>
                  <div className="stat-label">Oxygen Level</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">❤️</div>
                  <div className="stat-value">{effects[activeEffect].stats.circulation}</div>
                  <div className="stat-label">Circulation</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">⚡</div>
                  <div className="stat-value">{effects[activeEffect].stats.energy}</div>
                  <div className="stat-label">Energy</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="content-section">
              <div className="content-header">
                <div className="title-group">
                  <h3 className="content-title">{effects[activeEffect].title}</h3>
                  <span className="content-subtitle">{effects[activeEffect].subtitle}</span>
                </div>
                <div className="milestone-badge" style={{ '--badge-color': effects[activeEffect].color }}>
                  {effects[activeEffect].milestone}
                </div>
              </div>
              
              <p className="content-description">{effects[activeEffect].description}</p>
              
              <div className="benefits-section">
                <h4 className="benefits-title">Key Improvements:</h4>
                <div className="benefits-grid">
                  {effects[activeEffect].benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-icon" style={{ '--icon-color': effects[activeEffect].color }}>✓</div>
                      <span className="benefit-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before & After Comparison */}
        <div className="comparison-section">
          <div className="comparison-header">
            <h3>The Amazing Transformation</h3>
            <p>See the incredible before and after changes</p>
          </div>
          
          <div className="comparison-grid">
            <div className="comparison-card before-card">
              <div className="card-header">
                <div className="status-indicator negative">
                  <span className="status-icon">🚬</span>
                  <span className="status-text">Before</span>
                </div>
              </div>
              
              <div className="card-visual">
                <img src="/smoking.gif" alt="Before quitting" className="comparison-image" />
                <div className="image-overlay negative">
                  <div className="overlay-content">
                    <span className="overlay-title">Damaged System</span>
                    <span className="overlay-subtitle">Poor Health</span>
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <h4>Your Body Before</h4>
                <div className="symptoms-list">
                  <div className="symptom-item">
                    <span className="symptom-icon">❌</span>
                    <span>Poor circulation</span>
                  </div>
                  <div className="symptom-item">
                    <span className="symptom-icon">❌</span>
                    <span>Difficulty breathing</span>
                  </div>
                  <div className="symptom-item">
                    <span className="symptom-icon">❌</span>
                    <span>Low energy levels</span>
                  </div>
                  <div className="symptom-item">
                    <span className="symptom-icon">❌</span>
                    <span>High disease risk</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="transformation-arrow">
              <div className="arrow-container">
                <div className="arrow-line"></div>
                <div className="arrow-head"></div>
                <div className="arrow-text">Transform</div>
                <div className="arrow-sparkle">✨</div>
              </div>
            </div>
            
            <div className="comparison-card after-card">
              <div className="card-header">
                <div className="status-indicator positive">
                  <span className="status-icon">💚</span>
                  <span className="status-text">After</span>
                </div>
              </div>
              
              <div className="card-visual">
                <img src="/shortness-of-breath-lungs-breathing.gif" alt="After quitting" className="comparison-image" />
                <div className="image-overlay positive">
                  <div className="overlay-content">
                    <span className="overlay-title">Healthy System</span>
                    <span className="overlay-subtitle">Optimal Health</span>
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <h4>Your Body After</h4>
                <div className="benefits-list">
                  <div className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <span>Excellent circulation</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <span>Easy breathing</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <span>High energy levels</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✅</span>
                    <span>Reduced disease risk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="impact-stats">
          <div className="stats-header">
            <h3>The Numbers Don't Lie</h3>
            <p>Real improvements you can expect</p>
          </div>
          
          <div className="stats-grid">
            <div className="impact-stat">
              <div className="stat-visual">
                <div className="stat-icon">❤️</div>
                <div className="stat-circle">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none"/>
                    <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="none" 
                            strokeDasharray="251" strokeDashoffset="50" transform="rotate(-90 50 50)"/>
                  </svg>
                  <span className="stat-percentage">20%</span>
                </div>
              </div>
              <div className="stat-content">
                <h4>Heart Health</h4>
                <p>Reduced risk of heart disease</p>
              </div>
            </div>
            
            <div className="impact-stat">
              <div className="stat-visual">
                <div className="stat-icon">🫁</div>
                <div className="stat-circle">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none"/>
                    <circle cx="50" cy="50" r="40" stroke="#059669" strokeWidth="8" fill="none" 
                            strokeDasharray="251" strokeDashoffset="75" transform="rotate(-90 50 50)"/>
                  </svg>
                  <span className="stat-percentage">30%</span>
                </div>
              </div>
              <div className="stat-content">
                <h4>Lung Function</h4>
                <p>Improved breathing capacity</p>
              </div>
            </div>
            
            <div className="impact-stat">
              <div className="stat-visual">
                <div className="stat-icon">⚡</div>
                <div className="stat-circle">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none"/>
                    <circle cx="50" cy="50" r="40" stroke="#047857" strokeWidth="8" fill="none" 
                            strokeDasharray="251" strokeDashoffset="125" transform="rotate(-90 50 50)"/>
                  </svg>
                  <span className="stat-percentage">50%</span>
                </div>
              </div>
              <div className="stat-content">
                <h4>Energy Boost</h4>
                <p>Dramatically increased energy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <div className="cta-background">
              <div className="cta-pattern"></div>
            </div>
            
            <div className="cta-content">
              <div className="cta-header">
                <h3>Ready to Transform Your Life?</h3>
                <p>Join thousands of people who have already started their journey to a healthier, smoke-free life</p>
              </div>
              
              <div className="cta-actions">
                <button className="cta-primary">
                  <span className="btn-content">
                    <span className="btn-text">Start Your Journey</span>
                    <span className="btn-icon">🚀</span>
                  </span>
                  <div className="btn-glow"></div>
                </button>
                
                <button className="cta-secondary">
                  <span className="btn-content">
                    <span className="btn-text">Learn More</span>
                    <span className="btn-icon">ℹ️</span>
                  </span>
                </button>
              </div>
              
              <div className="cta-stats">
                <div className="stat-item">
                  <span className="stat-number">10,000+</span>
                  <span className="stat-label">People Helped</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
            
            <div className="cta-visual">
              <div className="floating-icons">
                <div className="floating-icon icon-1">🫁</div>
                <div className="floating-icon icon-2">❤️</div>
                <div className="floating-icon icon-3">⚡</div>
                <div className="floating-icon icon-4">🌟</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmokeEffects;
