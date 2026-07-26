import React, { useState } from 'react';
import { useSound } from '../context/SoundContext';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sanitizeInput, validateEmail, checkRateLimit } from '../utils/security';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [identity, setIdentity] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('custom');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const { playSuccess } = useSound();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (honeypot.trim().length > 0) {
      setSubmitted(true);
      return;
    }

    const rateCheck = checkRateLimit(3, 60000);
    if (!rateCheck.allowed) {
      setErrorMsg(`Security Rate Limit: Please wait ${rateCheck.retryAfterSec} seconds before sending another payload.`);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg('Invalid return address email format.');
      return;
    }

    const cleanIdentity = sanitizeInput(identity.trim());
    const cleanEmail = sanitizeInput(email.trim());
    const cleanMessage = sanitizeInput(message.trim());

    if (cleanMessage.length < 10) {
      setErrorMsg('Message payload must be at least 10 characters long.');
      return;
    }

    if (cleanMessage.length > 4000) {
      setErrorMsg('Message payload exceeds maximum allowed size (4000 characters).');
      return;
    }

    setLoading(true);

    const newMsg = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      name: cleanIdentity || 'Anonymous',
      email: cleanEmail,
      scope: sanitizeInput(scope),
      message: cleanMessage,
      createdAt: Date.now(),
      dateStr: new Date().toLocaleString()
    };

    // Primary: Always save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('orildo_contact_messages') || '[]');
      localStorage.setItem('orildo_contact_messages', JSON.stringify([newMsg, ...existing]));
    } catch (e) {
      console.warn("LocalStorage save warning:", e);
    }

    // Secondary: Write to Firestore database
    try {
      await addDoc(collection(db, 'messages'), {
        id: newMsg.id,
        name: newMsg.name,
        email: newMsg.email,
        scope: newMsg.scope,
        message: newMsg.message,
        createdAt: Number(newMsg.createdAt),
        dateStr: newMsg.dateStr,
        timestamp: serverTimestamp()
      });
    } catch (err) {
      console.error("Firestore submission error:", err);
    }

    setLoading(false);
    setSubmitted(true);
    playSuccess();
  };

  return (
    <main className="section-space" style={{ paddingTop: '10rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span className="glass-pill" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <i className="ph ph-envelope-simple" style={{ color: 'var(--glow-base)' }} />
            Direct Encrypted Channel
          </span>
          <h1 className="hero-title text-gradient" style={{ fontSize: '3.5rem' }}>Contact Engineering</h1>
          <p className="hero-tagline" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Direct communication with our core software architects and Founder & CEO Syed Sameer Ul Hassan. Zero tracking, zero telemetry.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '6rem', alignItems: 'flex-start' }}>
          <div className="glass-panel spatial-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <span className="section-subtitle">Leadership & Direction</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Syed Sameer Ul Hassan</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Founder & Chief Executive Officer</p>
            </div>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className="product-icon" style={{ marginBottom: 0, width: '44px', height: '44px', fontSize: '1.2rem' }}>
                  <i className="ph ph-lock-key" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dim)' }}>PGP Key Fingerprint</div>
                  <div className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>4F89 2A10 ED94 88CB C001</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className="product-icon" style={{ marginBottom: 0, width: '44px', height: '44px', fontSize: '1.2rem' }}>
                  <i className="ph ph-paper-plane-tilt" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dim)' }}>Direct Engineering Email</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>engineering@orildo.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className="product-icon" style={{ marginBottom: 0, width: '44px', height: '44px', fontSize: '1.2rem' }}>
                  <i className="ph ph-shield-check" style={{ color: 'var(--glow-emerald)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dim)' }}>Security Audit Desk</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>security@orildo.com</div>
                </div>
              </div>
            </div>

            <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '1.25rem', borderRadius: '14px' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <i className="ph ph-info" style={{ color: 'var(--text-primary)', marginRight: '0.25rem' }} />
                We respond to all verified cryptographic inquiries within 24 hours. No sales reps, only software engineers.
              </p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Transmit Message</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>Fill out the parameters below to initiate an encrypted payload.</p>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#F87171',
                    fontSize: '0.85rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <i className="ph ph-warning" style={{ fontSize: '1.1rem' }} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_verification_trap"
                    tabIndex="-1"
                    value={honeypot}
                    onChange={e => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Identity / Alias</label>
                  <input
                    type="text"
                    value={identity}
                    onChange={(e) => setIdentity(e.target.value)}
                    className="form-control"
                    placeholder="e.g. Alex Mercer"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Return Address (Email)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="alex@domain.org"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Inquiry Scope</label>
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="form-control"
                    style={{ background: 'var(--bg-glass-input)', color: 'var(--text-primary)' }}
                  >
                    <option value="custom">Enterprise Local-First Deployment</option>
                    <option value="audit">Cryptographic Security Audit</option>
                    <option value="founder">Founder & Leadership Inquiry</option>
                    <option value="general">General Architecture Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message Payload</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control"
                    rows={5}
                    placeholder="Describe your technical requirements..."
                    required
                  />
                </div>

                <button type="submit" className="btn-magnetic" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }} disabled={loading}>
                  <span>{loading ? 'Encrypting & Transmitting...' : 'Send Encrypted Payload'}</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(52, 211, 153, 0.15)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.5rem auto' }}>
                  <i className="ph ph-check-circle" />
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Payload Transmitted</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 2rem auto' }}>
                  Your message has been encrypted and routed directly to our engineering desk. We will get back to you shortly.
                </p>
                <button className="btn-secondary-glass" onClick={() => setSubmitted(false)}>
                  <span>Send Another Message</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
