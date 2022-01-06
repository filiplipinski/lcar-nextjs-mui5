import { Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import NextImage from 'next/image';
import { styled } from '@mui/system';

import { AnchorElementsEnum } from 'src/common/components/navbar/Navbar.types';
import { scrollToElement } from 'src/common/utils/scroll';
import { moveXAnimation } from '../utils/keyframes';

export const HeroBanner = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ position: 'relative', width: '100vw', height: 'calc(100vh + 1px)' }}>
      <Box sx={{ position: 'absolute', zIndex: 1, left: '10%', top: '20%' }}>
        <CustomText variant={isDesktop ? 'h1' : 'h2'}>
          Z miłości
          <br />
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

        {/* TODO: moze to nie ma byc custom button, tylko taki styl na stałe? */}
        <CustomButton
          variant="contained"
          color="secondary"
          size={isDesktop ? 'large' : 'medium'}
          onClick={() => scrollToElement(AnchorElementsEnum.AboutCompany)}
          sx={{ mt: 4 }}
        >
          Poznaj nas!
        </CustomButton>
      </Box>

      <Image
        src="/img/hero.jpeg"
        // src="/img/hero-fullsize.jpg" // TODO: ktore zdjecie?
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

const CustomButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.common.white}`,
  letterSpacing: 1,
}));
