import { Container, Typography } from '@mui/material';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

import { navigationHeight } from 'src/common/components/navbar/Navbar';
import { Breadcrumbs, Crumbs } from 'src/common/components/Breadcrumbs';

type Props = {
  children: ReactNode;
  title: string;
  withSeo?: boolean;
  crumbs?: Crumbs;
};

export const PageTemplate = ({ title, withSeo = true, crumbs, children }: Props) => {
  return (
    <Container sx={{ pt: `${navigationHeight}px`, mb: 6, mt: 8 }} maxWidth="lg">
      {withSeo && <NextSeo title={title} />}

      {crumbs && <Breadcrumbs crumbs={crumbs} />}

      <Typography variant="h3" sx={{ pb: 2 }}>
        {title}
      </Typography>

      {children}
    </Container>
  );
};
