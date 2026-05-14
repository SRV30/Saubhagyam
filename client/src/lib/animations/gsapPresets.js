import gsap from 'gsap';

export const initGlowPulse = (selector) =>
  gsap.to(selector, {
    boxShadow: '0 0 28px rgba(212, 175, 55, 0.5)',
    repeat: -1,
    yoyo: true,
    duration: 1.8,
    ease: 'sine.inOut',
  });
