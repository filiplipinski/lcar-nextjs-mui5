import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { SRLWrapper } from 'simple-react-lightbox';

import { Service, Realization } from 'src/lib/contentful/types';
import { PageTemplate } from 'src/common/components/PageTemplate';
import { renderRichText } from 'src/lib/contentful/richTextEditor/render';
import { buildUrl } from 'src/lib/contentful/utils';
import { Crumbs } from 'src/common/components/Breadcrumbs';

type Props = {
  data: Service | Realization;
  crumbs: Crumbs;
};

export const BlogPostTemplate = ({ data, crumbs }: Props) => {
  const { title, shortDescription, introduction, slug, mainImage, content, gallery } = data;
  const mainImageSrc = buildUrl(mainImage?.fields.file.url);

  return (
    <PageTemplate title={title || ''} description={shortDescription} crumbs={crumbs}>
      <Grid container direction="row" sx={{ mt: 2, mb: 4 }}>
        <Grid item xs={12} sm={6} sx={{ pb: { xs: 2, sm: 0 }, pr: { xs: 0, sm: 6 } }}>
          {renderRichText(introduction)}
        </Grid>

        {mainImageSrc && (
          <Grid item xs={12} sm={6} sx={{ position: 'relative', minHeight: 300 }}>
            <Image src={mainImageSrc} alt={slug} priority layout="fill" objectFit="cover" />
          </Grid>
        )}
      </Grid>

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
                    position: 'relative',
                    cursor: 'pointer',
                    m: 0,
                  }}
                >
                  <Image
                    src={buildUrl(file.url)}
                    alt={description}
                    width={file.details.image?.width ?? 300}
                    height={file.details.image?.height ?? 200}
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
