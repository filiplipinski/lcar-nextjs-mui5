import { Container, Typography, Stack, Box } from '@mui/material';

import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';
import { FadeUp, FlyIn } from 'src/lib/gsap/animations';
import { LazyImage } from 'src/common/components/LazyImage';

export const AboutCompany = () => {
  return (
    <Container id={scrollToElementsId.aboutCompany} sx={{ pt: 10 }}>
      <FadeUp triggerOnScroll>
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 4 }}>
          O firmie
        </Typography>
      </FadeUp>

      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          '& > *': {
            width: { xs: '100%', md: '50%' },
          },
        }}
      >
        <FadeUp triggerOnScroll>
          <Typography sx={{ mb: { xs: 6, md: 0 }, mr: { xs: 0, md: 4 } }}>
            Po 15 latach działania w branży motoryzacyjnej przyszła kolej na otwarcie własnego{' '}
            <strong>STUDIA AUTODETAILIGU</strong>. Doświadczenie zdobyte w autoryzowanych serwisach
            światowych marek postanowiliśmy przenieść na rynek radomski. <br /> <br />
            Ideą autodetailingu jest holistyczna pielęgnacja samochodu czyli wieloetapowe i
            precyzyjne zabiegi mające na celu odświeżenie wnętrza i karoserii pojazdu. Dzięki niej
            auto zachowuje lub odzyskuje blask nowości – jakby właśnie wyjechało z salonu. <br />{' '}
            <br />
            Kompleksowo zadbamy o Twoje auto. Naprawimy szkody parkingowe lub pokolizyjne,
            przygotujemy auto do sprzedaży lub dopracujemy świeżo zakupione auto. <br /> <br />
            Firma <strong>LCAR</strong> to również wynajem samochodów osobowych, busów oraz
            wywrotek. Prowadzimy usługę <strong>Door to Door</strong>, zostawiając u klienta wybrane
            auto zastępcze.
          </Typography>
        </FadeUp>

        <FlyIn direction="right" triggerOnScroll delay={0.2}>
          <Box>
            <LazyImage
              src="/img/cars.png"
              alt="cars"
              layout="responsive"
              width={560}
              height={220}
              objectFit="contain"
            />
          </Box>
        </FlyIn>
      </Stack>
    </Container>
  );
};
