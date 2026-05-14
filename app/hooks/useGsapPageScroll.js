'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Same scroll setup as app/about/page.js: fade-up + optional title slide + parallax images.
 */
export function useGsapPageScroll() {
  const mainRef = useRef(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const fadeUpEls = root.querySelectorAll('.about-fade-up');
      const titleEl = root.querySelector('.about-animate-title');
      const parallaxWraps = root.querySelectorAll('.about-parallax-wrap');

      gsap.set(fadeUpEls, { opacity: 0, y: 56 });
      if (titleEl) {
        gsap.set(titleEl, { opacity: 0, x: -72 });
      }

      fadeUpEls.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            end: 'top 60%',
            toggleActions: 'play none none none',
          },
        });
      });

      if (titleEl) {
        const hero = titleEl.closest('.about-page-top');
        gsap.to(titleEl, {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hero ?? titleEl,
            start: 'top 82%',
            end: 'top 55%',
            toggleActions: 'play none none none',
          },
        });
      }

      parallaxWraps.forEach((wrap) => {
        const img = wrap.querySelector('img');
        if (!img) return;
        gsap.fromTo(
          img,
          { y: -64 },
          {
            y: 64,
            ease: 'none',
            scrollTrigger: {
              trigger: wrap,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return mainRef;
}
