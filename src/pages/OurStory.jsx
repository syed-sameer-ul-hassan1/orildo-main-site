import React from 'react';
import { Link } from 'react-router-dom';

export const OurStory = () => {
  return (
    <main className="section-space" style={{ paddingTop: '10rem' }}>
      <div className="container">
        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 5rem auto' }}>
          <span className="glass-pill" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <i className="ph ph-buildings" style={{ color: 'var(--glow-base)' }} />
            The Genesis
          </span>
          <h1 className="hero-title text-gradient" style={{ fontSize: '4rem' }}>Engineering the Future of Privacy.</h1>
          <p className="hero-tagline" style={{ maxWidth: '750px', margin: '0 auto' }}>
            We built Orildo because we refused to accept a world where user data is the product. We are bringing computation back to where it belongs: your local physical hardware.
          </p>
        </div>

        {/* The Origin (2 Column Layout) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '6rem', alignItems: 'center' }}>
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              The Motivation
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
              For over a decade, the software industry pushed a singular narrative: everything belongs in the cloud. We were promised convenience, but the hidden cost was astronomical. We traded our privacy, our data sovereignty, and our performance for the illusion of seamlessness.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              Corporate surveillance became the default business model. Network latency became an accepted friction. We looked at this landscape and decided it was fundamentally broken. Orildo was founded to engineer a different future—a future where software is impossibly fast and uncompromisingly private.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Ambient Glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />
            <img src="/assets/images/laptop-nav.webp" alt="Orildo Workspace" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)', position: 'relative', zIndex: 1 }} />
          </div>
        </div>

        {/* Core Values Grid */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-primary)' }}>Our Core Principles</h2>
        </div>

        <div className="grid-3" style={{ marginBottom: '6rem' }}>
          {/* Zero Compromise Security */}
          <div className="glass-panel spatial-card" style={{ padding: '3rem' }}>
            <div className="product-icon"><i className="ph ph-shield-check" style={{ color: 'var(--glow-emerald)' }} /></div>
            <h3 className="product-title">Zero Compromise Security</h3>
            <p className="product-desc">Built with military-grade AES-256 encryption. Our architecture guarantees that even we cannot access your data under any circumstance.</p>
          </div>

          {/* Unmatched Velocity */}
          <div className="glass-panel spatial-card" style={{ padding: '3rem' }}>
            <div className="product-icon"><i className="ph ph-lightning" /></div>
            <h3 className="product-title">Unmatched Velocity</h3>
            <p className="product-desc">By eliminating HTTP roundtrips and running entirely on bare metal, Orildo delivers sub-millisecond response times that cloud apps simply cannot match.</p>
          </div>

          {/* Absolute Sovereignty */}
          <div className="glass-panel spatial-card" style={{ padding: '3rem' }}>
            <div className="product-icon"><i className="ph ph-crown" /></div>
            <h3 className="product-title">Absolute Sovereignty</h3>
            <p className="product-desc">Your digital workspace should belong exclusively to you. Local-first architecture means you retain complete ownership over your silicon and your data.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05), transparent 70%)' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
            Join the Mission
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto', position: 'relative', zIndex: 1 }}>
            We are actively looking for elite engineers and visionary clients who share our commitment to privacy and performance.
          </p>
          <Link to="/contact" className="btn-magnetic" style={{ position: 'relative', zIndex: 1 }}>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
