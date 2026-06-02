export default function HeroImage({ src, alt, parallax = false, priority = false }) {
  const img = (
    <img
      src={src}
      alt={alt}
      className="hero-image"
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      loading={priority ? 'eager' : 'lazy'}
      draggable={false}
    />
  );

  if (parallax) {
    return (
      <div className="about-parallax-wrap hero-image-wrap">
        <div className="parallax-image-inner">{img}</div>
      </div>
    );
  }

  return <div className="hero-image-wrap">{img}</div>;
}
