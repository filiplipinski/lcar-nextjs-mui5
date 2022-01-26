import type { NextPage, GetStaticProps } from 'next';
import { Grid, Typography, Button } from '@mui/material';

import { Card } from 'src/common/components/Card';
import { Realization } from 'src/lib/contentful/types';
import { FlyIn } from 'src/lib/gsap/animations';
import { buildUrl } from 'src/lib/contentful/utils';
import { getAllRealizations } from 'src/lib/contentful/api';
import { Link } from 'src/common/components/Link';
import { PageTemplate } from 'src/common/components/PageTemplate';

type Props = {
  realizations: Realization[];
};

const crumbs = [{ name: 'Wszystkie realizacje' }];

export const AllRealizationsPage: NextPage<Props> = ({ realizations }) => {
  return (
    <PageTemplate title="Realizacje" crumbs={crumbs}>
      <Typography>Zobacz nasze najlepsze realizacje auto detailingu</Typography>

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
              <FlyIn direction="right" triggerOnScroll delay={index / 4} sx={{ height: '100%' }}>
                <Card
                  slug={realization.slug}
                  title={realization?.title || ''}
                  description={realization?.introduction || ''}
                  imgSrc={buildUrl(realization.mainImage?.fields.file.url)}
                />
              </FlyIn>
            </Grid>
          ))}
        </Grid>
      )}
    </PageTemplate>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const realizations = await getAllRealizations();

  return {
    props: { realizations },
  };
};

export default AllRealizationsPage;
