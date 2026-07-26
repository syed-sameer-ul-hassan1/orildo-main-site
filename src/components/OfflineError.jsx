import React, { useState, useEffect } from 'react';

export const OfflineError = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => {
      setIsOffline(false);
      setDismissed(false);
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (!isOffline || dismissed) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      zIndex: 9999,
      maxWidth: '420px',
      width: 'calc(100% - 3rem)',
      background: 'rgba(15, 20, 28, 0.95)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(245, 158, 11, 0.4)',
      borderRadius: '20px',
      padding: '1.25rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
      animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
        <div style={{
          width: '38px', height: '38px', borderRadius: '10px',
          background: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#F59E0B', flexShrink: 0, fontSize: '1.2rem'
        }}>
          <i className="ph ph-wifi-slash" />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#FFF', fontFamily: 'var(--font-display)' }}>
              Air-Gapped Mode Active
            </h4>
            <button
              onClick={() => setDismissed(true)}
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0 }}
            >
              <i className="ph ph-x" style={{ fontSize: '1.1rem' }} />
            </button>
          </div>
          <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.5 }}>
            Internet connection offline. Orildo software is local-first and fully operational offline.
          </p>
        </div>
      </div>
    </div>
  );
};
