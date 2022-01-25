import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { BlogPostTemplate } from 'src/common/components/BlogPostTemplate';

import { getRealization, getRealizationSlugs } from 'src/lib/contentful/api';
import { Realization } from 'src/lib/contentful/types';

export const RealizationPage: NextPage<Props> = ({ realization }) => {
  const crumbs = [
    { name: 'Realizacje', href: '/wszystkie-realizacje' },
    { name: realization.title || '' },
  ];

  return <BlogPostTemplate data={realization} crumbs={crumbs} />;
};

type Props = {
  realization: Realization;
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug || '/';

  const realization = await getRealization(slug);
  if (!realization) {
    return {
      notFound: true,
    };
  }

  return {
    props: { realization },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getRealizationSlugs();

  const paths = slugs.map((slug) => {
    return {
      params: { slug },
    };
  });

  return { paths, fallback: false };
};

export default RealizationPage;
