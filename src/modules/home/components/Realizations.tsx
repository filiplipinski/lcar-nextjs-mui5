import { Container, Typography, Grid } from '@mui/material';

import { Card } from 'src/common/components/Card';
import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';

const realizationsMock = [
  {
    slug: 'volvo-v12',
    title: 'Volvo v6',
    description: 'Renowacja tapicerki, usuwanie wgnieceń oraz czyszczenie srodka',
    imgSrc: '/img/realizations/bmw.jpg',
  },
  {
    slug: 'bmw-x6',
    title: 'BMW M3',
    description: 'Polerowanie lakieru - dzięki nałożeniu kilku warstw materiałów eliminujemy hałas',
    imgSrc: '/img/realizations/bmw.jpg',
  },
  {
    slug: 'honda-civic-ix',
    title: 'Honda Civic IX',
    description:
      'Połozenie warstwy ceramicznej - powłoka zapewnia przez hydrofobowość oraz zwiększenie gładkości lakieru',
    imgSrc: '/img/realizations/bmw.jpg',
  },
];

export const Realizations = () => {
  return (
    <Container id={scrollToElementsId.realizations} sx={{ pt: 8, mb: 8 }}>
      <Typography variant="h3" align="center" sx={{ mb: 2 }}>
        Realizacje
      </Typography>

      <Typography align="center">
        Sprawdź nasze najlepsze, takze najnowsze realizacje detailingu samochodów.
      </Typography>

      <Grid container direction="row" spacing={4} sx={{ mt: 4 }}>
        {realizationsMock.map((offerCardProps) => (
          <Grid item key={offerCardProps.title}>
            <Card {...offerCardProps} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
