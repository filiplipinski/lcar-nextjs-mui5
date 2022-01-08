import { useState, useEffect } from 'react';
import { AppBar, Toolbar, MenuItem, MenuList, Container, Button, Box } from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';
import Image from 'next/image';
import { styled } from '@mui/system';

import { Link } from 'src/common/components/Link';

import { SideDrawer } from './components/SideDrawer';
import { BackToTop } from './components/BackToTop';
import { AnchorElementsEnum, navItems } from './Navbar.types';
import { scrollToElement } from 'src/common/utils/scroll';

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
      id={AnchorElementsEnum.Top}
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
              {navItems.map(({ id, title }) => (
                <MenuItem
                  onClick={() => scrollToElement(id)}
                  key={id}
                  tabIndex={0}
                  sx={{
                    fontWeight: 'bold',
                    px: '24px',
                    transition: '.3s ease',
                    fontSize: 18,

                    ':hover, :focus': {
                      color: 'secondary.main',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {title}
                </MenuItem>
              ))}
            </MenuList>
            <NumberButton variant="text">
              <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'secondary.light' }} />
              +48 539 943 336
            </NumberButton>
          </Box>

          <SideDrawer onNavItemClick={scrollToElement} />
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
