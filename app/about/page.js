'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '../components/Nav';
import { useLang } from '../context/LangContext';

gsap.registerPlugin(ScrollTrigger);

const keywords = [
  { en: 'SEE', jp: '髪を観察する', jpEn: 'Observe Hair' },
  { en: 'TOUCH', jp: '柔操作理論', jpEn: 'Soft Manipulation Theory' },
  { en: 'FLOW', jp: 'CUT × DRY', jpEn: 'CUT × DRY' },
];

function SplitText({ text, className, style }) {
  return (
    <span className={className} style={style} data-split-text aria-label={text}>
      {text.split('').map((char, i) => (
        <span key={`${char}-${i}`} className="about-char" style={{ display: 'inline-block' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

export default function AboutPage() {
  const mainRef = useRef(null);
  const { lang } = useLang();
  const isEn = lang === 'en';

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const hoverTitles = root.querySelectorAll('.about-keyword-title');
    const onEnter = (e) => {
      gsap.to(e.currentTarget, { color: '#C9956A', duration: 0.6, ease: 'power3.out' });
    };
    const onLeave = (e) => {
      gsap.to(e.currentTarget, { color: '#1C1A17', duration: 0.6, ease: 'power3.out' });
    };

    const ctx = gsap.context(() => {
      root.querySelectorAll('[data-split-text]').forEach((group) => {
        const chars = group.querySelectorAll('.about-char');
        const section = group.closest('section');
        if (!chars.length || !section) return;

        gsap.set(chars, { opacity: 0, y: 40 });
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.04,
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            toggleActions: 'play none none none',
          },
        });
      });

      root.querySelectorAll('.about-vline').forEach((line) => {
        const section = line.closest('section');
        if (!section) return;

        gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });
        gsap.to(line, {
          scaleY: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 68%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, root);

    hoverTitles.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      ctx.revert();
      hoverTitles.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="about-manifesto"
      style={{
        background: '#EDEBE5',
        minHeight: '100vh',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 200,
        color: '#1C1A17',
      }}
    >
      <Nav />

      {/* 1. Full-screen hero */}
      <section
        className="about-hero"
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: 560,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 48px',
          boxSizing: 'border-box',
        }}
      >
        <p
          className="about-hero-label"
          style={{
            position: 'absolute',
            top: 140,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 8,
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: '#C9956A',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          About / Manifesto
        </p>

        <h1
          className="about-hero-title"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(60px, 12vw, 200px)',
            fontWeight: 200,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            textAlign: 'center',
            margin: 0,
            maxWidth: '100%',
            color: '#1C1A17',
          }}
        >
          <SplitText text="The Art of Stealth Cut." />
        </h1>

        <p
          className="about-hero-scroll"
          style={{
            position: 'absolute',
            bottom: 48,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 8,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#9A948C',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span>{isEn ? 'Scroll' : 'スクロール'}</span>
          <span
            style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, #C9956A, transparent)',
            }}
          />
        </p>
      </section>

      {/* 2. Keywords — SEE / TOUCH / FLOW */}
      {keywords.map((kw) => (
        <section
          key={kw.en}
          className="about-keyword"
          style={{
            height: '100vh',
            minHeight: 480,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 48px',
            boxSizing: 'border-box',
            borderTop: '1px solid #C4BFB7',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: 720,
            }}
          >
            <h2
              className="about-keyword-title"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(72px, 18vw, 220px)',
                fontWeight: 200,
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                margin: 0,
                color: '#1C1A17',
                cursor: 'default',
              }}
            >
              <SplitText text={kw.en} />
            </h2>

            <span
              className="about-vline"
              style={{
                display: 'block',
                width: 1,
                height: 56,
                background: '#C4BFB7',
                margin: '32px 0',
              }}
            />

            <p
              style={{
                fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
                fontSize: 'clamp(12px, 1.4vw, 15px)',
                letterSpacing: '0.2em',
                color: '#9A948C',
                margin: 0,
                fontWeight: 300,
              }}
            >
              <SplitText text={isEn ? kw.jpEn : kw.jp} />
            </p>
          </div>
        </section>
      ))}

      {/* 3. Quote */}
      <section
        className="about-quote-section"
        style={{
          height: '100vh',
          minHeight: 480,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 80px',
          boxSizing: 'border-box',
          borderTop: '1px solid #C4BFB7',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(24px, 4vw, 48px)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.45,
            color: '#1C1A17',
            maxWidth: 900,
            margin: '0 0 32px',
            letterSpacing: '-0.02em',
          }}
        >
          <SplitText text='The blade does not cut hair. It listens to the weight that asks to fall.' />
        </p>
        <p
          style={{
            fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
            fontSize: 11,
            color: '#9A948C',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          <SplitText text="— RTA Manifesto, 2026" />
        </p>
      </section>

      <footer
        className="site-footer"
        style={{
          padding: '48px 80px',
          borderTop: '1px solid #C4BFB7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 13,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            opacity: 0.5,
          }}
        >
          Razor Tech Archive
        </span>
        <span style={{ fontSize: 9, letterSpacing: '0.18em', color: '#9A948C' }}>© 2026 Razor Tech Archive</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a
            href="#"
            style={{
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#9A948C',
              textDecoration: 'none',
            }}
          >
            Instagram
          </a>
          <a
            href="/contact"
            style={{
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#9A948C',
              textDecoration: 'none',
            }}
          >
            Contact
          </a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .about-hero {
            padding: 0 24px !important;
          }
          .about-hero-label {
            top: 120px !important;
          }
          .about-keyword {
            padding: 0 24px !important;
          }
          .about-quote-section {
            padding: 0 24px !important;
          }
          .site-footer {
            padding: 40px 24px !important;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
