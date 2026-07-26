import React, { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

export const AdminGuard = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });
    return () => unsub();
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user.email !== ADMIN_EMAIL) {
        setError(`Access denied. Only ${ADMIN_EMAIL} is authorized.`);
        await auth.signOut();
      }
    } catch (err) {
      setError('Login failed: ' + err.message);
    }
  };

  // Still checking auth state
  if (checking) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <i className="ph ph-circle-notch" style={{ fontSize: '2rem', animation: 'spin 1s linear infinite' }} />
          <p style={{ marginTop: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>Verifying credentials...</p>
        </div>
      </div>
    );
  }

  // Not logged in or wrong email
  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="glass-panel spatial-card" style={{ padding: '3rem', borderRadius: '28px', textAlign: 'center', maxWidth: '420px', width: '100%' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.6rem', color: '#10B981' }}>
            <i className="ph ph-shield-check" />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Admin Access
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Sign in with Google to access the Orildo CPanel. Restricted to authorized personnel only.
          </p>

          {error && (
            <div style={{ padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#F87171', fontSize: '0.82rem', marginBottom: '1.5rem', textAlign: 'left' }}>
              <i className="ph ph-warning" style={{ marginRight: '0.3rem' }} /> {error}
            </div>
          )}

          <button onClick={handleLogin} className="btn-magnetic" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', cursor: 'pointer' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
              Sign in with Google
            </span>
          </button>

          <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
            Domain locked to authorized email
          </p>
        </div>
      </div>
    );
  }

  // Authorized — render children
  return children;
};
