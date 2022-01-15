// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlaiceholder } = require('@plaiceholder/next');

/** @type {import('next').NextConfig} */
module.exports = withPlaiceholder({
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
});
