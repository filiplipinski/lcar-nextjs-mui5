import { Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import NextImage from 'next/image';
import { styled } from '@mui/system';

import { AnchorElementsIdEnum } from 'src/common/components/navbar/Navbar.types';
import { scrollToElement } from 'src/common/utils/scroll';
import { FlyIn, FadeIn } from 'src/lib/gsap/animations';

import { moveXAnimation } from '../utils/keyframes';

export const HeroBanner = () => {
  const theme2 = useTheme();
  const isDesktop = useMediaQuery(theme2.breakpoints.up('md'));

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Box sx={{ position: 'absolute', zIndex: 1, left: '10%', top: '20%' }}>
        <FlyIn>
          <CustomText variant={isDesktop ? 'h1' : 'h2'}>Z miłości</CustomText>{' '}
        </FlyIn>
        <FlyIn delay={0.8}>
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

        <FadeIn duration={2} delay={1.6}>
          <Button
            variant="contained"
            color="secondary"
            size={isDesktop ? 'large' : 'medium'}
            onClick={() => scrollToElement(AnchorElementsIdEnum.AboutCompany)}
            sx={{ mt: 4 }}
          >
            Poznaj nas!
          </Button>
        </FadeIn>
      </Box>

      <Image
        src="/img/hero.jpeg"
        alt="hero banner"
        layout="fill"
        objectFit="cover"
        objectPosition="0% bottom"
        unselectable="on"
        quality={100}
        priority
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
