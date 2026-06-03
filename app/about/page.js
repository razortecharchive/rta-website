'use client';

import Nav from '../components/Nav';
import AboutHeroFrame from '../components/AboutHeroFrame';
import { useLang } from '../context/LangContext';
import { useGsapPageScroll } from '../hooks/useGsapPageScroll';

const C = {
  bg: '#F4F0E8',
  panel: '#EAE4DC',
  panelAlt: '#EDE7DF',
  text: '#2C2823',
  muted: '#8A8278',
  border: '#C8C0B4',
};

const labelStyle = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 8,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: C.muted,
};

const gridPhotos = [
  { src: '/about-1.jpg', captionEn: 'Observation', captionJa: '観察', flex: 1.15 },
  { src: '/about-2.jpg', captionEn: 'Flow', captionJa: '毛流れ', flex: 0.9 },
  { src: '/about-3.jpg', captionEn: 'Texture', captionJa: '質感', flex: 1 },
  { src: '/about-hero.jpg', captionEn: 'Stillness', captionJa: '静寂', flex: 0.9 },
];

function SectionLabel({ children, style, className }) {
  return (
    <span className={className} style={{ ...labelStyle, ...style }}>
      {children}
    </span>
  );
}

function GridCell({ src, caption, alt }) {
  return (
    <div style={{ position: 'relative', minWidth: 0, height: 96, overflow: 'hidden' }}>
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        draggable={false}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '4px 6px',
          background: C.panelAlt,
          borderTop: `0.5px solid ${C.border}`,
        }}
      >
        <span style={{ ...labelStyle, fontSize: 6 }}>{caption}</span>
      </div>
    </div>
  );
}

function TextButton({ href, children }) {
  return (
    <a
      href={href}
      style={{
        ...labelStyle,
        fontSize: 7,
        color: C.text,
        textDecoration: 'none',
        border: `0.5px solid ${C.border}`,
        padding: '10px 16px',
        display: 'inline-block',
      }}
    >
      {children}
    </a>
  );
}

