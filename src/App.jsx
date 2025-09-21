
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import SmokeEffects from './components/SmokeEffects';
import HowItWorks from './components/HowItWorks';
import WhyQuitEasy from './components/WhyQuitEasy';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import QuitSmokeForm from './components/QuitSmokeForm';
import InstallPrompt from './components/InstallPrompt';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [minDelayDone, setMinDelayDone] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const onWindowLoad = () => setHasLoaded(true);

    if (document.readyState === 'complete') {
      setHasLoaded(true);
    } else {
      window.addEventListener('load', onWindowLoad);
    }

    const timeoutId = setTimeout(() => setMinDelayDone(true), 3000);

    // Register service worker for PWA functionality
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    return () => {
      window.removeEventListener('load', onWindowLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (hasLoaded && minDelayDone) {
      setIsLoading(false);
    }
  }, [hasLoaded, minDelayDone]);

  // Auto-show form after 3 seconds when app loads
  useEffect(() => {
    if (!isLoading) {
      const formTimer = setTimeout(() => {
        setShowForm(true);
      }, 3000);
      
      return () => clearTimeout(formTimer);
    }
  }, [isLoading]);

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#ffffff'
      }}>
        <img src="/logo.png" alt="Loading" style={{ height: 190, width: 'auto' }} />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Main website route */}
        <Route path="/" element={
          <>
            <Hero onShowForm={() => setShowForm(true)} />
            <HowItWorks onShowForm={() => setShowForm(true)} />
            <SmokeEffects onShowForm={() => setShowForm(true)} />
            <WhyQuitEasy onShowForm={() => setShowForm(true)} />
            <QuitSmokeForm isOpen={showForm} onClose={handleCloseForm} />
            <InstallPrompt />
          </>
        } />
        
        {/* Admin routes */}
        <Route path="/admin" element={
          isAdminLoggedIn ? (
            <AdminDashboard onLogout={handleAdminLogout} />
          ) : (
            <AdminLogin onLogin={handleAdminLogin} />
          )
        } />
        

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
