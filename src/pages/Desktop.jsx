import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSound } from '../context/SoundContext';

export const Desktop = () => {
  const [requested, setRequested] = useState(false);
  const { playSuccess } = useSound();

  const handleRequest = () => {
    setRequested(true);
    playSuccess();
  };

  return (
    <main className="section-space" style={{ paddingTop: '10rem' }}>
      <div className="container">
        {/* Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 5rem auto' }}>
          <span className="glass-pill" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <i className="ph ph-desktop" style={{ color: 'var(--glow-base)' }} />
            Native Bare-Metal Workstation
          </span>
          <h1 className="hero-title text-gradient" style={{ fontSize: '4rem' }}>Orildo Desktop OS</h1>
          <p className="hero-tagline" style={{ maxWidth: '750px', margin: '0 auto' }}>
            High-throughput workstation operating system engineered exclusively for local execution. Sub-millisecond UI latency with zero web wrappers.
          </p>
        </div>

        {/* Feature Visual Showcase (Laptop Image Hero) */}
        <div style={{ position: 'relative', marginBottom: '6rem' }}>
          <div className="glass-panel" style={{ padding: '1rem', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}>
            <img src="/assets/images/laptop-nav.webp" alt="Orildo Desktop Application" style={{ width: '100%', borderRadius: '24px', display: 'block', objectFit: 'cover', maxHeight: '600px' }} />
          </div>
        </div>

        {/* Tech Architecture Grid */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-subtitle">System Architecture</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-primary)' }}>Engineered for Maximum Speed</h2>
        </div>

        <div className="grid-3" style={{ marginBottom: '6rem' }}>
          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div className="product-icon"><i className="ph ph-cpu" /></div>
            <h3 className="product-title">Rust Core Engine</h3>
            <p className="product-desc">Built on memory-safe Rust native binaries that execute direct to CPU instructions without garbage collection overhead.</p>
            <div className="product-tags">
              <span className="product-tag">Zero GC</span>
              <span className="product-tag">Sub-1ms latency</span>
            </div>
          </div>

          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div className="product-icon"><i className="ph ph-database" /></div>
            <h3 className="product-title">Local SQLite Vault</h3>
            <p className="product-desc">Embedded zero-knowledge encrypted database stored physically on your NVMe storage device. 100% offline access.</p>
            <div className="product-tags">
              <span className="product-tag">AES-256</span>
              <span className="product-tag">Offline-First</span>
            </div>
          </div>

          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div className="product-icon"><i className="ph ph-intersect" /></div>
            <h3 className="product-title">120 FPS GPU Render Pipe</h3>
            <p className="product-desc">Hardware accelerated 3D glass layout engine utilizing Metal and Vulkan GPU acceleration for buttery smooth 120 FPS UI.</p>
            <div className="product-tags">
              <span className="product-tag">Metal/Vulkan</span>
              <span className="product-tag">120 FPS</span>
            </div>
          </div>
        </div>

        {/* Specs Comparison Matrix */}
        <div className="glass-panel" style={{ padding: '3.5rem', borderRadius: '24px', marginBottom: '6rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '2rem', textAlign: 'center' }}>Technical Specifications</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Supported OS</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>macOS, Windows, Linux</div>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>RAM Footprint</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>&lt; 45 MB Idle</div>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Encryption Standard</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>AES-256-GCM / XChaCha20</div>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Network Dependency</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--glow-emerald)' }}>0% Required</div>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Experience Desktop Sovereignty</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Download native binaries for macOS, Windows, or Linux and take total control over your computing.
          </p>

          {!requested ? (
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-magnetic" onClick={handleRequest}>
                <span>Request Early Build Binary</span>
              </button>
              <Link to="/contact" className="btn-secondary-glass">
                <span>Contact Desktop Engineering</span>
              </Link>
            </div>
          ) : (
            <div style={{ background: 'rgba(52, 211, 153, 0.1)', border: '1px solid #34D399', padding: '1.5rem', borderRadius: '16px', maxWidth: '500px', margin: '0 auto', color: 'var(--text-primary)' }}>
              <i className="ph ph-check-circle" style={{ fontSize: '1.5rem', color: '#34D399', marginBottom: '0.5rem', display: 'block' }} />
              Binary Access Request Received! Check your email for checksum key verification.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