export default function AboutPage() {
  const mainRef = useGsapPageScroll();
  const { lang } = useLang();
  const isEn = lang === 'en';

  const heroTagline = isEn
    ? '"An Archive that Preserves Sensation"'
    : '"感覚を保存するArchive"';
  const introLine = isEn
    ? 'RTA Subscription is not simply an online salon.'
    : 'RTA Subscriptionは、単なるオンラインサロンではない。';
  const gridSectionLabel = isEn ? 'What is RTA Subscription' : 'RTA Subscriptionとは';
  const midBody = isEn
    ? 'Much beauty education teaches cutting methods, procedures, and styles. What RTA wants to preserve is how you see hair.'
    : '多くの美容教育は、切り方・手順・スタイルを教える。しかしRTAが保存したいのは、髪の見方。';
  const observationBody = isEn
    ? 'At RTA, we theorize natural growth, hair flow, root direction, fall position, texture, and airiness—and translate them into reproducibility.'
    : 'RTAでは、生え癖・毛流れ・根元方向・落下位置・質感・空気感を理論化し、再現性へ落とし込む。';
  const pullQuote = isEn
    ? 'We do not let technique end as "sensation".'
    : '技術を"感覚"で終わらせない。';
  const manifestoQuote =
    'The blade does not cut hair. It listens to the weight that asks to fall.';

  return (
    <main
      ref={mainRef}
      className="about-page"
      style={{
        background: C.bg,
        minHeight: '100vh',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 200,
        color: C.text,
      }}
    >
      <Nav />

      {/* ① Hero ticket frame */}
      <AboutHeroFrame isEn={isEn} />

      {/* ② Centered title */}
      <section
        className="about-title-block"
        style={{
          padding: '50px 24px',
          textAlign: 'center',
          background: C.bg,
          borderTop: `0.5px solid ${C.border}`,
        }}
      >
        <h2
          className="about-fade-up"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: C.text,
            margin: 0,
          }}
        >
          The Art of <em style={{ fontStyle: 'italic' }}>Stealth</em> Cut.
        </h2>
      </section>

      {/* ③ Intro row */}
      <section
        id="intro"
        className="about-intro-row about-fade-up"
        style={{
          padding: '44px 24px',
          background: C.panelAlt,
          borderTop: `0.5px solid ${C.border}`,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
            fontSize: 11,
            lineHeight: 2,
            color: C.muted,
            margin: 0,
            flex: '1 1 240px',
            maxWidth: 480,
          }}
        >
          {introLine} {heroTagline}
        </p>
        <TextButton href="#grid">View All</TextButton>
      </section>

      {/* ④ Photo grid */}
      <section
        id="grid"
        className="about-grid-section"
        style={{
          padding: '44px 24px 48px',
          background: C.bg,
          borderTop: `0.5px solid ${C.border}`,
        }}
      >
        <div
          className="about-fade-up"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, gap: 16 }}
        >
          <SectionLabel>{gridSectionLabel}</SectionLabel>
          <a href="/members" style={{ ...labelStyle, color: C.muted, textDecoration: 'none' }}>
            More
          </a>
        </div>
        <div className="about-photo-grid about-fade-up" style={{ display: 'flex', gap: 4, marginBottom: 0 }}>
          {gridPhotos.map((photo) => (
            <div key={photo.src} style={{ flex: photo.flex, minWidth: 0 }}>
              <GridCell
                src={photo.src}
                caption={isEn ? photo.captionEn : photo.captionJa}
                alt={isEn ? photo.captionEn : photo.captionJa}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ⑤ Mid — text + portrait */}
      <section
        className="about-mid"
        style={{
          padding: '48px 24px 52px',
          background: C.panel,
          borderTop: `0.5px solid ${C.border}`,
          textAlign: 'center',
        }}
      >
        <SectionLabel className="about-fade-up" style={{ display: 'block', marginBottom: 24 }}>
          {gridSectionLabel}
        </SectionLabel>
        <p
          className="about-fade-up"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(16px, 2.4vw, 22px)',
            fontWeight: 300,
            lineHeight: 1.75,
            color: C.text,
            maxWidth: 520,
            margin: '0 auto 28px',
          }}
        >
          {midBody}
        </p>
        <div className="about-fade-up" style={{ margin: '0 auto 24px', width: 150, height: 180, overflow: 'hidden' }}>
          <img
            src="/about-1.jpg"
            alt={isEn ? 'Archive portrait' : 'アーカイブポートレート'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            draggable={false}
          />
        </div>
        <p
          className="about-fade-up"
          style={{
            fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
            fontSize: 10,
            lineHeight: 2,
            color: C.muted,
            maxWidth: 480,
            margin: '0 auto 28px',
          }}
        >
          {observationBody}
        </p>
        <TextButton href="#philosophy">Philosophy</TextButton>
      </section>

      {/* ⑥ Editorial split */}
      <section
        id="philosophy"
        className="about-editorial"
        style={{
          padding: '48px 24px 52px',
          background: C.bg,
          borderTop: `0.5px solid ${C.border}`,
          display: 'flex',
          gap: 32,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div className="about-fade-up" style={{ width: 150, height: 200, flexShrink: 0, overflow: 'hidden' }}>
          <img
            src="/about-2.jpg"
            alt={isEn ? 'Technique detail' : '技術のディテール'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            draggable={false}
          />
        </div>
        <div className="about-fade-up" style={{ flex: '1 1 220px', minWidth: 0 }}>
          <SectionLabel style={{ display: 'block', marginBottom: 20, color: C.text }}>
            RTA Subscription Philosophy
          </SectionLabel>
          <p
            style={{
              fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize: 12,
              lineHeight: 2,
              color: C.text,
              margin: '0 0 24px',
            }}
          >
            {pullQuote}
          </p>
          <div style={{ width: 96, height: 72, overflow: 'hidden', marginBottom: 24 }}>
            <img
              src="/about-3.jpg"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              draggable={false}
            />
          </div>
          <blockquote
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(18px, 2.8vw, 24px)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.55,
              color: C.text,
              margin: '0 0 16px',
              padding: 0,
              border: 'none',
            }}
          >
            {manifestoQuote}
          </blockquote>
          <SectionLabel>— RTA Manifesto, 2026</SectionLabel>
        </div>
      </section>

      {/* ⑦ Footer */}
      <footer
        className="site-footer about-fade-up"
        style={{
          padding: '22px 24px',
          borderTop: `0.5px solid ${C.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          background: C.bg,
        }}
      >
        <span style={{ ...labelStyle, color: C.text, fontSize: 7, letterSpacing: '0.24em' }}>
          Razor Tech Archive
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="#" style={{ ...labelStyle, fontSize: 7, letterSpacing: '0.24em', color: C.muted, textDecoration: 'none' }}>
            Instagram
          </a>
          <span style={{ ...labelStyle, fontSize: 7, color: C.border }}>/</span>
          <a href="#" style={{ ...labelStyle, fontSize: 7, letterSpacing: '0.24em', color: C.muted, textDecoration: 'none' }}>
            YouTube
          </a>
        </div>
      </footer>

      <style>{`
        .about-page .site-nav {
          background: rgba(244, 240, 232, 0.72) !important;
          backdrop-filter: blur(6px) !important;
          border-bottom: 0.5px solid ${C.border} !important;
        }
        .about-page .site-nav .site-logo,
        .about-page .site-nav button span {
          color: ${C.text} !important;
        }
        .about-page .site-nav button span {
          background: ${C.text} !important;
        }
        .about-page .site-nav svg {
          stroke: ${C.text} !important;
        }
        .about-page .site-nav > div:nth-of-type(2) button[aria-label="Account"],
        .about-page .site-nav > div:nth-of-type(2) a[aria-label="Cart"] {
          display: none !important;
        }

        @media (max-width: 768px) {
          .about-intro-row {
            flex-direction: column;
            align-items: flex-start !important;
          }
          .about-photo-grid {
            flex-wrap: wrap;
          }
          .about-photo-grid > div {
            flex: 1 1 calc(50% - 2px) !important;
            min-width: calc(50% - 2px);
          }
          .about-editorial {
            flex-direction: column;
            align-items: center;
          }
          .about-page .site-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
