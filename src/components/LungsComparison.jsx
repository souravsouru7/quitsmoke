import React, { useRef, useState, useEffect } from "react";
import './LungsComparison.css';

const LungsComparison = () => {
  const containerRef = useRef(null);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [percentage, setPercentage] = useState(50);
  const [isLoaded, setIsLoaded] = useState(false);

  // Set initial position on mount
  useEffect(() => {
    setSliderPosition(50);
    // Add a small delay for smooth initial animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  // Update slider and clip-paths
  const setSliderPosition = (percent) => {
    const clamped = Math.max(0, Math.min(100, percent));
    setPercentage(clamped);
    if (beforeRef.current && afterRef.current && sliderRef.current) {
      beforeRef.current.style.clipPath = `inset(0 0 0 ${100 - clamped}%)`;
      afterRef.current.style.clipPath = `inset(0 ${clamped}% 0 0)`;
      sliderRef.current.style.left = `${clamped}%`;
    }
  };

  // Handle drag
  const onDrag = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  // Mouse/touch events
  useEffect(() => {
    if (!isDragging) return;
    const handleMove = (e) => {
      if (e.touches) {
        onDrag(e.touches[0].clientX);
      } else {
        onDrag(e.clientX);
      }
    };
    const stopDrag = () => setIsDragging(false);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchend', stopDrag);
    };
  }, [isDragging]);

  // Accessibility: keyboard support
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(percentage - 2);
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(percentage + 2);
    }
  };

  return (
    <section className={`lungs-comparison ${isLoaded ? 'loaded' : ''}`}>
      <div className="comparison-container">
        <div className="comparison-header">
          <h2 className="comparison-title">
            <span className="title-accent">See</span> The Difference
          </h2>
          <p className="comparison-subtitle">
            Drag the slider to compare healthy lungs with those damaged by smoking
          </p>
        </div>

        <div className="comparison-slider-container" ref={containerRef}>
          <div className="image-wrapper">
            <div className="before-image-container" ref={beforeRef} style={{background: 'transparent'}}>
              <img 
                src="/red-lungs-with-white-background-word-heart-it.png" 
                alt="Healthy lungs before smoking"
                className="comparison-image" 
                draggable={false} 
              />
              <div className="image-label before-label">Before Smoking</div>
            </div>
            <div className="after-image-container" ref={afterRef} style={{background: 'transparent'}}>
              <img 
                src="/closeup-human-lungs-damaged-by-smoking-cigarettes-smoke_146671-118220-removebg-preview (1).png" 
                alt="Damaged lungs after smoking"
                className="comparison-image" 
                draggable={false} 
              />
              <div className="image-label after-label">After Smoking</div>
            </div>
            <div
              className="slider-handle"
              ref={sliderRef}
              tabIndex={0}
              role="slider"
              aria-valuenow={percentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Lungs comparison slider"
              onMouseDown={e => { e.preventDefault(); setIsDragging(true); }}
              onTouchStart={e => { e.preventDefault(); setIsDragging(true); }}
              onKeyDown={handleKeyDown}
              style={{ left: `${percentage}%` }}
            >
              <div className="slider-line"></div>
              <div className="slider-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3m8-18h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3m-4-4l4-4-4-4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="comparison-info">
          <div className="info-card before-info">
            <h3 className="info-title">Healthy Lungs</h3>
            <ul className="info-list">
              <li>Pink, elastic tissue</li>
              <li>Clear airways</li>
              <li>Optimal oxygen exchange</li>
              <li>Strong immune defense</li>
            </ul>
          </div>
          
          <div className="info-card after-info">
            <h3 className="info-title">Damaged Lungs</h3>
            <ul className="info-list">
              <li>Blackened, stiff tissue</li>
              <li>Blocked airways</li>
              <li>Reduced oxygen capacity</li>
              <li>Weakened immune system</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LungsComparison;
