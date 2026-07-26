import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Mission with Asset Logo */}
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
              <img src="/assets/icons/name-logo.svg" alt="Orildo Logo" className="brand-logo-img" />
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '340px', marginBottom: '1.5rem' }}>
              Engineering local-first, zero-knowledge software products for human digital freedom.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--glow-emerald)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
              <span>All Systems Operational & Encrypted</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-display" style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1.25rem' }}>
              Ecosystem
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/mobile" className="nav-link">Mobile Apps</Link></li>
              <li><Link to="/desktop" className="nav-link">Desktop Apps</Link></li>
            </ul>
          </div>

          {/* Company & Story */}
          <div>
            <h4 className="font-display" style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1.25rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/our-story" className="nav-link">Our Story</Link></li>
              <li><Link to="/contact" className="nav-link">Contact Engineering</Link></li>
              <li><Link to="/privacy" className="nav-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="nav-link">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter Form (HTMX / React powered) */}
          <div>
            <h4 className="font-display" style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1.25rem' }}>
              Encrypted Dispatch
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Subscribe for zero-tracking release announcements.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter@email.com"
                  className="form-control"
                  style={{ borderRadius: '9999px', padding: '0.6rem 1rem' }}
                  required
                />
                <button type="submit" className="btn-magnetic" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                  <span>Join</span>
                </button>
              </form>
            ) : (
              <div id="subscribe-result" style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#10B981' }}>
                <i className="ph ph-check-circle" style={{ marginRight: '0.3rem' }} />
                Subscribed to Encrypted Dispatch!
              </div>
            )}
          </div>
        </div>

        {/* Footer Copyright & Credits */}
        <div className="footer-bottom">
          <div>
            © 2026 Orildo Technology. Founded & Led by Syed Sameer Ul Hassan. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy</Link>
            <Link to="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms</Link>
            <Link to="/security-audit" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security Audit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
