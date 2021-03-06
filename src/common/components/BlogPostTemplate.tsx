import { Box, Grid, Typography } from '@mui/material';
import { SRLWrapper } from 'simple-react-lightbox';
import { NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';

import { Service, Realization } from 'src/lib/contentful/types';
import { PageTemplate } from 'src/common/components/PageTemplate';
import { renderRichText } from 'src/lib/contentful/richTextEditor/render';
import { buildUrl } from 'src/lib/contentful/utils';
import { Crumbs } from 'src/common/components/Breadcrumbs';
import { truncate } from '../utils/string';
import { AsideProps } from './AsideMenu';
import { LazyImage } from './LazyImage';
import { mediaQueries } from 'src/styles/theme';

type Props = {
  data: Service | Realization;
  mainImageBlurDataURL?: string;
  crumbs: Crumbs;
  asideProps: AsideProps;
};

export const BlogPostTemplate = ({ data, mainImageBlurDataURL, crumbs, asideProps }: Props) => {
  const { title, introduction, slug, mainImage, content, gallery } = data;
  const mainImageSrc = buildUrl(mainImage?.fields.file.url);
  const router = useRouter();

  const nextSeoProps: NextSeoProps = {
    title: title,
    description: truncate(introduction || '', 160),
    openGraph: {
      title: `${title} - Lcar Auto Detailing`,
      description: truncate(introduction || '', 160),
      type: 'website',
      locale: 'pl_PL',
      site_name: 'Lcar',
      url: `https://www.lcar.pl${router.asPath}`,
      images: [
        {
          url: mainImageSrc,
          alt: title,
          width: 1200,
          height: 627,
        },
      ],
    },
  };

  return (
    <PageTemplate
      title={title || ''}
      crumbs={crumbs}
      nextSeoProps={nextSeoProps}
      asideProps={asideProps}
    >
      <Typography variant="subtitle1" itemProp="description" sx={{ pb: 2 }}>
        {introduction}
      </Typography>

      {mainImageSrc && (
        <Box
          sx={{
            position: 'relative',
            height: { xs: 250, sm: 450 },
            width: 'auto',
            maxWidth: 750,
            mt: 2,
            mb: 4,
          }}
        >
          <LazyImage
            src={mainImageSrc}
            alt={slug}
            priority
            placeholder={mainImageBlurDataURL ? 'blur' : undefined}
            blurDataURL={mainImageBlurDataURL}
            layout="fill"
            sizes={`${mediaQueries.lg} 100vw, 60vw`}
            objectFit="cover"
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
          />
        </Box>
      )}

      <Box itemProp="articleBody" sx={{ mb: 6 }}>
        {renderRichText(content)}
      </Box>

      {gallery && (
        <SRLWrapper
          options={{
            buttons: {
              showAutoplayButton: false,
              showDownloadButton: false,
              showFullscreenButton: false,
              showThumbnailsButton: false,
            },
          }}
        >
          <Grid container spacing={1}>
            {gallery.map(({ fields }, index) => {
              const { file, description } = fields;

              return (
                <Grid
                  xs={6}
                  sm={4}
                  md={3}
                  item
                  key={`${file.url}-${index}`}
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  <LazyImage
                    src={buildUrl(file.url)}
                    alt={description}
                    width={300}
                    height={200}
                    quality={70}
                    layout="responsive"
                    objectFit="cover"
                  />
                </Grid>
              );
            })}
          </Grid>
        </SRLWrapper>
      )}
    </PageTemplate>
  );
};
