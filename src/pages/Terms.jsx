import React from 'react';
import { Link } from 'react-router-dom';

export const Terms = () => {
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="section-space" style={{ paddingTop: '10rem' }}>
      <div className="container">
        {/* Document Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <span className="glass-pill" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <i className="ph ph-scales" style={{ color: 'var(--glow-base)' }} />
            Software Agreement
          </span>
          <h1 className="hero-title text-gradient" style={{ fontSize: '3.5rem' }}>Terms of Service</h1>
          <p className="hero-tagline" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Effective Date: July 2026. Standard governing terms for Orildo software products and native binaries.
          </p>
        </div>

        {/* Legal Layout Grid */}
        <div className="legal-layout">
          {/* Sticky Table of Contents */}
          <aside>
            <div className="sticky-toc">
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Sections</h4>
              <a href="#license" onClick={(e) => handleAnchorClick(e, 'license')} className="toc-link">1. Software License</a>
              <a href="#responsibility" onClick={(e) => handleAnchorClick(e, 'responsibility')} className="toc-link">2. Key Responsibility</a>
              <a href="#airgap" onClick={(e) => handleAnchorClick(e, 'airgap')} className="toc-link">3. Air-Gapped Operation</a>
              <a href="#liability" onClick={(e) => handleAnchorClick(e, 'liability')} className="toc-link">4. Limitation of Liability</a>
              <a href="#governance" onClick={(e) => handleAnchorClick(e, 'governance')} className="toc-link">5. Corporate Governance</a>
            </div>
          </aside>

          {/* Main Text Body */}
          <article className="glass-panel" style={{ padding: '3.5rem', borderRadius: '24px', lineHeight: 1.8, color: 'var(--text-body)' }}>
            <section id="license" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>1. Software License Grant</h2>
              <p>
                By downloading, compiling, or executing binaries provided by Orildo Technology, you are granted a non-exclusive, perpetual license to run the software on your personal or enterprise physical hardware.
              </p>
              <p style={{ marginTop: '1rem' }}>
                You own the physical binary execution on your machine. You may not reverse engineer, decompile, or tamper with security boundaries to inject malicious code into distributed releases.
              </p>
            </section>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', marginBottom: '3rem' }} />

            <section id="responsibility" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>2. Cryptographic Key Responsibility</h2>
              <p>
                Orildo Technology operates on a strict zero-knowledge model. You acknowledge that:
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Orildo Technology does not maintain backdoors or escrow keys.</li>
                <li>You are solely responsible for backing up your local seed phrases and hardware keys.</li>
                <li>Loss of your encryption passphrase results in permanent data unrecoverability.</li>
              </ul>
            </section>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', marginBottom: '3rem' }} />

            <section id="airgap" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>3. Air-Gapped Operation & Updates</h2>
              <p>
                All software products manufactured by Orildo are designed to run fully air-gapped without requiring an active internet connection. Software updates are released as cryptographically signed packages that you can manually verify before applying.
              </p>
            </section>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', marginBottom: '3rem' }} />

            <section id="liability" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>4. Limitation of Liability</h2>
              <p>
                Orildo software is provided "AS IS", without warranty of any kind, express or implied. In no event shall Orildo Technology or its engineers be liable for hardware failure, data loss caused by lost passphrases, or unauthorized access resulting from compromised physical devices.
              </p>
            </section>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', marginBottom: '3rem' }} />

            <section id="governance">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>5. Corporate Governance</h2>
              <p>
                Orildo Technology is an independent engineering software firm founded and led by <strong>Syed Sameer Ul Hassan</strong>. For any legal or governance inquiries, please reach out via our official encrypted contact desk at <Link to="/contact" style={{ color: 'var(--text-primary)' }}>Contact Engineering</Link>.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
};
