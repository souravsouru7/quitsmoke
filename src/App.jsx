
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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [minDelayDone, setMinDelayDone] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const onWindowLoad = () => setHasLoaded(true);

    if (document.readyState === 'complete') {
      setHasLoaded(true);
    } else {
      window.addEventListener('load', onWindowLoad);
    }

    const timeoutId = setTimeout(() => setMinDelayDone(true), 3000);

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

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
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
            <Hero />
            <HowItWorks />
            <SmokeEffects />
            <WhyQuitEasy />
            <QuitSmokeForm />
           
            
            
           
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
