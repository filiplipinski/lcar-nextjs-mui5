import type { NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Typography, Container, Stack, Box, Grid } from '@mui/material';
import Image from 'next/image';

import { getService } from 'src/lib/contentful/api';
import { offersData } from 'src/modules/home/components/Offers';
import { Service } from 'src/lib/contentful/types';
import { navigationHeight } from 'src/common/components/navbar/Navbar';
import { renderRichText } from 'src/lib/contentful/richTextEditor/render';
import { buildUrl } from 'src/lib/contentful/utils';

export const ServicePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  service,
}) => {
  const { title, introduction, slug, mainImage, content, gallery } = service;
  // TODO: galeria. src są w: gallery[0].fields.file.url

  const mainImageSrc = buildUrl(mainImage.fields.file.url);

  console.log('service', service);

  // TODO: zrobic z tego template, bedzie to samo dla uslug i realizacji
  return (
    <Container sx={{ pt: `${navigationHeight}px`, mb: 6, mt: 8 }} maxWidth="lg">
      <Typography variant="h3" sx={{ mb: 4 }}>
        {title}
      </Typography>

      <Grid container direction="row" sx={{ mb: 4 }}>
        <Grid item xs={7} sx={{ pr: 2 }}>
          {renderRichText(introduction)}
        </Grid>

        {mainImageSrc && (
          <Grid item xs={5} sx={{ position: 'relative', minHeight: 300 }}>
            <Image src={mainImageSrc} alt={slug} layout="fill" objectFit="cover" />
          </Grid>
        )}
      </Grid>

      <div>{renderRichText(content)}</div>
    </Container>
  );
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
