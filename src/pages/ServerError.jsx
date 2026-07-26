import React from 'react';
import { Link } from 'react-router-dom';

export const ServerError = () => {
  return (
    <main className="section-space" style={{ paddingTop: '10rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
        <div style={{
          fontSize: '7rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: '1rem',
          letterSpacing: '-0.04em'
        }}>
          500
        </div>

        <span className="glass-pill" style={{ marginBottom: '1.5rem', display: 'inline-flex', borderColor: 'rgba(239,68,68,0.3)' }}>
          <i className="ph ph-shield-warning" style={{ color: '#EF4444' }} />
          System Anomaly • Internal Error
        </span>

        <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Kernel Computation Interrupted
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          An unknown internal exception occurred during rendering. Our zero-knowledge fault recovery systems have isolated the process.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => window.location.reload()} className="btn-magnetic" style={{ border: 'none', cursor: 'pointer' }}>
            <span>Re-initialize Kernel (Reload)</span>
          </button>
          <Link to="/" className="btn-secondary-glass">
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
