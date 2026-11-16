const { withPlaiceholder } = require('@plaiceholder/next');
const withPWA = require('@ducanh2912/next-pwa').default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  images: {
    minimumCacheTTL: 3600,
    remotePatterns: [{ protocol: 'https', hostname: 'images.ctfassets.net' }],
  },
};

module.exports = withPWA({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development',
})(withPlaiceholder(nextConfig));
