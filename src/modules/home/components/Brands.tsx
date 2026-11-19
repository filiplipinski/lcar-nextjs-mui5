import { Typography, Paper, useMediaQuery, useTheme, Container, Box } from '@mui/material';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FadeIn, FadeUp } from 'src/lib/gsap/animations';
import { LazyImage } from 'src/common/components/LazyImage';

const brands = [
  {
    src: '/img/brands/adbl.jpeg',
    alt: 'adbl',
  },
  {
    src: '/img/brands/autotriz.jpg',
    alt: 'autotriz',
  },
  {
    src: '/img/brands/colourlock.jpg',
    alt: 'colourlock',
  },
  {
    src: '/img/brands/menzerna.jpg',
    alt: 'menzerna',
  },
  {
    src: '/img/brands/meguiars.jpg',
    alt: 'meguiars',
  },
  {
    src: '/img/brands/tenzi.jpeg',
    alt: 'tenzi',
  },
];

export const Brands = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <FadeUp triggerOnScroll y={30}>
          <Typography
            component="h2"
            variant="h5"
            align="center"
            sx={{ mb: 4, textTransform: 'uppercase' }}
          >
            Marki na których pracujemy
          </Typography>
        </FadeUp>

        <FadeUp triggerOnScroll delay={0.4}>
          <Typography align="center" sx={{ mb: 4 }}>
            Korzystamy ze specjalistycznych produktów i narzędzi przeznaczonych do profesjonalnego detailingu. 
            Dobieramy je do rodzaju powierzchni, stanu pojazdu oraz zakresu wykonywanych prac. 
            Odpowiednie preparaty i sprawdzone techniki stanowią podstawę bezpiecznej <strong>pielęgnacji samochodu</strong>.
          </Typography>
        </FadeUp>
      </Container>

      <FadeIn triggerOnScroll delay={0.4}>
        <Paper
          elevation={isTablet ? 1 : 0}
          sx={{
            backgroundColor: 'common.white',
            py: 2,
            borderRadius: isTablet ? '10px' : 0,
            maxWidth: isTablet ? 600 : 'none',
            margin: '0 auto',
            boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
          }}
        >
          <Swiper
            modules={[Autoplay, Navigation, A11y]}
            spaceBetween={40}
            autoplay={{ disableOnInteraction: false, delay: 2000 }}
            loop
            navigation
            slidesPerView={isTablet ? 3 : 1}
            style={{ paddingLeft: 40, paddingRight: 40 }}
          >
            {brands.map(({ src, alt }) => (
              <SwiperSlide
                key={src}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <LazyImage src={src} alt={alt} height={80} width={150} unselectable="on" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Paper>
      </FadeIn>

      <Container>
        <FadeUp triggerOnScroll y={30}>
          <Typography
            component="h2"
            variant="h5"
            align="center"
            sx={{ mb: 4, textTransform: 'uppercase' }}
          ><br /><br />
            LCAR – zadbaj o swój samochód z profesjonalistami
          </Typography>
        </FadeUp>

        <FadeUp triggerOnScroll delay={0.4}>
          <Typography align="center" sx={{ mb: 4 }}>
            Szukasz profesjonalnego <strong>detailingu samochodowego</strong> w <strong>Radomiu</strong>, <strong>Kozienicach</strong> lub <strong>Puławach</strong>? Skontaktuj się z LCAR, 
            opowiedz nam o swoim samochodzie i ustal dogodny termin wizyty. Doradzimy, jakie zabiegi warto wykonać, 
            aby uzyskać oczekiwany efekt.
          </Typography>
        </FadeUp>
      </Container>
      
    </Box>
  );
};
