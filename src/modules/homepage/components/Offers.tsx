import { Container, Typography, Box, ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import { Phone as PhoneIcon } from '@mui/icons-material';
import { Link } from 'src/common/components/Link';

import { AnchorElementsEnum } from 'src/common/components/navbar/Navbar.types';

// TODO: ladne opisy porobic
// Info: te dane są tutaj zahardcodowane, ale mogą równiez być pobrane z API, ale tego nie robię gdy nie chce obciąać strony głownej requestami
const servicesData = [
  {
    slug: 'detailing-wnetrza',
    title: 'Detailing wnętrza',
    imgSrc: '/img/offer/detailing-wnetrza.jpg',
    iconSrc: '/icons/car-service.svg',
  },
  {
    slug: 'korekta-lakieru',
    title: 'Korekta lakieru',
    imgSrc: '/img/offer/korekta-lakieru.jpg',
  },
  {
    slug: 'powloki-ochronne',
    title: 'Powłoki ochronne',
    imgSrc: '/img/offer/korekta-lakieru.jpg', // TODO
  },
  {
    slug: 'usuwanie-wgniecen-pdr',
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
    title: 'Wyciszanie auta2',
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
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  // placeholder="blur"
                  // TODO later: dodaj: https://plaiceholder.co/docs/examples/next
                  // https://github.com/joe-bell/plaiceholder/blob/main/examples/next/src/pages/base64/single.tsx
                />
              </ImageContainer>

              <ShadowAndTextContainer href={`/uslugi/${item.slug}`}>
                <PhoneIcon sx={{ color: 'common.white', fontSize: 48 }} />

                <Typography
                  variant="h5"
                  color="secondary2"
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

const ShadowAndTextContainer = styled(Link)({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0,0,0, .5)',
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
