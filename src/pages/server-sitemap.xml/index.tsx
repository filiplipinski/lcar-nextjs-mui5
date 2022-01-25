import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { getAllRealizations } from 'src/lib/contentful/api';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const realizations = await getAllRealizations();

  const fields = realizations.map((realization) => ({
    loc: `https://lcar.pl/realizacje/${realization.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => null;
