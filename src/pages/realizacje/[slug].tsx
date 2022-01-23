import type { NextPage, GetServerSideProps } from 'next';
import { BlogPostTemplate } from 'src/common/components/BlogPostTemplate';

import { getRealization } from 'src/lib/contentful/api';
import { Realization } from 'src/lib/contentful/types';

export const RealizationPage: NextPage<Props> = ({ realization }) => {
  return (
    <BlogPostTemplate
      data={realization}
      breadcrumbsProps={{ type: 'realizations', lastCrumbName: realization.title }}
    />
  );
};

type Props = {
  realization: Realization;
};

export const getServerSideProps: GetServerSideProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug || '/';

  const realization = await getRealization(slug);
  if (!realization) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { realization },
  };
};

export default RealizationPage;
