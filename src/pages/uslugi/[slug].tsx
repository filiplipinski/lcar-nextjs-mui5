import type { NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Typography, Container } from '@mui/material';
import Image from 'next/image';

import { getServiceEntry } from 'src/lib/contentful/api';
import { offersData } from 'src/modules/home/components/Offers';
import { ServiceEntry } from 'src/lib/contentful/types';

export const ServicePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  service,
}) => {
  const { title, description, slug, gallery } = service;

  const imgSrc = `https:${gallery[0].fields.file.url}`;

  return (
    //   ZROBIC Z TEGO TEMPLATE!! z marginem TOP
    <Container sx={{ pt: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        {title}
      </Typography>

      <Typography>{description}</Typography>

      <Image src={imgSrc} alt={slug} width={500} height={400} />
    </Container>
  );
};

type Props = {
  service: ServiceEntry['fields'];
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug || '/';

  const serviceEntry = await getServiceEntry(slug);
  if (!serviceEntry) {
    return {
      notFound: true,
    };
  }

  return {
    props: { service: serviceEntry.fields },
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
