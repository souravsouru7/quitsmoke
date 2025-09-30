import React from 'react';

const OwnerProfile = ({ onShowForm }) => {
  return (
    <section id="owner-profile" className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-white to-purple-50/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-100 rounded-full translate-x-16 -translate-y-16 blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-200 rounded-full -translate-x-24 translate-y-24 blur-sm"></div>
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="advisor-dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" className="text-purple-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#advisor-dot-grid)" />
          </svg>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-purple-200 bg-white/90 backdrop-blur-sm shadow-2xl p-5 sm:p-8">
            <div className="absolute -top-14 -right-14 w-40 h-40 rounded-full bg-purple-50" aria-hidden></div>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/newowner.jpg"
                  alt="Owner profile"
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-md ring-4 ring-purple-100"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-900 break-words">Allam Sai Divya</h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-sm font-semibold ring-1 ring-purple-200 break-words">
                    Stop Smoking Advisor
                  </span>
                </div>
                <p className="mt-2 text-purple-700">Bromley, London, United Kingdom</p>
                <p className="mt-3 text-purple-900 font-medium break-words">
                  Helping people quit smoking with proven behavioural support and practical tools.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['MSc Global Public Health & Policy', 'Stop Smoking Advisor', 'Public Health Practitioner'].map((b) => (
                    <span key={b} className="inline-flex items-center gap-2 rounded-full bg-white text-purple-800 ring-1 ring-purple-200 px-3 py-1 text-sm font-semibold break-words">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={onShowForm}
                className="col-span-1 sm:col-span-2 w-full px-6 py-4 min-h-[48px] bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-300/60"
              >
                Book free support
              </button>
              <a
                href="tel:07436859065"
                className="w-full px-6 py-4 min-h-[48px] text-center border-2 border-purple-600 text-purple-700 bg-white font-bold rounded-2xl hover:bg-purple-600 hover:text-white transition-all shadow-xl"
              >
                Call +44 7840 010020
              </a>
            </div>

        {/* Proof points */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: 'Experience', value: '3+ years' },
            { label: 'Certification', value: 'NCSCT Specialist' },
            { label: 'Approach', value: 'Evidence‑based & friendly' }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-purple-200 bg-white px-4 py-4 text-center shadow-sm">
              <div className="text-lg font-extrabold text-purple-900">{item.value}</div>
              <div className="text-xs font-semibold text-purple-700 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* How I help */}
        <div className="mt-6 rounded-2xl border border-purple-200 bg-white p-5">
          <h4 className="text-base sm:text-lg font-extrabold text-purple-900">How I help you quit</h4>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-purple-800 text-sm">
            <li className="flex items-start gap-2"><span className="mt-0.5 text-green-600">✓</span><span>Personalized quit plan tailored to your lifestyle and schedule</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 text-green-600">✓</span><span>Weekly Virtual Follow-ups</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 text-green-600">✓</span><span>Guidance on NRT,and triggers</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 text-green-600">✓</span><span>Support for stress, sleep and cravings</span></li>
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-purple-800">
          <a href="mailto:info@quiteasy.in" className="underline underline-offset-2 hover:text-purple-900 break-words">info@quiteasy.in</a>
          <span className="hidden sm:inline-block text-purple-300">|</span>
          <a
            href="https://www.instagram.com/quit_easy_?igsh=eHRhcGdiMWhza3Q0&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center text-purple-800 hover:text-purple-900"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
              {/* Instagram glyph */}
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
              <span className="hidden sm:inline-block text-purple-300">|</span>
              <span> NRT • Vapes • Referral pathways</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerProfile;


