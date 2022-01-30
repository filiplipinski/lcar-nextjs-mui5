import { Container, Typography, Box, Grid } from '@mui/material';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

import { navigationHeight } from 'src/common/components/navbar/Navbar';
import { Breadcrumbs, Crumbs } from 'src/common/components/Breadcrumbs';
import { AsideMenu, AsideProps } from './AsideMenu';

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  withSeo?: boolean;
  asideProps?: AsideProps;
  crumbs?: Crumbs;
};

export const PageTemplate = ({
  title,
  description,
  withSeo = true,
  asideProps,
  crumbs,
  children,
}: Props) => {
  return (
    <Container sx={{ pt: `${navigationHeight}px`, mb: 6, mt: 4 }} maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item xs={12} md={asideProps ? 9 : undefined}>
          <Box
            sx={{
              backgroundColor: 'common.white',
              px: { xs: 2, md: 6 },
              py: 5,
              borderRadius: '10px',
            }}
          >
            {withSeo && <NextSeo title={title} description={description} />}

            {crumbs && <Breadcrumbs crumbs={crumbs} />}

            <Typography variant="h3" sx={{ pb: 2 }}>
              {title}
            </Typography>

            {children}
          </Box>
        </Grid>

        {asideProps && (
          <Grid item xs={12} md={3}>
            <AsideMenu {...asideProps} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
