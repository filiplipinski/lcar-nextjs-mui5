module.exports = {
  siteUrl: 'https://lcar.pl',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://lcar.pl/server-sitemap.xml'],
  },
};
