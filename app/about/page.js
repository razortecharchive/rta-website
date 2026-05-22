'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '../components/Nav';
import { useLang } from '../context/LangContext';

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

/** SplitText that preserves explicit line breaks via block spans */
function SplitBlock({ lines, className, style }) {
  return (
    <span className={className} style={style} data-split-text>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.split('').map((char, i) => (
            <span key={`${li}-${i}`} className="about-char" style={{ display: 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
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

    return () => ctx.revert();
  }, []);

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

      {/* 1. Header */}
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

        <div style={{ textAlign: 'center' }}>
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
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 10,
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: '#9A948C',
              margin: '28px 0 0',
            }}
          >
            <SplitText text="Archive-Based Education System" />
          </p>
        </div>

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

      {/* 2. Concept 1 */}
      <section className="about-panel" style={panelStyle}>
        <div style={panelInnerStyle}>
          <p
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 11,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9956A',
              margin: 0,
            }}
          >
            <SplitText text={isEn ? 'What is RTA Subscription' : 'RTA Subscriptionとは'} />
          </p>
          <div
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 'clamp(16px, 2.2vw, 28px)',
              lineHeight: 2,
              color: '#1C1A17',
              fontWeight: 300,
            }}
          >
            <SplitBlock lines={concept1Lines.slice(0, 2)} />
            <p
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
              <SplitText text={concept1Lines[2]} />
            </p>
          </div>
        </div>
      </section>

      {/* 3. Concept 2 */}
      <section className="about-panel" style={panelStyle}>
        <div style={panelInnerStyle}>
          <div
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 'clamp(16px, 2.2vw, 28px)',
              lineHeight: 2.2,
              color: '#9A948C',
              fontWeight: 300,
            }}
          >
            <SplitBlock lines={concept2Lines} />
          </div>
        </div>
      </section>

      {/* 4. Philosophy */}
      <section className="about-panel" style={panelStyle}>
        <div style={panelInnerStyle}>
          <p
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 11,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9956A',
              margin: 0,
            }}
          >
            <SplitText text="RTA Subscription Philosophy" />
          </p>
          <p
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 'clamp(18px, 2.5vw, 32px)',
              lineHeight: 1.9,
              color: '#1C1A17',
              fontWeight: 300,
              margin: 0,
            }}
          >
            <SplitText text={isEn ? 'We do not let technique end as "sensation".' : '技術を"感覚"で終わらせない。'} />
          </p>
        </div>
      </section>

      {/* 5. Observation */}
      <section className="about-panel" style={panelStyle}>
        <div style={panelInnerStyle}>
          <p
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 'clamp(15px, 2vw, 24px)',
              lineHeight: 2.4,
              color: '#9A948C',
              fontWeight: 300,
              margin: 0,
            }}
          >
            <SplitText text={observationText} />
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
          <SplitText text="The blade does not cut hair. It listens to the weight that asks to fall." />
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
