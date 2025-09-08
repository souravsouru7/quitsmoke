import React, { useState } from 'react';

const QuitSmokeForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/form/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
        }, 2000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-5">
        <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-2xl">
          <div className="text-6xl text-emerald-500 mb-6 animate-bounce">✓</div>
          <h2 className="text-3xl font-bold text-emerald-500 mb-4">Thank You!</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We've received your request to quit smoking. We'll contact you soon to help you on your journey!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-5" onClick={onClose}>
      <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 w-11 h-11 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-800 hover:scale-110 transition-all duration-300 shadow-lg z-10" 
          onClick={onClose} 
          aria-label="Close form"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Header */}
        <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-blue-600 p-12 text-center text-white relative overflow-hidden rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto mb-6 text-white/90 animate-bounce">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-shadow-lg">Ready to Quit Smoking?</h2>
            <p className="text-xl opacity-95 font-medium">
              Fill out this simple form and we'll contact you to help you quit smoking
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* First Name */}
            <div className="md:col-span-1">
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
                placeholder="Enter your first name"
                autoComplete="given-name"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>
            
            {/* Last Name */}
            <div className="md:col-span-1">
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
                placeholder="Enter your last name"
                autoComplete="family-name"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>
            
            {/* Email */}
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="Enter your email address"
                autoComplete="email"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>
            
            {/* Phone */}
            <div className="md:col-span-1">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number (optional)"
                autoComplete="tel"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>
            
            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us a bit about your smoking situation or any specific concerns..."
                rows="4"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm resize-vertical min-h-[120px]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              disabled={loading} 
              className="w-full max-w-md px-8 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-4 group"
              aria-label={loading ? 'Submitting form...' : 'Submit request to quit smoking'}
            >
              {loading ? (
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-lg">Submitting...</span>
                </div>
              ) : (
                <>
                  <span className="text-lg">Submit Request</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12,5 19,12 12,19"></polyline>
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* Privacy Note */}
          <div className="mt-8 text-center">
            <p className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Your information is secure and will only be used to help you quit smoking.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuitSmokeForm;
