import type { NextPage, GetServerSideProps } from 'next';
import { Grid, Container, Typography, Button } from '@mui/material';

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
  // TODO: breadcrumbs
  // TODO: moze wydzielic taki podstawowy template, Container + Typography (uzywane tu i w /kontakt)

  //   TODO !!!: obsluga bledu gdy nic nie ma, mysle ze to w kliencie, gdy pusty array to pokaz brak wynikow

  return (
    <Container sx={{ pt: `${navigationHeight}px`, mb: 6, mt: 8 }} maxWidth="lg">
      <Typography variant="h3">Wszystkie realizacje</Typography>

      <Button
        LinkComponent={Link}
        href="/"
        variant="contained"
        color="secondary"
        sx={{ ml: 'auto', mt: 3 }}
      >
        Wróć do strony głównej
      </Button>

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
