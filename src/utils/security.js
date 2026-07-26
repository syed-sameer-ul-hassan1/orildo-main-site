export const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

const RATE_LIMIT_KEY = 'orildo_rate_limit';
export const checkRateLimit = (maxRequests = 3, windowMs = 60000) => {
  try {
    const now = Date.now();
    const history = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
    const recent = history.filter(ts => now - ts < windowMs);

    if (recent.length >= maxRequests) {
      return { allowed: false, retryAfterSec: Math.ceil((windowMs - (now - recent[0])) / 1000) };
    }

    recent.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
    return { allowed: true };
  } catch (e) {
    return { allowed: true };
  }
};

export const enforceFrameProtection = () => {
  try {
    if (window.self !== window.top) {
      window.top.location = window.self.location;
    }
  } catch (e) {}
};

export const computeSHA256 = async (str) => {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (e) {
    return 'checksum_fallback';
  }
};

export const sanitizePayload = (payload) => {
  const clean = {};
  for (const [key, val] of Object.entries(payload)) {
    if (typeof val === 'string') {
      clean[key] = sanitizeInput(val.trim());
    } else {
      clean[key] = val;
    }
  }
  return clean;
};

export const initializeSecurityGuard = () => {
  enforceFrameProtection();
  window.addEventListener('unhandledrejection', (e) => {
    e.preventDefault();
  });
};
