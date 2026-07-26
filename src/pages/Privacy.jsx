import React from 'react';

export const Privacy = () => {
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
            <i className="ph ph-shield-check" style={{ color: 'var(--glow-emerald)' }} />
            Privacy First Constitution
          </span>
          <h1 className="hero-title text-gradient" style={{ fontSize: '3.5rem' }}>Privacy Policy</h1>
          <p className="hero-tagline" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Effective Date: July 2026. Our business model is software engineering, not data harvesting.
          </p>
        </div>

        {/* Legal Layout Grid */}
        <div className="legal-layout">
          {/* Sticky Table of Contents */}
          <aside>
            <div className="sticky-toc">
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Navigation</h4>
              <a href="#sovereignty" onClick={(e) => handleAnchorClick(e, 'sovereignty')} className="toc-link">1. Data Sovereignty</a>
              <a href="#telemetry" onClick={(e) => handleAnchorClick(e, 'telemetry')} className="toc-link">2. Zero Telemetry & Tracking</a>
              <a href="#keys" onClick={(e) => handleAnchorClick(e, 'keys')} className="toc-link">3. Cryptographic Key Ownership</a>
              <a href="#local-storage" onClick={(e) => handleAnchorClick(e, 'local-storage')} className="toc-link">4. Local Storage Architecture</a>
              <a href="#founder" onClick={(e) => handleAnchorClick(e, 'founder')} className="toc-link">5. Founder Statement</a>
            </div>
          </aside>

          {/* Main Text Body */}
          <article className="glass-panel" style={{ padding: '3.5rem', borderRadius: '24px', lineHeight: 1.8, color: 'var(--text-body)' }}>
            <section id="sovereignty" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>1. Data Sovereignty Guarantee</h2>
              <p>
                At Orildo Technology, privacy is not a feature toggled in a settings menu—it is the foundational constraint of our software architecture. We adhere to the local-first paradigm: all user data generated within Orildo Desktop and Orildo Mobile applications remains physically stored on your silicon SSD or mobile device.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We do not operate remote databases that collect, index, or parse your files. Even if legally subpoenaed, Orildo Technology possesses zero cryptographic keys or raw data to hand over to third parties.
              </p>
            </section>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', marginBottom: '3rem' }} />

            <section id="telemetry" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>2. Zero Telemetry & Third-Party Trackers</h2>
              <p>
                Our applications contain zero analytics SDKs, zero advertising trackers, and zero third-party telemetry scripts. We do not track your IP address, browser type, device identifiers, or usage frequency.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>No Google Analytics, Mixpanel, or Segment integration.</li>
                <li>No background crash report transmissions containing personal payload snippets.</li>
                <li>No cookie storage on our marketing website or applications.</li>
              </ul>
            </section>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', marginBottom: '3rem' }} />

            <section id="keys" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>3. Cryptographic Key Ownership</h2>
              <p>
                All encryption keys (AES-256-GCM / XChaCha20-Poly1305) are derived locally on your device using PBKDF2 or Argon2id key derivation functions. Your master passphrase never touches any network socket.
              </p>
              <p style={{ marginTop: '1rem' }}>
                You retain 100% cryptographic sovereignty. As a consequence, if you lose your master key or passphrase, Orildo Technology cannot reset or recover your data for you.
              </p>
            </section>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', marginBottom: '3rem' }} />

            <section id="local-storage" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>4. Local Storage Architecture</h2>
              <p>
                All database schemas are instantiated as local SQLite or native LMDB engines directly in your user home directory. When optional peer-to-peer sync is enabled between your desktop and mobile devices, communication is end-to-end encrypted over local Wi-Fi or Bluetooth protocols.
              </p>
            </section>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', marginBottom: '3rem' }} />

            <section id="founder">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>5. Founder Statement</h2>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '2rem', borderRadius: '16px', fontStyle: 'italic' }}>
                "We built Orildo because we refused to accept a digital landscape where human beings are reduced to data points. Privacy is the ultimate luxury, and we guarantee it by engineering software that cannot spy on you."
              </div>
              <div style={{ marginTop: '1rem', textAlign: 'right', fontWeight: 600, color: 'var(--text-primary)' }}>
                — Syed Sameer Ul Hassan<br />
                <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--text-muted)' }}>Founder & CEO, Orildo Technology</span>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
};
