import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import { Phone as PhoneIcon } from '@mui/icons-material';

import { AnchorElementsEnum } from 'src/common/components/navbar/Navbar.types';

// TODO: ladne opisy porobic
const servicesData = [
  {
    title: 'Detailing wnętrza',
    imgSrc: '/img/offer/detailing-wnetrza.jpg',
    iconSrc: '/icons/car-service.svg',
  },
  {
    title: 'Korekta lakieru',
    imgSrc: '/img/offer/korekta-lakieru.jpg',
  },
  {
    title: 'Powłoki ochronne',
    imgSrc: '/img/offer/korekta-lakieru.jpg', // TODO
  },
  {
    title: 'Usuwanie wgnieceń (PDR)',
    imgSrc: '/img/offer/usuwanie-wgniecen.jpg',
  },
  {
    title: 'Renowacja tapicerki skórzanej',
    imgSrc: '/img/offer/renowacja-tapicerki.jpg',
  },
  {
    title: 'Usługi tapicerskie',
    imgSrc: '/img/offer/uslugi-tapicerskie.jpg',
  },
  {
    title: 'Wyciszanie auta',
    imgSrc: '/img/offer/polerowanie.jpg', // TODO
  },
  {
    title: 'Wyciszanie auta',
    imgSrc: '/img/offer/polerowanie.jpg', // TODO
  },
  // {
  //   title: 'Renowacja pojazów specjalnych',
  //   imgSrc: '/img/offer/uslugi-dodatkowe.jpg',
  // },
];

export const Offers = () => {
  return (
    <Box id={AnchorElementsEnum.CompanyOffer} sx={{ pt: 8 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        Usługi
      </Typography>

      <Container maxWidth="lg">
        <Typography align="center">
          <strong>Auto detailing</strong> to specjalistyczna, wieloetapowa i świadoma pielęgnacja
          całego pojazdu lub jego poszczególnych elementów. Ma na celu oczyszczenie, konserwację,
          renowację i zabezpieczenie samochodu. Taką usługę warto wykonać zarówno w przypadku aut
          używanych, jak i nowych.
        </Typography>
        <br />

        <Typography align="center">
          <strong>Detailing samochodowy</strong> w równym stopniu dba o stronę zewnętrzną pojazdu
          oraz jego wnętrze. W efekcie dzięki przemyślanym działaniom indywidualnie dopasowanymi do
          potrzeb samochodu oraz oczekiwań właściciela, klient otrzymuje samochód w zachwycającym
          stanie.
        </Typography>
      </Container>

      <ImageList
        sx={{
          mt: 4,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
        }}
        rowHeight={250}
        gap={0}
        cols={4}
      >
        {servicesData.map((item) => {
          return (
            <ImageListItem key={item.title}>
              <ImageContainer>
                <Image src={item.imgSrc} alt={item.title} layout="fill" objectFit="cover" />
              </ImageContainer>

              <ShadowAndTextContainer>
                <PhoneIcon sx={{ fontSize: 48 }} />

                {/* <CarService sx={{ fontSize: 48 }} /> */}
                {/* 
                <Image
                  src="/icons/car-service.png"
                  alt={item.title}
                  color="white"
                  width={48}
                  height={48}
                  objectFit="contain"
                /> */}

                <Typography
                  variant="h5"
                  color="inherit"
                  align="center"
                  sx={{
                    mt: 2,
                    textTransform: 'uppercase',
                    textShadow: '0px 0px 4px rgba(0, 0, 0, .5)',
                  }}
                >
                  {item.title}
                </Typography>
              </ShadowAndTextContainer>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
};

const ImageContainer = styled('div')({
  height: '100%',
  position: 'relative',
});

// zamienic na Link!
const ShadowAndTextContainer = styled('div')({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0,0,0, .5)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background-color .4s ease-in-out',

  ':hover': {
    backgroundColor: 'transparent',

    '& svg': {
      transition: 'transform .8s ease-in-out',
      transform: 'rotate(360deg)',
    },

    '& h5': {
      transition: 'transform .4s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
});
