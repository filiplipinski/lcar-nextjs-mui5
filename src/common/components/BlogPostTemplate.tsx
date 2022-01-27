import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { SRLWrapper } from 'simple-react-lightbox';

import { Service, Realization } from 'src/lib/contentful/types';
import { PageTemplate } from 'src/common/components/PageTemplate';
import { renderRichText } from 'src/lib/contentful/richTextEditor/render';
import { buildUrl } from 'src/lib/contentful/utils';
import { Crumbs } from 'src/common/components/Breadcrumbs';
import { truncate } from '../utils/string';

type Props = {
  data: Service | Realization;
  mainImageBlurDataURL?: string;
  crumbs: Crumbs;
};

export const BlogPostTemplate = ({ data, mainImageBlurDataURL, crumbs }: Props) => {
  const { title, introduction, slug, mainImage, content, gallery } = data;
  const mainImageSrc = buildUrl(mainImage?.fields.file.url);

  return (
    <PageTemplate
      title={title || ''}
      description={truncate(introduction || '', 160)}
      crumbs={crumbs}
    >
      <Typography variant="subtitle1" sx={{ pb: 2 }}>
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
          <Image
            src={mainImageSrc}
            alt={slug}
            priority
            placeholder={mainImageBlurDataURL ? 'blur' : undefined}
            blurDataURL={mainImageBlurDataURL}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      )}

      <Box sx={{ mb: 6 }}>{renderRichText(content)}</Box>

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
                  <Image
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
