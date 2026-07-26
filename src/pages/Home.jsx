import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSound } from '../context/SoundContext';

export const Home = () => {
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const { playClick } = useSound();
  const navigate = useNavigate();

  // Timeline progress calculation on scroll
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeSteps, setActiveSteps] = useState([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const containerRect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startPoint = containerRect.top - windowHeight * 0.6;
      const totalDistance = containerRect.height;
      const rawProgress = (-startPoint / totalDistance) * 100;
      const progress = Math.max(0, Math.min(100, rawProgress));
      setTimelineProgress(progress);

      const steps = timelineRef.current.querySelectorAll('.timeline-step');
      const active = [];
      steps.forEach((step, idx) => {
        const stepRect = step.getBoundingClientRect();
        if (stepRect.top < windowHeight * 0.65) {
          active.push(idx);
        }
      });
      setActiveSteps(active);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      icon: 'ph-device-mobile',
      title: 'Orildo Core Mobile',
      desc: 'Ultra-fast local database engine for iOS & Android. Zero tracking, zero telemetry, instant offline startup.',
      tags: ['Local SQLite', 'AES-256', 'Offline-First']
    },
    {
      icon: 'ph-desktop',
      title: 'Orildo Workspace Desktop',
      desc: 'High-performance native desktop environment for macOS, Linux, and Windows. Engineered with Rust and spatial keyboard navigation.',
      tags: ['Rust Engine', 'Raycast-like UX', 'Air-Gapped']
    },
    {
      icon: 'ph-briefcase',
      title: 'Private Enterprise Suite',
      desc: 'Self-hosted corporate collaboration system with zero cloud lock-in. Complete administrative sovereignty over company intelligence.',
      tags: ['Self-Hosted', 'Zero Cloud', 'Role RBAC']
    },
    {
      icon: 'ph-brain',
      title: 'Neural Local AI',
      desc: 'On-device neural LLM execution. Process documents, summarize data, and automate workflows without a single byte reaching third-party APIs.',
      tags: ['On-Device LLM', 'Apple Silicon GPU', '100% Private']
    },
    {
      icon: 'ph-cloud-slash',
      title: 'Zero-Knowledge Sync',
      desc: 'P2P mesh network protocol that synchronizes device states over local WiFi or encrypted relays with zero trust architecture.',
      tags: ['P2P Mesh', 'E2EE', 'No Central DB']
    },
    {
      icon: 'ph-paint-brush-broad',
      title: 'Spatial UI Engine',
      desc: 'Next-generation spatial design component library powering all Orildo applications with physical glass depth and liquid physics.',
      tags: ['Glassmorphism', '60 FPS Motion', 'Spatial Depth']
    }
  ];

  const timelineSteps = [
    { num: '01', title: 'Discover & Model', desc: 'Map core user workflows and eliminate unnecessary cloud network dependencies.' },
    { num: '02', title: 'Spatial UI Design', desc: 'Craft visual physical interfaces with 60 FPS fluid depth and glass reflections.' },
    { num: '03', title: 'Native Kernel Engineering', desc: 'Build high-throughput Rust and C++ local database models.' },
    { num: '04', title: 'Cryptographic Audit', desc: 'Stress-test zero-knowledge key derivations and memory encryption boundaries.' },
    { num: '05', title: 'Air-Gapped Launch', desc: 'Deploy self-contained binaries that require zero server infrastructure.' }
  ];

  const faqs = [
    {
      q: 'What does "Local-First Computing" mean at Orildo?',
      a: 'Local-first computing means your data is created, processed, and stored entirely on your local physical device first. Unlike traditional SaaS cloud apps where your data lives on external servers, Orildo applications function 100% offline without needing an active internet connection.'
    },
    {
      q: 'How does Orildo sync data across multiple devices securely?',
      a: 'Orildo uses peer-to-peer end-to-end encrypted zero-knowledge synchronization. Data is encrypted using AES-256-GCM on your device before transmission. Even our synchronization relays cannot read or inspect your payload.'
    },
    {
      q: 'Is Orildo a software development agency or service provider?',
      a: 'No. Orildo is a product-first engineering firm. We do not offer client outsourcing or generic agency services. We design and build revolutionary privacy-first software products around ownership and human freedom.'
    },
    {
      q: 'Can I deploy Orildo tools completely air-gapped?',
      a: 'Yes. All Orildo desktop, mobile, and business applications are engineered with air-gapped capabilities. Updates can be verified and applied offline via cryptographically signed release bundles.'
    },
    {
      q: 'Who leads Orildo Technology?',
      a: 'Orildo Technology was founded and is led by Syed Sameer Ul Hassan, guided by a core philosophy that digital privacy is a fundamental human right and luxury.'
    },
    {
      q: 'How does Orildo protect against zero-day hardware vulnerabilities?',
      a: 'Our security architecture incorporates hardware-level key isolation bound to the Apple Silicon Secure Enclave and TPM 2.0 modules. Memory zeroization and memory-safe Rust native kernels prevent buffer overflows and heap exploits.'
    }
  ];

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
    f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const toggleFaq = (idx) => {
    if (openFaq !== idx) {
      playClick();
      setOpenFaq(idx);
    } else {
      setOpenFaq(null);
    }
  };

  const handleHashClick = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="glass-pill">
                <i className="ph ph-shield-check" style={{ color: 'var(--glow-base)' }} />
                Local-First Spatial Operating System
              </span>
            </div>

            <h1 className="hero-title text-gradient">
              The Operating System<br />of Digital Freedom
            </h1>

            <p className="hero-tagline">
              Engineering local-first, zero-knowledge software products for human digital freedom.
            </p>

            <div className="hero-actions">
              <a href="#products" onClick={(e) => handleHashClick(e, '#products')} className="btn-magnetic">
                <span>Explore Products</span>
              </a>
              <Link to="/our-story" className="btn-secondary-glass">
                <span>Learn Philosophy</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-space">
        <div className="container">
          <div className="about-grid">
            {/* Left: Core Mission Statement */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '2rem' }}>
              <span className="section-subtitle">Core Identity</span>
              <h2 className="section-title text-gradient-bright" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', textAlign: 'left', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                We build software products.<br />Not agencies. Not services.
              </h2>
              <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                Orildo Technology is an independent engineering firm founded by <strong>Syed Sameer Ul Hassan</strong>. We create software that respects your dignity, hardware, and autonomy.
              </p>
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
                <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #FFFFFF, transparent)' }} />
              </div>
            </div>

            {/* Right: Technical Foundations */}
            <div className="glass-panel spatial-card" style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', overflow: 'hidden' }}>
              {/* Decorative Background Glow */}
              <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div className="feature-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: 'inset 0 2px 5px rgba(255,255,255,0.1)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="5" width="16" height="14" rx="2" stroke="url(#paint0_feat)" strokeWidth="1.5" />
                    <path d="M4 12H20" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                    <circle cx="8" cy="8.5" r="1.5" fill="white" />
                    <circle cx="8" cy="15.5" r="1.5" fill="white" />
                    <defs>
                      <linearGradient id="paint0_feat" x1="4" y1="5" x2="20" y2="19" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFFFF" />
                        <stop offset="1" stopColor="#B0B8C4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>Zero Cloud Dependency</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Your data lives physically on your SSD, never on rented cloud servers.</p>
                </div>
              </div>

              <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />

              <div className="feature-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: 'inset 0 2px 5px rgba(255,255,255,0.1)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="4.5" stroke="url(#paint1_feat)" strokeWidth="1.5" />
                    <path d="M11.5 11.5L19.5 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M19.5 16.5L16.5 19.5" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M16.5 13.5L13.5 16.5" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="paint1_feat" x1="4" y1="4" x2="13" y2="13" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFFFF" />
                        <stop offset="1" stopColor="#B0B8C4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>Encryption by Default</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>AES-256-GCM hardware keys protect every local payload.</p>
                </div>
              </div>

              <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />

              <div className="feature-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: 'inset 0 2px 5px rgba(255,255,255,0.1)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" stroke="url(#paint2_feat)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint2_feat" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFFFF" />
                        <stop offset="1" stopColor="#B0B8C4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>Sub-Millisecond Speed</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Native Rust and C++ kernels deliver fluid 120 FPS performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="section-space">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Guiding Tenets</span>
            <h2 className="section-title text-gradient">The Five Pillars of Orildo</h2>
            <p className="section-description">Every line of code we ship adheres to these uncompromising principles.</p>
          </div>

          <div className="bento-grid">
            {/* Pillar 1: Image Showcase Only */}
            <div className="glass-panel bento-card bento-span-3 spatial-card bento-media-card">
              <div className="bento-full-media-wrap">
                <img src="/assets/images/pillar-sovereignty.svg" alt="Data Sovereignty" className="bento-full-media animate-bento-img" />
                <div className="bento-media-overlay">
                  <div className="bento-media-text">
                    <h3 className="bento-title">Your Data Belongs To You</h3>
                    <p className="bento-desc">You own the cryptographic keys, files, and physical bytes. We have zero access to your digital life.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Image Showcase Only */}
            <div className="glass-panel bento-card bento-span-3 spatial-card bento-media-card">
              <div className="bento-full-media-wrap">
                <img src="/assets/images/pillar-local.svg" alt="Local First" className="bento-full-media animate-bento-img" />
                <div className="bento-media-overlay">
                  <div className="bento-media-text">
                    <h3 className="bento-title">Local First Architecture</h3>
                    <p className="bento-desc">All computations run directly on your silicon processor, unlocking instant sub-millisecond speeds.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Text Only - Without Image */}
            <div className="glass-panel bento-card bento-span-3 spatial-card bento-text-card">
              <div className="bento-text-content">
                <div className="bento-card-header-bar">
                  <div className="bento-animated-icon-box">
                    <i className="ph ph-wifi-slash icon-pulse-ring" />
                  </div>
                </div>
                <div className="bento-card-body">
                  <h3 className="bento-title">100% Offline Capable</h3>
                  <p className="bento-desc">Full operational capabilities without an internet connection or remote server dependency.</p>
                </div>
                <div className="bento-card-footer">
                  <span className="tech-status-indicator">
                    <span className="status-dot green-dot" />
                    STATUS: AIR-GAPPED LOCAL ENGINE
                  </span>
                </div>
              </div>
            </div>

            {/* Pillar 4: Text Only - Without Image */}
            <div className="glass-panel bento-card bento-span-3 spatial-card bento-text-card">
              <div className="bento-text-content">
                <div className="bento-card-header-bar">
                  <div className="bento-animated-icon-box">
                    <i className="ph ph-lock-key icon-spin-ring" />
                  </div>
                </div>
                <div className="bento-card-body">
                  <h3 className="bento-title">Encryption By Design</h3>
                  <p className="bento-desc">Zero-knowledge architecture baked into the foundational layer with isolated key vaults.</p>
                </div>
                <div className="bento-card-footer">
                  <span className="tech-status-indicator">
                    <span className="status-dot emerald-dot" />
                    ISOLATION: AES-256-GCM KEYVAULT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Suite Section */}
      <section id="products" className="section-space">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Product Suite</span>
            <h2 className="section-title text-gradient">Architected for Autonomy</h2>
            <p className="section-description">Explore our native workstation engines and encryption tools.</p>
          </div>

          <div className="products-marquee-wrapper">
            <div className="products-marquee-track">
              {[...products, ...products].map((item, idx) => (
                <div key={idx} className="glass-panel product-card spatial-card">
                  <div>
                    <div className="product-icon">
                      <i className={`ph ${item.icon}`} />
                    </div>
                    <h3 className="product-title">{item.title}</h3>
                    <p className="product-desc">{item.desc}</p>
                  </div>
                  <div className="product-tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="product-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section id="process" className="section-space">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Methodology</span>
            <h2 className="section-title text-gradient">Development Process</h2>
            <p className="section-description">How we engineer luxury local software from vision to deployment.</p>
          </div>

          <div className="timeline-container" ref={timelineRef}>
            <div className="timeline-line-tube">
              <div className="timeline-line-fill" style={{ height: `${timelineProgress.toFixed(2)}%` }} />
            </div>

            {timelineSteps.map((step, idx) => (
              <div key={idx} className={`timeline-step ${activeSteps.includes(idx) ? 'active' : ''}`}>
                <div className="timeline-node" />
                <div className="timeline-content-wrap">
                  <span className="timeline-num">{step.num}</span>
                  <div className="glass-panel" style={{ padding: '1.75rem' }}>
                    <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="section-space">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Paradigm Shift</span>
            <h2 className="section-title text-gradient">The Old World vs The New Standard</h2>
          </div>

          <div className="split-comparison">
            <div className="vs-badge">VS</div>

            {/* Left Pane: Legacy */}
            <div className="split-pane pane-legacy">
              <div className="pane-header">
                <div className="pane-subtitle legacy-subtitle">The Old World</div>
                <h3 className="pane-title">Traditional SaaS Cloud</h3>
              </div>
              <ul className="comp-list">
                <li className="comp-item">
                  <div className="comp-item-icon"><i className="ph ph-x" /></div>
                  <div className="comp-item-text">Data stored on third-party server databases</div>
                </li>
                <li className="comp-item">
                  <div className="comp-item-icon"><i className="ph ph-x" /></div>
                  <div className="comp-item-text">Inoperable during network outages</div>
                </li>
                <li className="comp-item">
                  <div className="comp-item-icon"><i className="ph ph-x" /></div>
                  <div className="comp-item-text">High latency HTTP roundtrips</div>
                </li>
                <li className="comp-item">
                  <div className="comp-item-icon"><i className="ph ph-x" /></div>
                  <div className="comp-item-text">Vulnerable to corporate surveillance</div>
                </li>
              </ul>
            </div>

            {/* Right Pane: Modern */}
            <div className="split-pane pane-modern">
              <div className="pane-header">
                <div className="pane-subtitle modern-subtitle">The New Standard</div>
                <h3 className="pane-title">Orildo Local-First</h3>
              </div>
              <ul className="comp-list">
                <li className="comp-item">
                  <div className="comp-item-icon"><i className="ph ph-check" /></div>
                  <div className="comp-item-text">100% of data remains on local physical hardware</div>
                </li>
                <li className="comp-item">
                  <div className="comp-item-icon"><i className="ph ph-check" /></div>
                  <div className="comp-item-text">Instant sub-millisecond offline execution</div>
                </li>
                <li className="comp-item">
                  <div className="comp-item-icon"><i className="ph ph-check" /></div>
                  <div className="comp-item-text">AES-256 hardware encrypted storage</div>
                </li>
                <li className="comp-item">
                  <div className="comp-item-icon"><i className="ph ph-check" /></div>
                  <div className="comp-item-text">Zero telemetry & zero corporate tracking</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-space">
        <div className="container">
          <div className="faq-split-layout">
            {/* Sidebar */}
            <div className="faq-sidebar">
              <span className="section-subtitle">Questions & Answers</span>
              <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '2.5rem', fontSize: '2.5rem' }}>
                Everything you need to know.
              </h2>

              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search questions..."
                className="faq-search-input"
                style={{ margin: 0, marginBottom: '2rem', maxWidth: '100%' }}
              />

              <div className="faq-contact-card">
                <h4>Still have questions?</h4>
                <p>Ask our on-device Neural AI Assistant instantly for real-time answers.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                  <button
                    className="btn-primary-glow faq-ai-btn"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('open-chatbot', { detail: { question: faqSearch || 'How does Orildo local architecture work?' } }));
                    }}
                    style={{ cursor: 'pointer', width: '100%', border: 'none', justifyContent: 'center' }}
                  >
                    Ask Neural AI <i className="ph ph-sparkle" style={{ marginLeft: '0.4rem' }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Accordions or Chatbot Redirect */}
            <div className="faq-content">
              {filteredFaqs.length > 0 ? (
                <div className="faq-list">
                  {filteredFaqs.map((faq, idx) => (
                    <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                      <div className="faq-question" onClick={() => toggleFaq(idx)}>
                        <span>{faq.q}</span>
                        <div className="faq-icon-wrap"><i className="ph ph-plus" /></div>
                      </div>
                      <div className="faq-answer">
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-panel" style={{ padding: '2.5rem 2rem', textAlign: 'center', borderRadius: '24px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#10B981' }}>
                    <i className="ph ph-brain" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                    Question not found in standard FAQ
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                    No static entry matched <strong style={{ color: 'var(--text-primary)' }}>"{faqSearch}"</strong>. Ask our on-device Neural AI Assistant for an instant, air-gapped response!
                  </p>
                  <button
                    className="btn-primary-glow"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('open-chatbot', { detail: { question: faqSearch } }));
                    }}
                    style={{ cursor: 'pointer', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}
                  >
                    Ask Neural AI Chatbot <i className="ph ph-paper-plane-tilt" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};
