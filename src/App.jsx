import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { ThreeCanvas } from './components/ThreeCanvas';
import { CustomCursor } from './components/CustomCursor';
import { PageTransition } from './components/PageTransition';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { AssetPreloader } from './components/AssetPreloader';

import { Home } from './pages/Home';
import { OurStory } from './pages/OurStory';
import { Desktop } from './pages/Desktop';
import { Mobile } from './pages/Mobile';
import { Contact } from './pages/Contact';
import { SecurityAudit } from './pages/SecurityAudit';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

const ScrollProgressLine = () => {
  useEffect(() => {
    const handleScroll = () => {
      const line = document.getElementById('scroll-progress-line');
      if (!line) return;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      line.style.width = `${Math.max(0, Math.min(100, progress)).toFixed(2)}%`;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="scroll-progress-line" />;
};

export const App = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <Router>
          <div className="app-container">
            {/* Background Asset & Font Preloader */}
            <AssetPreloader />

            {/* Animated Logo Splash Screen */}
            <SplashScreen />

            {/* Top Scroll Progress Line Indicator */}
            <ScrollProgressLine />

            {/* Custom 3D & Cursor Overlay Components */}
            <CustomCursor />
            <ThreeCanvas />

            {/* Header Navigation */}
            <Header />

            {/* Router Viewport */}
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index.html" element={<Home />} />

                <Route path="/our-story" element={<OurStory />} />
                <Route path="/pages/our_story.html" element={<OurStory />} />

                <Route path="/desktop" element={<Desktop />} />
                <Route path="/pages/desktop.html" element={<Desktop />} />

                <Route path="/mobile" element={<Mobile />} />
                <Route path="/pages/mobile.html" element={<Mobile />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="/pages/contact.html" element={<Contact />} />

                <Route path="/security-audit" element={<SecurityAudit />} />
                <Route path="/pages/security_audit.html" element={<SecurityAudit />} />

                <Route path="/privacy" element={<Privacy />} />
                <Route path="/pages/privacy.html" element={<Privacy />} />

                <Route path="/terms" element={<Terms />} />
                <Route path="/pages/terms.html" element={<Terms />} />
              </Routes>
            </PageTransition>

            {/* On-Device Neural AI Chatbot Assistant */}
            <ChatBot />

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;
