import { Container, Typography, Box, Grid } from '@mui/material';
import { NextSeo, NextSeoProps } from 'next-seo';
import { ReactNode } from 'react';

import { navigationHeight } from 'src/common/components/navbar/Navbar';
import { Breadcrumbs, Crumbs } from 'src/common/components/Breadcrumbs';
import { AsideMenu, AsideProps } from './AsideMenu';

type Props = {
  children: ReactNode;
  title?: string;
  nextSeoProps?: NextSeoProps;
  asideProps?: AsideProps;
  crumbs?: Crumbs;
};

export const PageTemplate = ({ title, nextSeoProps, asideProps, crumbs, children }: Props) => {
  return (
    <Container sx={{ pt: `${navigationHeight}px`, mb: 6, mt: 4 }} maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item xs={12} md={asideProps ? 9 : undefined}>
          <Box
            component="article"
            itemScope
            itemType="http://schema.org/Article"
            sx={{
              backgroundColor: 'common.white',
              px: { xs: 2, md: 6 },
              py: 5,
              borderRadius: '10px',
            }}
          >
            {nextSeoProps && <NextSeo {...nextSeoProps} />}

            {crumbs && <Breadcrumbs crumbs={crumbs} />}

            {title && (
              <Typography variant="h3" itemProp="name headline" sx={{ pb: 2 }}>
                {title}
              </Typography>
            )}

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
