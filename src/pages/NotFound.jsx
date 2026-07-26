import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main className="section-space" style={{ paddingTop: '10rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
        <div style={{
          fontSize: '7rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #10B981 0%, #38BDF8 50%, #6366F1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: '1rem',
          letterSpacing: '-0.04em'
        }}>
          404
        </div>

        <span className="glass-pill" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
          <i className="ph ph-warning-octagon" style={{ color: '#F59E0B' }} />
          Signal Lost • Vector Out of Bounds
        </span>

        <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Physical Sector Not Found
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          The computational route you requested does not exist or has been relocated within the air-gapped network.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-magnetic">
            <span>Return to Main Station</span>
          </Link>
          <Link to="/contact" className="btn-secondary-glass">
            <span>Contact Engineering</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
