import React from 'react';
import { Link } from 'react-router-dom';

export const SecurityAudit = () => {
  return (
    <main className="section-space" style={{ paddingTop: '10rem' }}>
      <div className="container">
        {/* Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 5rem auto' }}>
          <span className="glass-pill" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <i className="ph ph-shield-check" style={{ color: 'var(--glow-emerald)' }} />
            Cryptographic Zero-Trust Certification
          </span>
          <h1 className="hero-title text-gradient" style={{ fontSize: '3.8rem' }}>Independent Security Audit</h1>
          <p className="hero-tagline" style={{ maxWidth: '750px', margin: '0 auto' }}>
            We don't ask for trust—we provide mathematical verification. Explore our third-party cryptographic audits, network egress reports, and bug bounty framework.
          </p>
        </div>

        {/* Overall Status Card */}
        <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', marginBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 15px #10B981' }} />
                <span style={{ fontSize: '1rem', fontWeight: 600, color: '#10B981', letterSpacing: '1px', textTransform: 'uppercase' }}>Audit Result: Clean & Verified</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Zero High-Risk Vulnerabilities</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Audit performed on Orildo Kernel Build 2.4.1 (Rust & C++ engine).</p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>Audit Certificate SHA-256</div>
              <div className="font-mono" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', background: 'rgba(255,255,255,0.03)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', marginTop: '0.4rem' }}>
                9F8E 7A32 B104 88C9 E402 A1B3 C891 00FA
              </div>
            </div>
          </div>
        </div>

        {/* Audit Modules Grid */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-subtitle">Audit Disciplines</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-primary)' }}>Verification Modules</h2>
        </div>

        <div className="grid-2" style={{ marginBottom: '6rem' }}>
          {/* Module 1 */}
          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div className="product-icon" style={{ marginBottom: 0 }}><i className="ph ph-lock-key" style={{ color: 'var(--glow-emerald)' }} /></div>
              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(52,211,153,0.15)', color: '#34D399', fontSize: '0.8rem', fontWeight: 600 }}>PASSED</span>
            </div>
            <h3 className="product-title">1. Key Derivation & AES-256 Vault</h3>
            <p className="product-desc">Rigorous cryptographic evaluation of Argon2id salt generation, PBKDF2 iterations, and AES-256-GCM memory scrubbing during vault unlock sequences.</p>
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <strong>Findings:</strong> Zero side-channel leaks detected. Memory registers properly zeroized on lock.
            </div>
          </div>

          {/* Module 2 */}
          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div className="product-icon" style={{ marginBottom: 0 }}><i className="ph ph-wifi-slash" style={{ color: 'var(--glow-emerald)' }} /></div>
              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(52,211,153,0.15)', color: '#34D399', fontSize: '0.8rem', fontWeight: 600 }}>PASSED</span>
            </div>
            <h3 className="product-title">2. Air-Gap Egress & Network Inspection</h3>
            <p className="product-desc">Packet analysis via Wireshark and eBPF kernel sockets under full application load to ensure zero background telemetry or unexpected DNS queries.</p>
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <strong>Findings:</strong> 0 outbound packets transmitted without explicit user P2P sync authorization.
            </div>
          </div>

          {/* Module 3 */}
          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div className="product-icon" style={{ marginBottom: 0 }}><i className="ph ph-cpu" style={{ color: 'var(--glow-emerald)' }} /></div>
              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(52,211,153,0.15)', color: '#34D399', fontSize: '0.8rem', fontWeight: 600 }}>PASSED</span>
            </div>
            <h3 className="product-title">3. Memory Safety & Buffer Boundaries</h3>
            <p className="product-desc">Fuzzing and static analysis of RustFFI and C++ SQLite extensions using AFL++ and AddressSanitizer to guarantee immunity to heap/stack overflow exploits.</p>
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <strong>Findings:</strong> Zero memory safety violations across 50,000,000 simulated payload executions.
            </div>
          </div>

          {/* Module 4 */}
          <div className="glass-panel spatial-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div className="product-icon" style={{ marginBottom: 0 }}><i className="ph ph-fingerprint" style={{ color: 'var(--glow-emerald)' }} /></div>
              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(52,211,153,0.15)', color: '#34D399', fontSize: '0.8rem', fontWeight: 600 }}>PASSED</span>
            </div>
            <h3 className="product-title">4. Mobile Secure Enclave Isolation</h3>
            <p className="product-desc">Penetration testing on iOS Secure Enclave and Android KeyStore biometric hardware bridges during biometric key release calls.</p>
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <strong>Findings:</strong> Hardware keys isolated inside physical secure hardware at all times.
            </div>
          </div>
        </div>

        {/* Bug Bounty Program Section */}
        <div className="glass-panel" style={{ padding: '4rem', borderRadius: '24px', marginBottom: '6rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="glass-pill" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                <i className="ph ph-bug" style={{ color: '#F87171' }} />
                Security Research Bounty
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Bug Bounty Program</h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We invite independent security researchers and ethical hackers to stress-test our codebase. We reward valid vulnerability reports that uncover memory leaks or cryptographic bypasses.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-magnetic">
                  <span>Submit Security Report</span>
                </Link>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Maximum Critical Bounty Reward</div>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#34D399', marginBottom: '1rem' }}>$50,000 USD</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>For verified zero-day zero-knowledge key extraction vulnerabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
