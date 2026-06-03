const FRAME = '#E8DFD0';
const INK = '#2A2520';
const MUTED = '#8A8278';
const OUTER = '#343330';

function Micro({ children, style }) {
  return (
    <span
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 7,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: MUTED,
        lineHeight: 1.6,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function Crosshair({ style }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={style}>
      <circle cx="7" cy="7" r="4.5" fill="none" stroke={INK} strokeWidth="0.5" />
      <line x1="7" y1="0" x2="7" y2="14" stroke={INK} strokeWidth="0.5" />
      <line x1="0" y1="7" x2="14" y2="7" stroke={INK} strokeWidth="0.5" />
      <circle cx="7" cy="7" r="0.8" fill={INK} />
    </svg>
  );
}

function Checker({ style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 5px)',
        gridTemplateRows: 'repeat(2, 5px)',
        ...style,
      }}
    >
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          style={{
            width: 5,
            height: 5,
            background: i % 2 === 0 ? INK : 'transparent',
          }}
        />
      ))}
    </div>
  );
}

export default function AboutHeroFrame({
  isEn,
  heroLabel,
  heroTagline,
  archiveLine,
}) {
  const imageLabel = isEn ? 'Stealth Cut' : 'Stealth Cut';
  const posterSub = isEn ? 'Manifesto' : 'Manifesto';

  return (
    <section
      className="about-hero about-page-top"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '88px 16px 32px',
        background: OUTER,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="about-hero-frame about-fade-up"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 920,
          background: FRAME,
          borderRadius: 22,
          padding: '18px 18px 22px',
          color: INK,
        }}
      >
        {/* Top metadata row */}
        <div
          className="about-hero-frame-top"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'start',
            gap: 12,
            marginBottom: 14,
          }}
        >
          <Micro style={{ justifySelf: 'start' }}>Razor Tech Archive</Micro>
          <div style={{ textAlign: 'center', justifySelf: 'center' }}>
            <div style={{ fontSize: 6, color: MUTED, marginBottom: 4, letterSpacing: '0.3em' }}>▼</div>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: INK,
              }}
            >
              RTA
            </div>
          </div>
          <Micro style={{ justifySelf: 'end', textAlign: 'right' }}>{heroLabel}</Micro>
        </div>

        {/* Decorative row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            padding: '0 4px',
          }}
        >
          <Checker />
          <Micro>{archiveLine}</Micro>
          <Checker />
        </div>

        {/* Image window */}
        <div
          className="about-hero-window"
          style={{
            position: 'relative',
            marginBottom: 0,
          }}
        >
          <Crosshair style={{ position: 'absolute', top: 8, left: 8, zIndex: 3, opacity: 0.55 }} />
          <Crosshair style={{ position: 'absolute', top: 8, right: 8, zIndex: 3, opacity: 0.55 }} />

          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 4,
              background: FRAME,
              padding: '6px 20px 8px',
              clipPath: 'polygon(8% 0, 92% 0, 100% 100%, 0 100%)',
              minWidth: 140,
              textAlign: 'center',
            }}
          >
            <Micro style={{ color: INK, letterSpacing: '0.28em' }}>{imageLabel}</Micro>
          </div>

          <div
            className="about-parallax-wrap"
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(240px, 42vh, 420px)',
              overflow: 'hidden',
              clipPath:
                'polygon(0 6%, 34% 6%, 38% 0, 62% 0, 66% 6%, 100% 6%, 100% 94%, 66% 94%, 62% 100%, 38% 100%, 34% 94%, 0 94%)',
            }}
          >
            <div className="parallax-image-inner" style={{ position: 'absolute', inset: 0 }}>
              <img
                src="/about-hero.jpg"
                alt="Razor Tech Archive — About"
                className="hero-image"
                fetchPriority="high"
                loading="eager"
                draggable={false}
              />
            </div>
          </div>

          <Crosshair style={{ position: 'absolute', bottom: 8, left: 8, zIndex: 3, opacity: 0.55 }} />
          <Crosshair style={{ position: 'absolute', bottom: 8, right: 8, zIndex: 3, opacity: 0.55 }} />

          <Micro
            style={{
              position: 'absolute',
              left: 12,
              bottom: -18,
              zIndex: 2,
              fontSize: 6,
            }}
          >
            n01
          </Micro>
          <Micro
            style={{
              position: 'absolute',
              right: 12,
              bottom: -18,
              zIndex: 2,
              fontSize: 6,
            }}
          >
            m2026
          </Micro>
        </div>

        {/* Bottom title block */}
        <div
          className="about-hero-bottom"
          style={{
            marginTop: 28,
            paddingTop: 20,
            borderTop: `0.5px solid ${MUTED}`,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
            alignItems: 'end',
            gap: 12,
          }}
        >
          <div style={{ justifySelf: 'start' }}>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 22,
                fontWeight: 300,
                lineHeight: 1,
                color: INK,
                marginBottom: 4,
              }}
            >
              01
            </div>
            <Micro>{isEn ? 'Archive No.' : 'Archive No.'}</Micro>
          </div>

          <div style={{ textAlign: 'center', justifySelf: 'center', maxWidth: 420 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 8, color: MUTED }}>✦</span>
              <h1
                className="about-animate-title"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(22px, 4.5vw, 36px)',
                  fontWeight: 300,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: INK,
                  margin: 0,
                  lineHeight: 1.05,
                }}
              >
                The Art of <em style={{ fontStyle: 'italic', textTransform: 'none' }}>Stealth</em> Cut.
              </h1>
              <span style={{ fontSize: 8, color: MUTED }}>✦</span>
            </div>
            <Micro style={{ display: 'block', marginBottom: 6 }}>{posterSub}</Micro>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(11px, 2vw, 13px)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: MUTED,
                margin: 0,
                letterSpacing: '0.02em',
                lineHeight: 1.5,
              }}
            >
              {heroTagline}
            </p>
          </div>

          <div style={{ justifySelf: 'end', textAlign: 'right' }}>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 22,
                fontWeight: 300,
                lineHeight: 1,
                color: INK,
                marginBottom: 4,
              }}
            >
              2026
            </div>
            <Micro>{isEn ? 'Date' : 'Date'}</Micro>
          </div>
        </div>

        {/* Corner stars */}
        <span aria-hidden="true" style={{ position: 'absolute', left: 14, bottom: 14, fontSize: 9, color: MUTED }}>
          ✦
        </span>
        <span aria-hidden="true" style={{ position: 'absolute', right: 14, bottom: 14, fontSize: 9, color: MUTED }}>
          ✦
        </span>
      </div>
    </section>
  );
}
