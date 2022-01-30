import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { getPlaiceholder } from 'plaiceholder';

import { BlogPostTemplate } from 'src/common/components/BlogPostTemplate';
import { getRealization, getRealizationSlugs, getAllRealizations } from 'src/lib/contentful/api';
import { Realization } from 'src/lib/contentful/types';
import { buildUrl } from 'src/lib/contentful/utils';
import { AsideProps } from 'src/common/components/AsideMenu';

export const RealizationPage: NextPage<Props> = ({
  realization,
  mainImageBlurDataURL,
  asideProps,
}) => {
  const crumbs = [
    { name: 'Realizacje', href: '/wszystkie-realizacje' },
    { name: realization.title || '' },
  ];

  return (
    <BlogPostTemplate
      data={realization}
      mainImageBlurDataURL={mainImageBlurDataURL}
      crumbs={crumbs}
      asideProps={asideProps}
    />
  );
};

type Props = {
  realization: Realization;
  mainImageBlurDataURL?: string;
  asideProps: AsideProps;
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug || '/';

  const realization = await getRealization(slug);
  if (!realization) {
    return {
      notFound: true,
    };
  }

  const otherRealizations = await getAllRealizations(9, slug);
  const asideProps: AsideProps = {
    type: 'realizacje',
    data: otherRealizations.map(({ slug, title, introduction, mainImage }) => {
      return {
        slug,
        title: title || '',
        description: introduction || '',
        imgSrc: buildUrl(mainImage?.fields.file.url) || '',
      };
    }),
  };

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
    props: { realization, mainImageBlurDataURL, asideProps },
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
