import { Typography, Stack, useMediaQuery, useTheme, Container } from '@mui/material';
import { Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const items = [
  {
    iconSrc: '/icons/happy-clients.svg',
    title: 'Doświadczenie',
    description: (
      <>
        <strong>15 lat</strong> pracy w branży motoryzacyjnej oraz niezliczona ilość zrealizowanych
        projektów
      </>
    ),
  },
  {
    iconSrc: '/icons/experience.svg',
    title: 'Zadowoleni klienci',
    description: (
      <>
        Gwarancja zadowolenia – grono stałych klientów oraz gości trafiających do Naszego studia z
        polecenia
      </>
    ),
  },
  {
    iconSrc: '/icons/number-one.svg',
    title: 'Gwarancja jakości',
    description: (
      <>
        Wykwalifikowany zespół, najlepszej jakości produkty i narzędzia światowych marek gwarantują
        najwyższą jakość oferowanych usług
      </>
    ),
  },
];

export const CompanyPros = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container sx={{ mt: 10 }}>
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={50}
        autoplay
        loop={!isDesktop}
        pagination={{ clickable: true }}
        slidesPerView={isDesktop ? 3 : 1}
      >
        {items.map(({ title, iconSrc, description }) => (
          <SwiperSlide key={title}>
            <Stack spacing={2} sx={{ height: 250 }}>
              <Image src={iconSrc} alt="" height={55} width={55} />

              <Typography variant="h4" align="center">
                {title}
              </Typography>

              <Typography align="center">{description}</Typography>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
