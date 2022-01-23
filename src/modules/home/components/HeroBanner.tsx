import { useState } from 'react';
import { Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import NextImage from 'next/image';
import { styled } from '@mui/system';

import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';
import { scrollToElement } from 'src/common/utils/scroll';
import { FlyIn, FadeIn } from 'src/lib/gsap/animations';

import { moveXAnimation } from '../utils/keyframes';

// TODO: kondycyjne wylaczanie scrollownia
// function useImperativeDisableScroll({ element, disabled }) {
//   useEffect(() => {
//       if (!element) {
//           return
//       }

//       element.style.overflowY = disabled ? 'hidden' : 'scroll'

//       return () => {
//           element.style.overflowY = 'scroll'
//       }
//   }, [disabled])
// }

{
  /* <Fade in={!isImgLoaded}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            zIndex: isImgLoaded ? -99 : 999999,
            overflow: 'hidden',
          }}
        ></Box>
      </Fade> */
}

export const HeroBanner = () => {
  const theme2 = useTheme();
  const isDesktop = useMediaQuery(theme2.breakpoints.up('md'));
  const [isImgLoaded, setImgLoaded] = useState(false);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Box sx={{ position: 'absolute', zIndex: 1, left: '10%', top: '20%' }}>
        <FlyIn manualTriggerMode triggerManually={isImgLoaded}>
          <CustomText variant={isDesktop ? 'h1' : 'h2'}>Z miłości</CustomText>{' '}
        </FlyIn>
        <FlyIn manualTriggerMode triggerManually={isImgLoaded} delay={0.8}>
          <CustomText variant={isDesktop ? 'h1' : 'h2'}>
            do{' '}
            <Box
              component="span"
              sx={{
                color: 'primary.dark',
                WebkitTextStrokeWidth: 0,
              }}
            >
              motoryzacji
            </Box>
          </CustomText>
        </FlyIn>

        <FadeIn manualTriggerMode triggerManually={isImgLoaded} duration={2} delay={1.6}>
          <Button
            variant="contained"
            color="secondary"
            size={isDesktop ? 'large' : 'medium'}
            onClick={() => scrollToElement(scrollToElementsId.aboutCompany)}
            sx={{ mt: 4 }}
          >
            Poznaj nas!
          </Button>
        </FadeIn>
      </Box>

      {/* TODO: onError other image */}
      <Image
        src="/img/hero.jpeg"
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="0% bottom"
        unselectable="on"
        quality={100}
        priority
        loading="eager"
        onLoadingComplete={() => setImgLoaded(true)}
      />
    </Box>
  );
};

const Image = styled(NextImage)({
  animation: `${moveXAnimation} 10s 1s ease-in-out infinite alternate`,
});

const CustomText = styled(Typography)(({ theme }) => ({
  textTransform: 'lowercase',
  fontFamily: 'Russo One',
  fontWeight: 'regular',
  pointerEvents: 'none',

  color: 'transparent',
  WebkitTextStroke: `1px ${theme.palette.primary.main}`,
}));
