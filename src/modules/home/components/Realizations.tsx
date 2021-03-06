import { Container, Typography, Grid, Button } from '@mui/material';

import { Card } from 'src/common/components/Card';
import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';
import { Realization } from 'src/lib/contentful/types';
import { FadeUp, FlyIn } from 'src/lib/gsap/animations';
import { buildUrl } from 'src/lib/contentful/utils';
import { Link } from 'src/common/components/Link';
import { mediaQueries } from 'src/styles/theme';

type Props = {
  realizations: Realization[];
};

export const Realizations = ({ realizations }: Props) => {
  return (
    <Container id={scrollToElementsId.realizations} sx={{ pt: 10 }}>
      <FadeUp triggerOnScroll>
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 4 }}>
          Realizacje
        </Typography>
      </FadeUp>

      <FadeUp triggerOnScroll>
        <Typography align="center" sx={{ mb: 4 }}>
          Sprawdź nasze najlepsze oraz najnowsze realizacje detailingu samochodów.
        </Typography>
      </FadeUp>

      <Grid container direction="row" spacing={4}>
        {realizations.map((realization, index) => (
          <Grid item xs={12} sm={6} md={3} key={realization.slug}>
            <FlyIn direction="right" triggerOnScroll delay={index / 3} sx={{ height: '100%' }}>
              <Card
                slug={realization.slug}
                title={realization?.title || ''}
                description={realization?.introduction || ''}
                imgSrc={buildUrl(realization?.mainImage?.fields.file.url)}
                imgSizes={`${mediaQueries.sm} 100vw, ${mediaQueries.md} 50vw, 25vw`}
                withRibbon={!realization?.isMainRealization} // bo są 3 glowne i jedna najnowsza
              />
            </FlyIn>
          </Grid>
        ))}
      </Grid>

      <FadeUp triggerOnScroll>
        <Button
          LinkComponent={Link}
          href="/wszystkie-realizacje"
          variant="contained"
          size="large"
          color="secondary"
          sx={{
            ml: 'auto',
            mt: 3,
            display: 'block',
            maxWidth: { xs: 'none', sm: 325 },
            textAlign: 'center',
          }}
        >
          Zobacz wszystkie realizacje
        </Button>
      </FadeUp>
    </Container>
  );
};
