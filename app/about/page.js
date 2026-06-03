'use client';

import Nav from '../components/Nav';
import AboutHeroFrame from '../components/AboutHeroFrame';
import { useLang } from '../context/LangContext';
import { useGsapPageScroll } from '../hooks/useGsapPageScroll';

const C = {
  bg: '#F2EDE5',
  panel: '#EAE4DC',
  panelAlt: '#EDE7DF',
  text: '#2A2520',
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
  { src: '/about-1.jpg', captionEn: 'Observation', captionJa: '観察', flex: 1.2 },
  { src: '/about-2.jpg', captionEn: 'Flow', captionJa: '毛流れ', flex: 0.9 },
  { src: '/about-3.jpg', captionEn: 'Texture', captionJa: '質感', flex: 1 },
  { src: '/about-hero.jpg', captionEn: 'Stillness', captionJa: '静寂', flex: 0.9 },
];

function SectionLabel({ children, style }) {
  return <span style={{ ...labelStyle, ...style }}>{children}</span>;
}

function GridCell({ src, caption, alt }) {
  return (
    <div
      className="about-grid-cell"
      style={{
        position: 'relative',
        flex: 1,
        minWidth: 0,
        height: 130,
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
        draggable={false}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '5px 8px',
          background: C.panelAlt,
          borderTop: `0.5px solid ${C.border}`,
        }}
      >
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 7,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: C.muted,
          }}
        >
          {caption}
        </span>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const mainRef = useGsapPageScroll();
  const { lang } = useLang();
  const isEn = lang === 'en';

  const heroTagline = isEn
    ? '"An Archive that Preserves Sensation"'
    : '"感覚を保存するArchive"';
  const heroLabel = isEn ? 'About / Manifesto' : 'About / Manifesto';
  const subtitle = isEn
    ? 'RTA Subscription is not simply an online salon.'
    : 'RTA Subscriptionは、単なるオンラインサロンではない。';
  const gridSectionLabel = isEn ? 'What is RTA Subscription' : 'RTA Subscriptionとは';
  const gridBody = isEn ? (
    <>
      Much beauty education teaches cutting methods, procedures, and styles. What RTA wants to preserve is how you see hair.
      <br /><br />
      At RTA, we theorize natural growth, hair flow, root direction, fall position, texture, and airiness—and translate them into reproducibility.
    </>
  ) : (
    <>
      多くの美容教育は、切り方・手順・スタイルを教える。しかしRTAが保存したいのは、髪の見方。
      <br /><br />
      RTAでは、生え癖・毛流れ・根元方向・落下位置・質感・空気感を理論化し、再現性へ落とし込む。
    </>
  );
  const splitLabel = isEn ? 'RTA Subscription Philosophy' : 'RTA Subscription Philosophy';
  const pullQuote = isEn
    ? 'We do not let technique end as "sensation".'
    : '技術を"感覚"で終わらせない。';
  const manifestoQuote =
    'The blade does not cut hair. It listens to the weight that asks to fall.';
  const archiveLine = 'Archive-Based Education System';

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

      <AboutHeroFrame
        isEn={isEn}
        heroLabel={heroLabel}
        heroTagline={heroTagline}
        archiveLine={archiveLine}
      />

      {/* 2. Subtitle */}
      <section
        id="intro"
        className="about-intro"
        style={{
          padding: '50px 24px',
          textAlign: 'center',
          background: C.bg,
          borderTop: `0.5px solid ${C.border}`,
        }}
      >
        <p
          className="about-fade-up"
          style={{
            fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
            fontSize: 11,
            lineHeight: 2,
            color: C.muted,
            maxWidth: 280,
            margin: '0 auto',
          }}
        >
          {subtitle}
        </p>
      </section>

      {/* 3. Photo grid */}
      <section
        className="about-grid-section"
        style={{
          padding: '44px 24px 48px',
          background: C.panelAlt,
          borderTop: `0.5px solid ${C.border}`,
        }}
      >
        <div
          className="about-fade-up"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
            gap: 16,
          }}
        >
          <SectionLabel>{gridSectionLabel}</SectionLabel>
          <a
            href="/members"
            style={{
              ...labelStyle,
              color: C.muted,
              textDecoration: 'none',
            }}
          >
            More
          </a>
        </div>

        <div
          className="about-photo-grid about-fade-up"
          style={{ display: 'flex', gap: 3, marginBottom: 20 }}
        >
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

        <p
          className="about-fade-up"
          style={{
            fontFamily: "'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
            fontSize: 11,
            lineHeight: 2.1,
            color: C.muted,
            maxWidth: 520,
            margin: 0,
          }}
        >
          {gridBody}
        </p>
      </section>

      {/* 4. Split — archive quote + philosophy */}
      <section
        className="about-split"
        style={{
          display: 'flex',
          borderTop: `0.5px solid ${C.border}`,
        }}
      >
        <div
          className="about-split-photo about-fade-up"
          style={{
            width: '55%',
            flexShrink: 0,
            minHeight: 280,
            overflow: 'hidden',
          }}
        >
          <img
            src="/about-2.jpg"
            alt={isEn ? 'Razor technique detail' : 'レザーカットのディテール'}
            style={{
              width: '100%',
              height: '100%',
              minHeight: 280,
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
            draggable={false}
          />
        </div>
        <div
          className="about-split-text about-fade-up"
          style={{
            flex: 1,
            background: C.panel,
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 28,
          }}
        >
          <SectionLabel>{splitLabel}</SectionLabel>
          <blockquote
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(22px, 3.2vw, 34px)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.45,
              color: C.text,
              margin: 0,
              letterSpacing: '-0.01em',
              border: 'none',
              padding: 0,
            }}
          >
            {pullQuote}
          </blockquote>
        </div>
      </section>

      {/* 5. Manifesto */}
      <section
        id="manifesto"
        className="about-manifesto-closer"
        style={{
          padding: '52px 24px 48px',
          textAlign: 'center',
          background: C.bg,
          borderTop: `0.5px solid ${C.border}`,
        }}
      >
        <span
          className="about-fade-up"
          aria-hidden="true"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(48px, 10vw, 80px)',
            lineHeight: 1,
            color: C.border,
            display: 'block',
            marginBottom: 8,
          }}
        >
          &ldquo;
        </span>
        <p
          className="about-fade-up"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(22px, 4vw, 38px)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.5,
            color: C.text,
            maxWidth: 640,
            margin: '0 auto 28px',
            letterSpacing: '-0.02em',
          }}
        >
          {manifestoQuote}
        </p>
        <div
          className="about-fade-up"
          aria-hidden="true"
          style={{
            width: 24,
            height: '0.5px',
            background: C.border,
            margin: '0 auto 20px',
          }}
        />
        <p
          className="about-fade-up"
          style={{
            ...labelStyle,
            margin: 0,
            color: C.muted,
          }}
        >
          RTA Manifesto, 2026
        </p>
      </section>

      {/* 6. Footer */}
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
        <span
          style={{
            ...labelStyle,
            color: C.text,
            fontSize: 7,
            letterSpacing: '0.24em',
          }}
        >
          Razor Tech Archive
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          <a
            href="#"
            style={{
              ...labelStyle,
              fontSize: 7,
              letterSpacing: '0.24em',
              color: C.muted,
              textDecoration: 'none',
            }}
          >
            Instagram
          </a>
          <span style={{ ...labelStyle, fontSize: 7, color: C.border }}>/</span>
          <a
            href="#"
            style={{
              ...labelStyle,
              fontSize: 7,
              letterSpacing: '0.24em',
              color: C.muted,
              textDecoration: 'none',
            }}
          >
            YouTube
          </a>
        </div>
      </footer>

      <style>{`
        .about-page .site-nav {
          background: rgba(52, 51, 48, 0.35) !important;
          backdrop-filter: blur(8px) !important;
          border-bottom: 0.5px solid rgba(200, 192, 180, 0.25) !important;
          display: flex !important;
          justify-content: space-between !important;
          padding: 22px 24px !important;
        }
        .about-page .site-nav .site-logo {
          color: #E8DFD0 !important;
        }
        .about-page .site-nav button span {
          background: #E8DFD0 !important;
        }
        .about-page .site-nav svg {
          stroke: #E8DFD0 !important;
        }
        .about-page .site-nav > button {
          order: 1;
        }
        .about-page .site-nav > div:nth-of-type(1) {
          order: 2;
          text-align: left !important;
          flex: 1;
          padding-left: 16px;
        }
        .about-page .site-nav > div:nth-of-type(2) {
          order: 3;
        }
        .about-page .site-nav > div:nth-of-type(2) button[aria-label="Account"],
        .about-page .site-nav > div:nth-of-type(2) a[aria-label="Cart"] {
          display: none !important;
        }
        .about-page .site-nav > div:nth-of-type(2) > div[role="group"] {
          border: 0.5px solid rgba(200, 192, 180, 0.45) !important;
          background: rgba(52, 51, 48, 0.4) !important;
        }
        .about-page .site-nav > div:nth-of-type(2) > div[role="group"] button {
          color: #E8DFD0 !important;
        }
        .about-page .site-nav > div:nth-of-type(2) > div[role="group"] button[style*="background: rgb(28, 26, 23)"],
        .about-page .site-nav > div:nth-of-type(2) > div[role="group"] button[style*="#1C1A17"] {
          background: #E8DFD0 !important;
          color: ${C.text} !important;
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 80px 12px 24px !important;
          }
          .about-hero-frame-top {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
          .about-hero-frame-top span:last-child {
            text-align: center !important;
          }
          .about-hero-bottom {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
          .about-hero-bottom > div:first-child,
          .about-hero-bottom > div:last-child {
            justify-self: center !important;
            text-align: center !important;
          }
          .about-intro {
            padding: 40px 20px !important;
          }
          .about-grid-section {
            padding: 36px 20px 40px !important;
          }
          .about-photo-grid {
            flex-wrap: wrap;
          }
          .about-photo-grid > div {
            flex: 1 1 calc(50% - 2px) !important;
            min-width: calc(50% - 2px);
          }
          .about-grid-cell {
            height: 100px !important;
          }
          .about-split {
            flex-direction: column;
          }
          .about-split-photo {
            width: 100% !important;
            min-height: 220px !important;
          }
          .about-split-text {
            padding: 36px 24px !important;
          }
          .about-manifesto-closer {
            padding: 44px 20px 40px !important;
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
