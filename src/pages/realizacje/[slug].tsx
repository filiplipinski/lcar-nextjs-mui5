import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { getPlaiceholder } from 'plaiceholder';

import { BlogPostTemplate } from 'src/common/components/BlogPostTemplate';
import { getRealization, getRealizationSlugs } from 'src/lib/contentful/api';
import { Realization } from 'src/lib/contentful/types';
import { buildUrl } from 'src/lib/contentful/utils';

export const RealizationPage: NextPage<Props> = ({ realization, mainImageBlurDataURL }) => {
  const crumbs = [
    { name: 'Realizacje', href: '/wszystkie-realizacje' },
    { name: realization.title || '' },
  ];

  return (
    <BlogPostTemplate
      data={realization}
      mainImageBlurDataURL={mainImageBlurDataURL}
      crumbs={crumbs}
    />
  );
};

type Props = {
  realization: Realization;
  mainImageBlurDataURL?: string;
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug || '/';

  const realization = await getRealization(slug);
  if (!realization) {
    return {
      notFound: true,
    };
  }

  const mainImageUrl = buildUrl(realization.mainImage?.fields.file.url);
  let mainImageBlurDataURL: string | undefined;

  try {
    if (mainImageUrl) {
      const { base64 } = await getPlaiceholder(mainImageUrl);
      mainImageBlurDataURL = base64;
    }
  } catch (err) {
    console.error('error in index.tsx -> getStaticProps', err);
  }

  return {
    props: { realization, mainImageBlurDataURL },
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
