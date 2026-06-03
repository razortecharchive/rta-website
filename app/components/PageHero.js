import Image from 'next/image';

const HERO_GRADIENT =
  'linear-gradient(to bottom, rgba(28,26,23,0.2) 0%, rgba(28,26,23,0) 35%, rgba(237,235,229,0.3) 70%, rgba(237,235,229,1) 100%)';

export default function PageHero({
  src,
  alt,
  children,
  className = '',
  contentClassName = '',
  parallax = true,
  priority = false,
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      quality={100}
      priority={priority}
      sizes="100vw"
      style={{ objectFit: 'cover', objectPosition: 'center' }}
    />
  );

  return (
    <section
      className={`page-hero ${className}`.trim()}
      style={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
        borderBottom: '1px solid #C4BFB7',
      }}
    >
      {parallax ? (
        <div className="about-parallax-wrap hero-image-wrap">
          <div className="parallax-image-inner">{image}</div>
        </div>
      ) : (
        <div className="hero-image-wrap">{image}</div>
      )}

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: HERO_GRADIENT,
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {children ? (
        <div
          className={`page-hero-content about-page-top ${contentClassName}`.trim()}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '180px 80px 80px',
          }}
        >
          {children}
        </div>
      ) : null}
    </section>
  );
}
