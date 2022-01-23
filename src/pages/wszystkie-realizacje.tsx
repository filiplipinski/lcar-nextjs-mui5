import type { NextPage, GetServerSideProps } from 'next';
import { Grid, Container, Typography, Button } from '@mui/material';
import { NextSeo } from 'next-seo';

import { Card } from 'src/common/components/Card';
import { Realization } from 'src/lib/contentful/types';
import { FlyIn } from 'src/lib/gsap/animations';
import { buildUrl } from 'src/lib/contentful/utils';
import { getAllRealizations } from 'src/lib/contentful/api';
import { navigationHeight } from 'src/common/components/navbar/Navbar';
import { Link } from 'src/common/components/Link';

type Props = {
  realizations: Realization[];
};

export const AllRealizationsPage: NextPage<Props> = ({ realizations }) => {
  // TODO: moze wydzielic taki podstawowy template, Container + Typography (uzywane tu i w /kontakt)

  return (
    <Container sx={{ pt: `${navigationHeight}px`, mb: 6, mt: 8 }} maxWidth="lg">
      <NextSeo title="Realizacje" />

      <Typography variant="h3">Realizacje</Typography>

      <Button
        LinkComponent={Link}
        href="/"
        variant="contained"
        size="small"
        color="secondary"
        sx={{ mt: 1 }}
      >
        Wróć do strony głównej
      </Button>

      {!realizations.length && (
        <Typography variant="h5" align="center" sx={{ mt: 4 }}>
          Brak wyników
        </Typography>
      )}

      {realizations.length && (
        <Grid container direction="row" spacing={4} sx={{ mt: 4 }}>
          {realizations.map((realization, index) => (
            <Grid item xs={12} sm={6} md={3} key={realization.slug}>
              <FlyIn direction="right" triggerOnScroll delay={index / 3} sx={{ height: '100%' }}>
                <Card
                  slug={realization.slug}
                  title={realization?.title || ''}
                  description={realization?.shortDescription || ''}
                  imgSrc={buildUrl(realization.mainImage?.fields.file.url)}
                />
              </FlyIn>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const realizations = await getAllRealizations();

  return {
    props: { realizations },
  };
};

export default AllRealizationsPage;
