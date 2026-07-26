import React from 'react';
import { Link } from 'react-router-dom';

export const Mobile = () => {
  return (
    <main className="section-space" style={{ paddingTop: '10rem' }}>
      <div className="container">
        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 5rem auto' }}>
          <span className="glass-pill" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <i className="ph ph-device-mobile" style={{ color: 'var(--glow-base)' }} />
            Ultra-Pocket Local Engine
          </span>
          <h1 className="hero-title text-gradient" style={{ fontSize: '4rem' }}>Orildo Mobile Engine</h1>
          <p className="hero-tagline" style={{ maxWidth: '750px', margin: '0 auto' }}>
            Pocket-sized local computation for iOS and Android. Zero tracking, hardware secure enclave authentication, and instant peer-to-peer sync.
          </p>
        </div>

        {/* Feature Visual Showcase (Mobile Image Hero) */}
        <div style={{ position: 'relative', marginBottom: '6rem', textAlign: 'center' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '32px', display: 'inline-block', maxWidth: '700px', boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}>
            <img src="/assets/images/phone-nave.jpg" alt="Orildo Mobile Engine Interface" style={{ width: '100%', borderRadius: '24px', display: 'block', objectFit: 'cover', maxHeight: '550px' }} />
          </div>
        </div>

        {/* Mobile Capabilities Grid */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-subtitle">Mobile Infrastructure</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-primary)' }}>Privacy in Your Pocket</h2>
        </div>

        <div className="grid-3" style={{ marginBottom: '6rem' }}>
          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div className="product-icon"><i className="ph ph-fingerprint" /></div>
            <h3 className="product-title">Secure Enclave Vault</h3>
            <p className="product-desc">Direct hardware integration with Apple Secure Enclave & Android KeyStore for biometric hardware key decryption.</p>
            <div className="product-tags">
              <span className="product-tag">FaceID / TouchID</span>
              <span className="product-tag">Hardware Key</span>
            </div>
          </div>

          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div className="product-icon"><i className="ph ph-lightning" /></div>
            <h3 className="product-title">Sub-10ms UI Responsiveness</h3>
            <p className="product-desc">All UI views render from local SQLite storage without waiting for remote server API roundtrips.</p>
            <div className="product-tags">
              <span className="product-tag">Zero Latency</span>
              <span className="product-tag">Offline First</span>
            </div>
          </div>

          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div className="product-icon"><i className="ph ph-arrows-clockwise" /></div>
            <h3 className="product-title">Peer-to-Peer Encrypted Sync</h3>
            <p className="product-desc">Sync seamlessly with your desktop workstation via local Wi-Fi or Bluetooth without routing through third-party servers.</p>
            <div className="product-tags">
              <span className="product-tag">P2P Relay</span>
              <span className="product-tag">Local Network</span>
            </div>
          </div>
        </div>

        {/* Interactive Platform Feature List */}
        <div className="glass-panel" style={{ padding: '3.5rem', borderRadius: '24px', marginBottom: '6rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-subtitle">iOS & Android Compatible</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Zero Analytics. Zero Ads.</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Most mobile apps harvest location, contacts, and telemetry data in the background. Orildo Mobile operates as a closed local sandbox. We don't track your location, we don't log your keystrokes, and we don't serve advertisements.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <i className="ph ph-check-circle" style={{ color: 'var(--glow-emerald)', fontSize: '1.2rem' }} />
                  <span>Apple TestFlight & Android APK Build Support</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <i className="ph ph-check-circle" style={{ color: 'var(--glow-emerald)', fontSize: '1.2rem' }} />
                  <span>Minimal battery drain with background CPU throttling</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <i className="ph ph-check-circle" style={{ color: 'var(--glow-emerald)', fontSize: '1.2rem' }} />
                  <span>Air-gapped operation support for high-security environments</span>
                </li>
              </ul>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>0.00%</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem' }}>Data Exported to Remote Cloud Servers</div>
              <Link to="/contact" className="btn-magnetic" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Join Mobile Beta Program</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
