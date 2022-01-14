import { useState, useEffect } from 'react';
import { AppBar, Toolbar, MenuItem, MenuList, Container, Button, Box, Stack } from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';
import Image from 'next/image';
import { styled } from '@mui/system';

import { Link } from 'src/common/components/Link';
import { FadeIn } from 'src/lib/gsap/animations/FadeIn';

import { SideDrawer } from './components/SideDrawer';
import { BackToTop } from './components/BackToTop';
import { navItems } from './Navbar.types';
import { FacebookIconLink, InstagramIconLink } from '../ColoredIconLinks';

export const navigationHeight = 80;

export const Navbar = () => {
  const [shouldTriggerNavbar, setShouldTriggerNavbar] = useState(false);

  const handleScroll = () => {
    setShouldTriggerNavbar(window.scrollY > navigationHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        height: navigationHeight,
        transition: '.4s ease-in',

        ...(shouldTriggerNavbar
          ? {
              backgroundColor: 'background.default',
            }
          : {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            }),
      }}
    >
      <Toolbar disableGutters sx={{ height: '100%' }}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <FadeIn delay={0.3}>
            <ImageContainer href="/">
              <Image
                src="/img/logo.png"
                alt="lcar logo"
                width={180}
                height={50}
                objectFit="contain"
                unselectable="on"
              />
            </ImageContainer>
          </FadeIn>

          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              height: '100%',
            }}
          >
            {/* TODO later: jak jestes w danej sekcji, to ma byc podkreślnik! */}
            <MenuList disablePadding sx={{ display: 'flex', height: '100%' }}>
              {navItems.map(({ title, href }) => (
                <MenuItem
                  key={href}
                  tabIndex={0}
                  sx={{
                    p: 0,
                    fontWeight: 'bold',
                    transition: '.3s ease',
                    fontSize: 18,

                    ':hover, :focus': {
                      color: 'secondary.main',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <Link
                    href={href}
                    sx={{
                      px: 4,
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {title}
                  </Link>
                </MenuItem>
              ))}
            </MenuList>

            <NumberButton variant="text">
              <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'secondary.light' }} />
              +48 539 943 336
            </NumberButton>

            <Stack alignItems="center" sx={{ ml: 1 }}>
              <FacebookIconLink iconFontSize={24} />
              <InstagramIconLink iconFontSize={24} />
            </Stack>
          </Box>

          <SideDrawer />
        </Container>
      </Toolbar>

      <BackToTop />
    </AppBar>
  );
};

const ImageContainer = styled(Link)({
  height: '100%',
  cursor: 'pointer',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  transition: 'transform .3s ease',
  ':hover': {
    transform: 'scale(1.1)',
  },

  ':focus': {
    transform: 'scale(1.1)',
    outline: 'none',
  },
});

const NumberButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  marginLeft: 24,
  borderRadius: '10px',
  fontSize: 20,
  letterSpacing: '-1px',
  color: theme.palette.secondary.light,
  whiteSpace: 'nowrap',
}));
