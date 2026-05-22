'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '../components/Nav';
import { useLang } from '../context/LangContext';
import aboutHero from './about-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const panelStyle = {
  height: '100vh',
  minHeight: 480,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 48px',
  boxSizing: 'border-box',
  borderTop: '1px solid #C4BFB7',
};

const panelInnerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: 800,
  gap: 28,
};

const heroTaglines = [
  'Razor Tech Archive',
  'Subscription Platform Design',
  'Archive-Based Education System',
];

const heroBarColors = [
  { c: '#EDEBE5', flex: 2 },
  { c: '#1C1A17', flex: 3 },
  { c: '#C9956A', flex: 2 },
  { c: '#8C7B6B', flex: 4 },
  { c: '#C4BFB7', flex: 1 },
];

export default function AboutPage() {
  const mainRef = useRef(null);
  const { lang } = useLang();
  const isEn = lang === 'en';

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const animateFadeUp = (container, trigger) => {
        const fadeEls = container.querySelectorAll('.about-fade-up');
        if (!fadeEls.length) return;

        gsap.set(fadeEls, { opacity: 0, y: 40 });
        gsap.to(fadeEls, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger,
            start: 'top 72%',
            toggleActions: 'play none none none',
          },
        });
      };

      // 2. about-fade-up — staggered fade-in per section
      root.querySelectorAll('section').forEach((section) => {
        animateFadeUp(section, section);
      });

      const footer = root.querySelector('footer');
      if (footer) {
        animateFadeUp(footer, footer);
      }

      // 3. Vertical lines
      root.querySelectorAll('.about-vline').forEach((line) => {
        const section = line.closest('section');
        gsap.set(line, { scaleY: 0, transformOrigin: 'top' });
        gsap.to(line, {
          scaleY: 1,
          duration: 1.4,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: section ?? line,
            start: 'top 68%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [lang]);

  const concept1Lines = isEn
    ? ['RTA Subscription is not', 'simply an online salon.', '"An Archive that Preserves Sensation"']
    : ['RTA Subscriptionは、', '単なるオンラインサロンではない。', '"感覚を保存するArchive"'];

  const concept2Lines = isEn
    ? [
        'Much beauty education teaches cutting methods, procedures, and styles.',
        'But RTA is different.',
        'What RTA wants to preserve is how you see hair.',
      ]
    : [
        '多くの美容教育は、切り方・手順・スタイルを教える。',
        'しかしRTAは違う。',
        'RTAが保存したいのは、髪の見方。',
      ];

  const observationText = isEn
    ? 'At RTA, we theorize natural growth, hair flow, root direction, fall position, texture, and airiness—and translate them into reproducibility.'
    : 'RTAでは、生え癖・毛流れ・根元方向・落下位置・質感・空気感 を理論化し、再現性へ落とし込む。';

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

      {/* 1. Header — photo hero */}
      <section
        className="about-hero"
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          background: '#EDEBE5',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={aboutHero}
            alt="Razor Tech Archive — About"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center center', willChange: 'transform' }}
          />
          <div
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, background: 'rgba(28,26,23,0.22)' }}
          />
        </div>

        <div
          className="about-hero-sns"
          style={{
            position: 'absolute',
            right: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {['IG', 'TW', 'YT'].map((s) => (
            <a
              key={s}
              href="#"
              className="about-fade-up"
              style={{
                fontSize: 8,
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                writingMode: 'vertical-rl',
              }}
            >
              {s}
            </a>
          ))}
        </div>

        <div
          className="about-page-top about-fade-up about-hero-copy"
          style={{
            position: 'absolute',
            left: 80,
            bottom: 120,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 8,
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span style={{ width: 18, height: 1, background: 'rgba(255,255,255,0.4)', display: 'inline-block' }} />
            About / Manifesto
          </div>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px,4vw,52px)',
              fontWeight: 200,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            The Art of <em style={{ fontStyle: 'italic', color: '#E8B48A' }}>Stealth</em> Cut.
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
            {heroTaglines.map((t) => (
              <div
                key={t}
                className="about-fade-up"
                style={{
                  fontSize: 9,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div
          className="about-fade-up"
          style={{
            position: 'absolute',
            left: 80,
            bottom: 76,
            zIndex: 10,
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 11,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.18em',
          }}
        >
          01
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            display: 'flex',
            height: 6,
          }}
        >
          {heroBarColors.map((b) => (
            <div key={b.c} style={{ flex: b.flex, background: b.c }} />
          ))}
        </div>
      </section>

      {/* 2. Concept 1 */}
      <section className="about-panel" style={panelStyle}>
        <div style={panelInnerStyle}>
          <p
            className="about-fade-up"
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 11,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9956A',
              margin: 0,
            }}
          >
            {isEn ? 'What is RTA Subscription' : 'RTA Subscriptionとは'}
          </p>
          <span className="about-vline" style={{ width: 1, height: 56, background: '#C4BFB7', display: 'block' }} />
          <div
            className="about-fade-up"
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 'clamp(16px, 2.2vw, 28px)',
              lineHeight: 2,
              color: '#1C1A17',
              fontWeight: 300,
            }}
          >
            {concept1Lines.slice(0, 2).map((line) => (
              <span key={line} style={{ display: 'block' }}>
                {line}
              </span>
            ))}
            <p
              className="about-fade-up"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(20px, 3vw, 40px)',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.4,
                margin: '24px 0 0',
                letterSpacing: '-0.01em',
              }}
            >
              {concept1Lines[2]}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Concept 2 */}
      <section className="about-panel" style={panelStyle}>
        <div style={panelInnerStyle}>
          <span className="about-vline" style={{ width: 1, height: 56, background: '#C4BFB7', display: 'block' }} />
          <div
            className="about-fade-up"
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 'clamp(16px, 2.2vw, 28px)',
              lineHeight: 2.2,
              color: '#9A948C',
              fontWeight: 300,
            }}
          >
            {concept2Lines.map((line) => (
              <span key={line} style={{ display: 'block' }}>
                {line}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Philosophy */}
      <section className="about-panel" style={panelStyle}>
        <div style={panelInnerStyle}>
          <p
            className="about-fade-up"
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 11,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9956A',
              margin: 0,
            }}
          >
            RTA Subscription Philosophy
          </p>
          <span className="about-vline" style={{ width: 1, height: 56, background: '#C4BFB7', display: 'block' }} />
          <p
            className="about-fade-up"
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 'clamp(18px, 2.5vw, 32px)',
              lineHeight: 1.9,
              color: '#1C1A17',
              fontWeight: 300,
              margin: 0,
            }}
          >
            {isEn ? 'We do not let technique end as "sensation".' : '技術を"感覚"で終わらせない。'}
          </p>
        </div>
      </section>

      {/* 5. Observation */}
      <section className="about-panel" style={panelStyle}>
        <div style={panelInnerStyle}>
          <span className="about-vline" style={{ width: 1, height: 56, background: '#C4BFB7', display: 'block' }} />
          <p
            className="about-fade-up"
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 'clamp(15px, 2vw, 24px)',
              lineHeight: 2.4,
              color: '#9A948C',
              fontWeight: 300,
              margin: 0,
            }}
          >
            {observationText}
          </p>
        </div>
      </section>

      {/* 6. Quote */}
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
        <span className="about-vline about-fade-up" style={{ width: 1, height: 56, background: '#C4BFB7', display: 'block', marginBottom: 40 }} />
        <p
          className="about-fade-up"
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
          The blade does not cut hair. It listens to the weight that asks to fall.
        </p>
        <p
          className="about-fade-up"
          style={{
            fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
            fontSize: 11,
            color: '#9A948C',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          — RTA Manifesto, 2026
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
          className="about-fade-up"
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
        <span className="about-fade-up" style={{ fontSize: 9, letterSpacing: '0.18em', color: '#9A948C' }}>
          © 2026 Razor Tech Archive
        </span>
        <div className="about-fade-up" style={{ display: 'flex', gap: 24 }}>
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
          .about-hero-copy {
            left: 24px !important;
            bottom: 100px !important;
            right: 24px;
          }
          .about-hero-sns {
            right: 16px !important;
          }
          .about-panel {
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
