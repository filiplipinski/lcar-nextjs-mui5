import { Container, Typography, Grid } from '@mui/material';

import { Card } from 'src/common/components/Card';
import { AnchorElementsEnum } from 'src/common/components/navbar/Navbar.types';

const realizationsMock = [
  {
    title: 'Volvo v6',
    description: 'Renowacja tapicerki, usuwanie wgnieceń oraz czyszczenie srodka',
    imgSrc: '/img/realizations/bmw.jpg',
  },
  {
    title: 'BMW M3',
    description: 'Polerowanie lakieru - dzięki nałożeniu kilku warstw materiałów eliminujemy hałas',
    imgSrc: '/img/realizations/bmw.jpg',
  },
  {
    title: 'Honda Civic IX',
    description:
      'Połozenie warstwy ceramicznej - powłoka zapewnia przez hydrofobowość oraz zwiększenie gładkości lakieru',
    imgSrc: '/img/realizations/bmw.jpg',
  },
];

export const Realizations = () => {
  return (
    <Container id={AnchorElementsEnum.Realizations} sx={{ pt: 10, mb: 8 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        Realizacje
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
