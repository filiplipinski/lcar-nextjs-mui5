import type { NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { getService } from 'src/lib/contentful/api';
import { offersData } from 'src/modules/home/components/Offers';
import { Service } from 'src/lib/contentful/types';
import { BlogPostTemplate } from 'src/common/components/BlogPostTemplate';

export const ServicePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  service,
}) => {
  const crumbs = [{ name: 'Usługi', href: '/#uslugi' }, { name: service.title || '' }];

  return <BlogPostTemplate data={service} crumbs={crumbs} />;
};

type Props = {
  service: Service;
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug || '/';

  const service = await getService(slug);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: { service },
    revalidate: 60, // re-generate the page every 1min
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const offerSlugs = offersData.map((offer) => offer.slug);

  const paths = offerSlugs.map((slug) => {
    return {
      params: { slug },
    };
  });

  return { paths, fallback: false };
};

export default ServicePage;
