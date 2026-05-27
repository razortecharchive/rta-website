/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100],
    minimumCacheTTL: 60,
    unoptimized: false,
  },
};

export default nextConfig;
