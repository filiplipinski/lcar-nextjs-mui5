/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const { withPlaiceholder } = require('@plaiceholder/next');
const withPWA = require('next-pwa');

const plaiceholderPlugin = withPlaiceholder({
  images: {
    domains: ['images.ctfassets.net'],
  },
});

const pwaPlugin = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    disable: process.env.NODE_ENV === 'development',
  },
});

const nextConfig = {
  reactStrictMode: true,
};

/** @type {import('next').NextConfig} */
module.exports = withPlugins([plaiceholderPlugin, pwaPlugin], nextConfig);
