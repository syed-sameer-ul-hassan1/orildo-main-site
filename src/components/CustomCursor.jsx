import React, { useEffect, useRef } from 'react';
import { useSound } from '../context/SoundContext';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const { playHover, playClick } = useSound();

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    let animFrame;
    const renderCursor = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      animFrame = requestAnimationFrame(renderCursor);
    };

    renderCursor();
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .glass-panel, input, textarea');
      if (target) {
        document.body.classList.add('hovering-interactive');
        playHover();
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .glass-panel, input, textarea');
      if (target) {
        document.body.classList.remove('hovering-interactive');
      }
    };

    const handleClick = (e) => {
      const target = e.target.closest('a, button, .glass-panel');
      if (target) {
        playClick();
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('click', handleClick);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('click', handleClick);
    };
  }, [playHover, playClick]);

  return (
    <>
      <div id="custom-cursor-dot" ref={dotRef} />
      <div id="custom-cursor-ring" ref={ringRef} />
    </>
  );
};
