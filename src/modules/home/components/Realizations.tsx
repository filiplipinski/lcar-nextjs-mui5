import { Container, Typography, Grid, Button } from '@mui/material';

import { Card } from 'src/common/components/Card';
import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';
import { Realization } from 'src/lib/contentful/types';
import { FadeUp, FlyIn } from 'src/lib/gsap/animations';
import { buildUrl } from 'src/lib/contentful/utils';
import { Link } from 'src/common/components/Link';

type Props = {
  realizations: Realization[];
};

export const Realizations = ({ realizations }: Props) => {
  return (
    <Container id={scrollToElementsId.realizations} sx={{ pt: 8, mb: 8 }}>
      <FadeUp triggerOnScroll>
        <Typography variant="h3" align="center" sx={{ mb: 2 }}>
          Realizacje
        </Typography>
      </FadeUp>

      <FadeUp triggerOnScroll>
        <Typography align="center">
          Sprawdź nasze najlepsze oraz najnowsze realizacje detailingu samochodów.
        </Typography>
      </FadeUp>

      <Grid container direction="row" spacing={4} sx={{ mt: 4 }}>
        {realizations.map((realization, index) => (
          <Grid item xs={12} sm={6} md={3} key={realization.slug}>
            <FlyIn direction="right" triggerOnScroll delay={index / 3} sx={{ height: '100%' }}>
              <Card
                slug={realization.slug}
                title={realization?.title || ''}
                description={realization?.shortDescription || ''}
                imgSrc={buildUrl(realization.mainImage?.fields.file.url)}
                withRibbon={!realization.isMainRealization} // bo są 3 glowne i jedna najnowsza
              />
            </FlyIn>
          </Grid>
        ))}
      </Grid>

      <Button
        LinkComponent={Link}
        href="/wszystkie-realizacje"
        variant="contained"
        size="large"
        color="secondary"
        sx={{ ml: 'auto', mt: 3, display: 'block', maxWidth: 325 }}
      >
        Zobacz wszystkie realizacje
      </Button>
    </Container>
  );
};
