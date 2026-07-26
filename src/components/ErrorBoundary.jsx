import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Orildo ErrorBoundary caught exception:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#090B0E',
          color: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div className="glass-panel spatial-card" style={{ padding: '3rem', borderRadius: '28px', maxWidth: '540px', textAlign: 'center' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '20px',
              background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem auto', color: '#EF4444', fontSize: '2rem'
            }}>
              <i className="ph ph-warning" />
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '0.5rem', color: '#FFF' }}>
              Fault Isolated
            </h2>

            <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              An unexpected runtime error occurred inside this view module. The local architecture isolated the process to prevent data corruption.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={() => window.location.reload()}
                className="btn-magnetic"
                style={{ border: 'none', cursor: 'pointer', padding: '0.8rem 1.5rem' }}
              >
                <span>Reload Application</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
