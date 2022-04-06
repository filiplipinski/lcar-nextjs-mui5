import { useState } from 'react';
import { Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';
import { scrollToElement } from 'src/common/utils/scroll';
import { FlyIn, FadeIn } from 'src/lib/gsap/animations';
import { LazyImage } from 'src/common/components/LazyImage';

export const HeroBanner = () => {
  const theme2 = useTheme();
  const isDesktop = useMediaQuery(theme2.breakpoints.up('md'));
  const [isImgLoaded, setImgLoaded] = useState(false);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Box sx={{ position: 'absolute', zIndex: 1, left: '10%', top: '20%' }}>
        <FlyIn manualTriggerMode triggerManually={isImgLoaded}>
          <CustomText variant="h1">Z miłości</CustomText>{' '}
        </FlyIn>
        <FlyIn manualTriggerMode triggerManually={isImgLoaded} delay={0.8}>
          <CustomText variant="h1">
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

      {/* TODO moze: onError other image */}
      <LazyImage
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

const CustomText = styled(Typography)(({ theme }) => ({
  textTransform: 'lowercase',
  fontFamily: 'Russo One',
  fontWeight: 'regular',
  pointerEvents: 'none',
  fontSize: 36,

  [theme.breakpoints.up('sm')]: {
    fontSize: 56,
  },

  [theme.breakpoints.up('md')]: {
    fontSize: 64,
  },

  color: 'transparent',
  WebkitTextStroke: `1px ${theme.palette.primary.main}`,
}));
