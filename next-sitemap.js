module.exports = {
  siteUrl: 'https://lcar.pl',
  priority: 1.0,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://lcar.pl/server-sitemap.xml'],
  },
};
