module.exports = {
  siteUrl: 'https://www.lcar.pl',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.lcar.pl/server-sitemap.xml'],
  },
};
