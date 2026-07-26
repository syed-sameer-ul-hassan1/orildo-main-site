import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSound } from '../context/SoundContext';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { muted, toggleMute } = useSound();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/' || location.pathname === '/index.html';

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setScrolled(window.scrollY > 40);
      } else {
        setScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, location.pathname]);

  const handleHashClick = (e, hash) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (!isHome) {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isScrolledHeader = !isHome || scrolled;

  return (
    <header className={`site-header ${isScrolledHeader ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <img src="/assets/icons/name-logo.svg" alt="Orildo Logo" className="brand-logo-img" />
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          {isHome ? (
            <>
              <li>
                <a href="#about" onClick={(e) => handleHashClick(e, '#about')} className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#philosophy" onClick={(e) => handleHashClick(e, '#philosophy')} className="nav-link">
                  Philosophy
                </a>
              </li>
              <li className="nav-item-dropdown">
                <span className="nav-link no-underline">Products</span>
                <div className="nav-mega-menu">
                  <div className="mega-menu-grid">
                    <Link to="/mobile" className="mega-card-large">
                      <img src="/assets/images/phone-nave.jpg" alt="Mobile Engine" className="mega-card-bg" />
                      <div className="mega-card-overlay">
                        <h4>Mobile Engine</h4>
                        <p>Zero-tracking local DB.</p>
                      </div>
                    </Link>
                    <Link to="/desktop" className="mega-card-large">
                      <img src="/assets/images/laptop-nav.webp" alt="Desktop OS" className="mega-card-bg" />
                      <div className="mega-card-overlay">
                        <h4>Desktop OS</h4>
                        <p>High-performance native app.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleHashClick(e, '#process')} className="nav-link">
                  Process
                </a>
              </li>
              <li>
                <NavLink to="/our-story" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-story" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink to="/desktop" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Desktop
                </NavLink>
              </li>
              <li>
                <NavLink to="/mobile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Mobile
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Header Control Dock */}
        <div className="header-control-dock">
          {/* Sound FX Toggle */}
          <button
            className={`header-control-btn ${muted ? 'is-muted' : 'is-active'}`}
            onClick={toggleMute}
            title={muted ? 'Unmute Sound FX' : 'Mute Sound FX'}
            aria-label="Toggle Sound FX"
          >
            <i className={`ph ${muted ? 'ph-speaker-slash' : 'ph-speaker-high'}`} />
          </button>

          {/* Theme Mode Toggle */}
          <button
            className="header-control-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme Mode"
          >
            <i className={`ph ${theme === 'dark' ? 'ph-sun' : 'ph-moon'}`} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle Mobile Navigation"
          >
            <i className={`ph ${mobileMenuOpen ? 'ph-x' : 'ph-list'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          {isHome ? (
            <>
              <li><Link to="/our-story" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Our Story</Link></li>
              <li><Link to="/desktop" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Desktop</Link></li>
              <li><Link to="/mobile" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Mobile</Link></li>
              <li><Link to="/security-audit" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Security Audit</Link></li>
              <li><Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/our-story" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Our Story</Link></li>
              <li><Link to="/desktop" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Desktop</Link></li>
              <li><Link to="/mobile" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Mobile</Link></li>
              <li><Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};
