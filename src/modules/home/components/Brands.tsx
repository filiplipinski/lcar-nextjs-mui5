import { Typography, Paper, useMediaQuery, useTheme, Container, Box } from '@mui/material';
import { Navigation, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

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
    <Box sx={{ mt: 4, mb: 8 }}>
      <Container>
        <Typography variant="h5" align="center" sx={{ mb: 1, textTransform: 'uppercase' }}>
          Marki na których pracujemy
        </Typography>

        <Typography align="center" sx={{ mb: 4 }}>
          Dobieramy produkty najwyższej jakości, aby zapewnić najlepszą jakość usług, a także
          największe bezpieczeństwo dla auta!
        </Typography>
      </Container>

      <Paper
        elevation={isTablet ? 1 : 0}
        sx={{
          backgroundColor: 'common.white',
          py: 2,
          borderRadius: isTablet ? 5 : 0,
          maxWidth: isTablet ? 600 : 'none',
          margin: '0 auto',
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
              <Image src={src} alt={alt} height={80} width={150} unselectable="on" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Paper>
    </Box>
  );
};
