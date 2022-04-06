import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Link } from 'src/common/components/Link';
import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';
import { FadeIn, FadeUp, FlyIn } from 'src/lib/gsap/animations';
import { LazyImage } from 'src/common/components/LazyImage';
import { mediaQueries } from 'src/styles/theme';

type Props = {
  offers: Offer[];
};

export const Offers = ({ offers }: Props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [areImagesLoaded, setImagesLoaded] = useState(false);

  const iconSize = isDesktop ? 64 : 48;

  return (
    <Box id={scrollToElementsId.offer} sx={{ pt: 10 }}>
      <FadeUp triggerOnScroll>
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 4 }}>
          Usługi
        </Typography>
      </FadeUp>

      <Container maxWidth="lg">
        <FlyIn direction="right" triggerOnScroll>
          <Typography align="center">
            <strong>Auto detailing</strong> to specjalistyczna, wieloetapowa i świadoma pielęgnacja
            całego pojazdu lub jego poszczególnych elementów. Ma na celu oczyszczenie, konserwację,
            renowację i zabezpieczenie samochodu. Taką usługę warto wykonać zarówno w przypadku aut
            używanych, jak i nowych.
          </Typography>
        </FlyIn>
        <br />

        <FlyIn direction="left" triggerOnScroll>
          <Typography align="center">
            <strong>Detailing samochodowy</strong> w równym stopniu dba o stronę zewnętrzną pojazdu
            oraz jego wnętrze. W efekcie dzięki przemyślanym działaniom indywidualnie dopasowanymi
            do potrzeb samochodu oraz oczekiwań właściciela, klient otrzymuje samochód w
            zachwycającym stanie.
          </Typography>
        </FlyIn>
      </Container>

      <FadeIn triggerOnScroll duration={1} delay={0.5}>
        <ImageList
          sx={{
            mt: 4,
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: 'translateZ(0)',
          }}
          rowHeight={isDesktop ? 250 : 150}
          gap={0}
          cols={isDesktop ? 4 : 2}
        >
          {offers.map((item) => {
            return (
              <ImageListItem key={item.title}>
                <ImageContainer>
                  <LazyImage
                    src={item.imgSrc}
                    alt={item.title}
                    layout="fill"
                    sizes={`${mediaQueries.md} 50vw, 25vw`}
                    objectFit="cover"
                    placeholder={item.blurDataURL ? 'blur' : undefined}
                    blurDataURL={item.blurDataURL}
                    onLoadingComplete={() => setImagesLoaded(true)}
                  />
                </ImageContainer>

                <ShadowAndTextContainer href={`/uslugi/${item.slug}`}>
                  <Box sx={{ opacity: areImagesLoaded ? 1 : 0 }}>
                    <LazyImage
                      src={item.iconSrc}
                      alt={item.title}
                      width={iconSize}
                      height={iconSize}
                      unoptimized
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    color="secondary2"
                    align="center"
                    sx={{
                      opacity: areImagesLoaded ? 1 : 0,
                      mt: { xs: 1, sm: 2 },
                      textShadow: '0px 0px 4px rgba(0, 0, 0, .5)',
                      fontSize: { xs: 14, sm: 20 },
                      px: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                </ShadowAndTextContainer>
              </ImageListItem>
            );
          })}
        </ImageList>
      </FadeIn>
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
  transition: 'background-color .3s ease-in-out',

  '& > div': {
    transition: 'transform .8s ease-in-out',
  },
  '& h6': {
    transition: 'transform .3s ease-in-out',
  },

  ':hover': {
    backgroundColor: 'rgba(0,0,0, .2)',

    '& > div': {
      transform: 'rotate(360deg)',
    },

    '& h6': {
      transform: 'scale(1.1)',
    },
  },
});

export type Offer = {
  slug: string;
  title: string;
  imgSrc: string;
  iconSrc: string;
  blurDataURL?: string; // generated in getStaticProps in index.tsx
};

// FYI: te dane są tutaj zahardcodowane, ale mogą równiez być pobrane z API, ale tego nie robię gdy nie chce obciąać strony głownej requestami
export const offersData: Offer[] = [
  {
    slug: 'detailing-wnetrza',
    title: 'Detailing wnętrza',
    imgSrc: '/img/offer/detailing-wnetrza.jpg',
    iconSrc: '/icons/offer/detailing-wnetrza.png',
  },
  {
    slug: 'korekta-lakieru',
    title: 'Korekta lakieru',
    imgSrc: '/img/offer/korekta-lakieru.jpg',
    iconSrc: '/icons/offer/korekta-lakieru.png',
  },
  {
    slug: 'powloki-ochronne',
    title: 'Powłoki ochronne',
    imgSrc: '/img/offer/powloki-ochronne.jpg',
    iconSrc: '/icons/offer/powloki-ochronne.png',
  },
  {
    slug: 'usuwanie-wgniecen-pdr',
    title: 'Usuwanie wgnieceń (PDR)',
    imgSrc: '/img/offer/usuwanie-wgniecen.jpg',
    iconSrc: '/icons/offer/usuwanie-wgniecen.png',
  },
  {
    slug: 'renowacja-tapicerki-skorzanej',
    title: 'Renowacja tapicerki skórzanej',
    imgSrc: '/img/offer/renowacja-tapicerki.jpg',
    iconSrc: '/icons/offer/renowacja-tapicerki.png',
  },
  {
    slug: 'uslugi-tapicerskie',
    title: 'Usługi tapicerskie',
    imgSrc: '/img/offer/uslugi-tapicerskie.jpg',
    iconSrc: '/icons/offer/uslugi-tapicerskie.png',
  },
  {
    slug: 'wyciszanie-auta',
    title: 'Wyciszanie auta',
    imgSrc: '/img/offer/wyciszanie-auta.jpg',
    iconSrc: '/icons/offer/wyciszanie-auta.png',
  },
  {
    slug: 'uslugi-dodatkowe',
    title: 'Usługi dodatkowe',
    imgSrc: '/img/offer/uslugi-dodatkowe.jpg',
    iconSrc: '/icons/offer/uslugi-dodatkowe.png',
  },
];
