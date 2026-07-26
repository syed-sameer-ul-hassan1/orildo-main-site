import React, { useLayoutEffect, useState, useRef } from 'react';

export const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [dropped, setDropped] = useState(false);
  const iconSvgRef = useRef(null);

  const playHeavyImpactSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const t = ctx.currentTime;

      // 1. Heavy Sub-Bass Impact Thud
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(190, t);
      subOsc.frequency.exponentialRampToValueAtTime(32, t + 0.35);

      subGain.gain.setValueAtTime(0.4, t);
      subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(t);
      subOsc.stop(t + 0.35);

      // 2. High Crisp "Tish" Noise Transient
      const bufferSize = ctx.sampleRate * 0.18;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3400, t);
      filter.Q.setValueAtTime(1.8, t);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.25, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(t);
    } catch (e) {
      console.warn('Audio impact play skipped:', e);
    }
  };

  useLayoutEffect(() => {
    // Check if splash was already shown in this session
    const hasShown = sessionStorage.getItem('orildo_splash_shown');
    if (hasShown) {
      setVisible(false);
      return;
    }

    const iconSvg = iconSvgRef.current;
    if (!iconSvg) return;

    // Target ONLY top-level stroked paths
    const strokedPaths = iconSvg.querySelectorAll('path[stroke]');

    // Synchronously hide all strokes BEFORE initial browser paint
    strokedPaths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    // Start drawing immediately on next animation frame (zero flash of complete logo)
    let animFrameTwo;
    const animFrameOne = requestAnimationFrame(() => {
      animFrameTwo = requestAnimationFrame(() => {
        strokedPaths.forEach((path) => {
          path.style.transition = 'stroke-dashoffset 2.4s cubic-bezier(0.65, 0, 0.35, 1)';
          path.style.strokeDashoffset = '0';
        });
      });
    });

    // Move exact verbatim icon to background opacity layer & heavy drop name-logo.svg with "TISH" sound FX
    const dropTimer = setTimeout(() => {
      setDropped(true);
      playHeavyImpactSound();
    }, 2550);

    // Trigger splash exit fade-out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4400);

    // Unmount splash screen and save session state
    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('orildo_splash_shown', 'true');
    }, 5000);

    return () => {
      cancelAnimationFrame(animFrameOne);
      if (animFrameTwo) cancelAnimationFrame(animFrameTwo);
      clearTimeout(dropTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className={`splash-viewport ${dropped ? 'dropped' : ''}`}>
        {/* Step 1: Draw Exact Verbatim SVG Code from icon.svg (starts 100% hidden, draws to 100%) */}
        <div className="splash-icon-layer">
          <svg
            ref={iconSvgRef}
            width="360"
            height="386"
            viewBox="0 0 581 624"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="splash-icon-stroke-svg"
          >
            <path
              d="M302.307 2.5332C311.861 2.44912 329.637 2.45572 342.305 3.41602C351.785 4.13467 363.933 5.8172 373.482 7.28125C378.837 8.10251 381.447 14.2504 378.288 18.7578L368.434 32.8174C366.752 35.2169 363.81 36.4307 360.881 35.9395C357.318 35.3417 352.856 34.6386 349.299 34.2227C344.233 33.6303 337.103 33.153 333.57 32.9355C331.159 32.7871 328.953 34.2353 328.108 36.4775L324.792 45.2754C323.49 48.7304 325.887 52.4181 329.511 52.7295C373.229 56.4854 420.936 71.6916 462.094 102.393C522.042 147.11 562.22 213.423 574.109 287.269C585.998 361.117 568.663 436.693 525.779 497.972C482.897 559.25 417.836 601.415 344.394 615.525C270.952 629.636 194.903 614.58 132.371 573.554L130.123 572.064C118.923 564.567 108.326 556.333 98.3882 547.442C98.2538 547.322 98.1955 547.126 98.2563 546.936L112.308 503.203C112.42 502.855 112.906 502.702 113.209 503.013C125.604 515.71 140.572 528.791 155.363 538.495C208.781 573.542 273.748 586.401 336.486 574.348C399.224 562.294 454.803 526.276 491.436 473.928C528.069 421.58 542.877 357.019 532.721 293.937C522.565 230.852 488.242 174.204 437.032 136.004C387.076 98.7393 325.764 85.4167 264.162 92.3672C263.735 92.4153 263.457 92.001 263.577 91.666L277.541 52.7227L295.525 7.22754C296.638 4.41119 299.312 2.55957 302.307 2.5332Z"
              stroke="white"
              strokeWidth="5"
            />
            <path
              d="M215.964 58.627C216.29 58.5382 216.636 58.8377 216.516 59.2266L202.028 106.208C201.975 106.381 201.855 106.503 201.682 106.558C170.738 116.403 113.603 150.858 80.7129 204.463C47.2976 258.92 36.4029 324.256 50.3389 386.614C56.1903 412.797 66.2262 437.591 79.8555 460.14C79.9146 460.237 79.9393 460.347 79.9316 460.451L79.9131 460.553L65.3145 511.271C65.1968 511.679 64.7302 511.716 64.5225 511.453C37.9331 477.823 18.9486 438.363 9.42773 395.76C-6.88571 322.763 5.86812 246.281 44.9844 182.53C83.1304 120.361 145.513 77.8509 215.964 58.627Z"
              stroke="white"
              strokeWidth="5"
            />
            <mask id="path-3-inside-1_39_56" fill="white">
              <path d="M481.273 332.739C481.273 438.531 395.527 524.292 289.754 524.292C183.982 524.292 98.2358 438.531 98.2358 332.739C98.2358 226.947 183.982 141.186 289.754 141.186C395.527 141.186 481.273 226.947 481.273 332.739ZM127.27 332.739C127.27 422.493 200.017 495.253 289.754 495.253C379.492 495.253 452.238 422.493 452.238 332.739C452.238 242.985 379.492 170.225 289.754 170.225C200.017 170.225 127.27 242.985 127.27 332.739Z" fill="white" />
            </mask>
            <path
              d="M481.273 332.739C481.273 438.531 395.527 524.292 289.754 524.292C183.982 524.292 98.2358 438.531 98.2358 332.739C98.2358 226.947 183.982 141.186 289.754 141.186C395.527 141.186 481.273 226.947 481.273 332.739ZM127.27 332.739C127.27 422.493 200.017 495.253 289.754 495.253C379.492 495.253 452.238 422.493 452.238 332.739C452.238 242.985 379.492 170.225 289.754 170.225C200.017 170.225 127.27 242.985 127.27 332.739Z"
              stroke="white"
              strokeWidth="10"
              mask="url(#path-3-inside-1_39_56)"
            />
          </svg>
        </div>

        {/* Step 2: Heavy Impact Drop Name Logo on top with sound FX */}
        <div className="splash-name-drop-layer">
          <img
            src="/assets/icons/name-logo.svg"
            alt="Orildo Name Logo"
            className="splash-heavy-drop-img"
          />
        </div>
      </div>
    </div>
  );
};
