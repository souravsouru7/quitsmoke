import React, { useMemo, useState, useEffect, useRef } from 'react';

const SmokeEffects = () => {
  const items = useMemo(() => ([
    {
      id: 'day2',
      title: '2 Days',
      note: 'First wins',
      image: '/1.png',
      points: ['Oxygen levels rise', 'Blood pressure normalizes', 'Taste and smell improve']
    },
    {
      id: 'week12',
      title: '12 Weeks',
      note: 'Heart healing',
      image: '/2.jpg',
      points: ['Lung function up to 30%', 'Better circulation', 'Exercise feels easier']
    },
    {
      id: 'month9',
      title: '9 Months',
      note: 'Lung recovery',
      image: '/3.png',
      points: ['Less coughing', 'Easier breathing', 'Higher energy']
    }
  ]), []);

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [containerSize, setContainerSize] = useState(280);
  const intervalRef = useRef(null);
  const touchStartXRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      const isSmall = typeof window !== 'undefined' && window.innerWidth < 768;
      setContainerSize(isSmall ? 240 : 320);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [isPaused, items.length]);

  const orbitGeometry = useMemo(() => {
    const center = containerSize / 2;
    const radius = Math.max(70, center - 30); // padding from edge
    return { center, radius };
  }, [containerSize]);

  const orbitPoints = useMemo(() => {
    const { center, radius } = orbitGeometry;
    return items.map((_, index) => {
      const angle = (index / items.length) * 2 * Math.PI - Math.PI / 2; // start at top
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      return { x, y };
    });
  }, [items, orbitGeometry]);

  const progressDash = useMemo(() => {
    const circumference = 2 * Math.PI * orbitGeometry.radius;
    const step = circumference / items.length;
    const length = step * (active + 1) - 8; // slight gap
    return `${Math.max(0, length)} ${Math.max(0, circumference - length)}`;
  }, [active, items, orbitGeometry]);

  const progressDot = useMemo(() => {
    const { center, radius } = orbitGeometry;
    const angle = ((active + 1) / items.length) * 2 * Math.PI - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y };
  }, [active, items.length, orbitGeometry]);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-900">Your Quit Journey (Orbit)</h2>
          <p className="mt-2 text-purple-700">Tap milestones around the circle to explore.</p>
      </div>

        <div
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={(e) => { touchStartXRef.current = e.touches[0].clientX; setIsPaused(true); }}
          onTouchEnd={(e) => {
            const endX = e.changedTouches[0].clientX;
            const startX = touchStartXRef.current;
            if (startX != null) {
              const dx = endX - startX;
              if (Math.abs(dx) > 40) {
                setActive((prev) => (dx < 0 ? (prev + 1) % items.length : (prev - 1 + items.length) % items.length));
              }
            }
            setIsPaused(false);
          }}
        >
          {/* Radial Orbit */}
          <div className="flex items-center justify-center">
            <div
              className="relative"
              style={{ width: containerSize, height: containerSize }}
              role="tablist"
              aria-label="Quit milestones"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') setActive((v) => (v + 1) % items.length);
                if (e.key === 'ArrowLeft') setActive((v) => (v - 1 + items.length) % items.length);
              }}
            >
              <svg width={containerSize} height={containerSize} className="block">
                {/* Base ring */}
                <defs>
                  <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E9D5FF" />
                    <stop offset="100%" stopColor="#DDD6FE" />
                  </linearGradient>
                </defs>
                <circle cx={orbitGeometry.center} cy={orbitGeometry.center} r={orbitGeometry.radius} fill="none" stroke="url(#orbitGradient)" strokeWidth={10} />
                {/* Progress arc */}
                <circle
                  cx={orbitGeometry.center}
                  cy={orbitGeometry.center}
                  r={orbitGeometry.radius}
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth={10}
                  strokeLinecap="round"
                  strokeDasharray={progressDash}
                  transform={`rotate(-90 ${orbitGeometry.center} ${orbitGeometry.center})`}
                />
              </svg>

              {/* Markers */}
              {orbitPoints.map((pos, i) => (
                <button
                  key={items[i].id}
                  onClick={() => setActive(i)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                    i === active
                      ? 'bg-purple-700 text-white border-purple-700 shadow-lg'
                      : 'bg-white text-purple-700 border-purple-300'
                  }`}
                  style={{ left: pos.x, top: pos.y, width: 44, height: 44 }}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={items[i].title}
                >
                  <span className="text-sm font-bold">{i + 1}</span>
                </button>
              ))}

              {/* Progress dot */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-purple-700 shadow"
                style={{ left: progressDot.x, top: progressDot.y }}
                aria-hidden
              />

              {/* Center label */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-xs font-semibold text-purple-700">{items[active].note}</div>
                <div className="text-xl md:text-2xl font-bold text-purple-900">{items[active].title}</div>
            </div>
          </div>
        </div>

          {/* Active details */}
          <div>
            <div className="rounded-2xl border border-purple-200 bg-white p-6">
              <img src={items[active].image} alt={items[active].title} loading="lazy" className="w-full h-48 md:h-60 object-contain rounded-xl bg-purple-50 shadow-sm" />
              <ul className="mt-4 space-y-2 text-purple-900 text-sm">
                {items[active].points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
        </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {items.map((it, i) => (
                <button
                  key={it.id}
                  onClick={() => setActive(i)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold ring-1 transition-colors ${
                    i === active
                      ? 'bg-purple-700 text-white ring-purple-700'
                      : 'bg-white text-purple-800 ring-purple-300'
                  }`}
                >
                  {it.title}
                </button>
              ))}
        </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmokeEffects;
