const STORAGE_KEY = 'orildo_analytics';

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return 'Mobile';
  if (/Tablet|iPad/i.test(ua)) return 'Tablet';
  return 'Desktop';
};

const getBrowser = () => {
  const ua = navigator.userAgent;
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  return 'Other';
};

const getOS = () => {
  const ua = navigator.userAgent;
  if (ua.includes('Win')) return 'Windows';
  if (ua.includes('Mac')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (/iPhone|iPad/.test(ua)) return 'iOS';
  return 'Other';
};

export const trackPageView = (path) => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"visits":[],"sessions":0}');
    const visit = {
      ts: Date.now(),
      page: path || window.location.pathname,
      referrer: document.referrer || 'direct',
      device: getDeviceType(),
      browser: getBrowser(),
      os: getOS(),
      screenW: window.innerWidth,
      screenH: window.innerHeight,
      lang: navigator.language,
    };
    data.visits.push(visit);
    if (data.visits.length > 1000) data.visits = data.visits.slice(-1000);
    data.sessions = (data.sessions || 0) + 1;
    data.lastVisit = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
};

export const getAnalyticsData = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"visits":[],"sessions":0}');
  } catch (e) {
    return { visits: [], sessions: 0 };
  }
};

export const clearAnalytics = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ visits: [], sessions: 0 }));
};
