const HERO = {
  outer: '#C9BFAD',
  frame: '#F1EBDF',
  frameBorder: '#b8ac96',
  ink: '#2a2318',
  sub: '#6a6254',
};

const FRAME_CLIP = `polygon(
  0 16px, 16px 0,
  calc(38% - 8px) 0, 38% 7px, calc(38% + 8px) 0,
  calc(62% - 8px) 0, 62% 7px, calc(62% + 8px) 0,
  calc(100% - 16px) 0, 100% 16px,
  100% 40%, calc(100% - 7px) 44%, 100% 48%,
  100% calc(100% - 16px), calc(100% - 16px) 100%,
  62% 100%, calc(62% - 7px) calc(100% - 7px), calc(62% - 14px) 100%,
  16px 100%, 0 calc(100% - 16px),
  0 52%, 7px 48%, 0 44%
)`;

function Micro({ children, style, ink }) {
  return (
    <span
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 7,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: ink ? HERO.ink : HERO.sub,
        lineHeight: 1.5,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function CheckerFlag({ side = 'left' }) {
  const cells = side === 'left' ? [1, 0, 1, 0, 1] : [0, 1, 0, 1, 0];
  return (
    <div aria-hidden="true" style={{ display: 'flex', gap: 0 }}>
      {cells.map((on, i) => (
        <div
          key={i}
          style={{
            width: 5,
            height: 5,
            background: on ? HERO.ink : 'transparent',
            border: `0.5px solid ${HERO.frameBorder}`,
          }}
        />
      ))}
    </div>
  );
}

function CornerIndex({ left, right }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
        paddingTop: 10,
        borderTop: `0.5px solid ${HERO.frameBorder}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: HERO.frame, border: `0.5px solid ${HERO.ink}` }} />
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: HERO.ink }} />
        <Micro ink>{left}</Micro>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Micro ink>{right}</Micro>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: HERO.frame, border: `0.5px solid ${HERO.ink}` }} />
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: HERO.ink }} />
      </div>
    </div>
  );
}

export default function AboutHeroFrame({ isEn }) {
  return (
    <section
      className="about-hero about-page-top"
      style={{
        padding: '88px 16px 40px',
        background: HERO.outer,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        className="about-hero-frame about-fade-up"
        style={{
          width: '100%',
          maxWidth: 560,
          background: HERO.frame,
          border: `0.5px solid ${HERO.frameBorder}`,
          clipPath: FRAME_CLIP,
          WebkitClipPath: FRAME_CLIP,
          padding: '20px 18px 18px',
          color: HERO.ink,
        }}
      >
        {/* Top label row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
          }}
        >
          <Micro ink style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            n01 <span style={{ fontSize: 6 }}>✳</span>
          </Micro>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 6, color: HERO.sub, marginRight: 4 }}>✳</span>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 13,
                letterSpacing: '0.12em',
                color: HERO.ink,
              }}
            >
              RTA<sup style={{ fontSize: 7 }}>®</sup>
            </span>
            <span style={{ fontSize: 6, color: HERO.sub, marginLeft: 4 }}>✳</span>
          </div>
          <Micro ink style={{ textAlign: 'right' }}>
            <span style={{ fontSize: 6 }}>✳</span> m2026
          </Micro>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <CheckerFlag side="left" />
          <CheckerFlag side="right" />
        </div>

        {/* Photo */}
        <div style={{ position: 'relative', marginBottom: 8 }}>
          <img
            src="/about-hero.jpg"
            alt="Razor Tech Archive — About"
            style={{
              width: '100%',
              height: 190,
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
            fetchPriority="high"
            loading="eager"
            draggable={false}
          />
        </div>
        <Micro ink style={{ display: 'block', textAlign: 'center', marginBottom: 16 }}>
          Stealth Cut
        </Micro>

        {/* Title row */}
        <div
          className="about-hero-title-row"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1.4fr) auto minmax(0, 1fr)',
            alignItems: 'end',
            gap: 8,
            marginBottom: 10,
          }}
        >
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 300, color: HERO.ink, lineHeight: 1 }}>01</div>
            <Micro>{isEn ? 'Archive No.' : 'Archive No.'}</Micro>
          </div>
          <span style={{ color: HERO.sub, fontSize: 8, paddingBottom: 4 }}>✣</span>
          <h1
            className="about-animate-title"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(20px, 5vw, 28px)',
              fontWeight: 300,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: HERO.ink,
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            Stealth Cut
          </h1>
          <span style={{ color: HERO.sub, fontSize: 8, paddingBottom: 4 }}>✣</span>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 300, color: HERO.ink, lineHeight: 1 }}>26</div>
            <Micro>{isEn ? 'Date' : 'Date'}</Micro>
          </div>
        </div>

        <Micro ink style={{ display: 'block', textAlign: 'center', letterSpacing: '0.28em' }}>
          The Art of — RTA Manifesto
        </Micro>

        <CornerIndex left="17 / 37" right="28 / 23" />
      </div>

      <style>{`
        .about-hero-frame {
          clip-path: ${FRAME_CLIP};
          -webkit-clip-path: ${FRAME_CLIP};
        }
        @media (max-width: 768px) {
          .about-hero-title-row {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
          .about-hero-title-row > div:last-child {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
