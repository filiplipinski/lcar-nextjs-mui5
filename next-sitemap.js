module.exports = {
  siteUrl: 'https://www.lcar.pl',
  priority: 1.0,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.lcar.pl/server-sitemap.xml'],
  },
};
