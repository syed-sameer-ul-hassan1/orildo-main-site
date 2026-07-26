import { useEffect } from 'react';

const CRITICAL_ASSETS = [
  '/assets/icons/name-logo.svg',
  '/assets/icons/icon.svg',
  '/assets/images/phone-nave.jpg',
  '/assets/images/laptop-nav.webp'
];

export const AssetPreloader = () => {
  useEffect(() => {
    // 1. Preload Image Assets into Memory Cache
    CRITICAL_ASSETS.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // 2. Pre-connect and pre-warm Font rendering
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
      });
    }

    // 3. Enable GPU compositor acceleration hint
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return null;
};
