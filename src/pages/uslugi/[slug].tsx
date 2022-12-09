import type { NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { getPlaiceholder } from 'plaiceholder';

import { getAllServices, getService, getServiceSlugs } from 'src/lib/contentful/api';
import { offersData } from 'src/modules/home/components/Offers';
import { Service } from 'src/lib/contentful/types';
import { BlogPostTemplate } from 'src/common/components/BlogPostTemplate';
import { buildUrl } from 'src/lib/contentful/utils';
import { AsideProps } from 'src/common/components/AsideMenu';

export const ServicePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  service,
  mainImageBlurDataURL,
  asideProps,
}) => {
  const crumbs = [{ name: 'Usługi', href: '/#uslugi' }, { name: service.title || '' }];

  return (
    <BlogPostTemplate
      data={service}
      mainImageBlurDataURL={mainImageBlurDataURL}
      crumbs={crumbs}
      asideProps={asideProps}
    />
  );
};

type Props = {
  service: Service;
  mainImageBlurDataURL?: string;
  asideProps: AsideProps;
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug || '/';

  const service = await getService(slug);

  if (!service) {
    return {
      notFound: true,
    };
  }

  const noOfServices = offersData.length;
  const otherServices = await getAllServices(noOfServices, slug);
  const asideProps: AsideProps = {
    type: 'uslugi',
    data: otherServices.map(({ slug, title, introduction, mainImage }) => {
      return {
        slug,
        title: title || '',
        description: introduction || '',
        imgSrc: buildUrl(mainImage?.fields.file.url) || '',
      };
    }),
  };

  const mainImageUrl = buildUrl(service.mainImage?.fields.file.url);
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
    props: { service, mainImageBlurDataURL, asideProps },
    revalidate: 60, // re-generate the page every 1min
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getServiceSlugs();

  const paths = slugs.map((slug) => {
    return {
      params: { slug },
    };
  });

  return { paths, fallback: false };
};

export default ServicePage;
