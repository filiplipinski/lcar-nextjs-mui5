module.exports = {
  siteUrl: 'https://www.lcar.pl',
  priority: 1.0,
  exclude: ['/oferta/skoda'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/oferta/',
      },
    ],
  },
};
