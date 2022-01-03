import { useState } from 'react';
import { AppBar, Toolbar, MenuItem, MenuList, Container, Button, Box } from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';
import Image from 'next/image';
import { styled } from '@mui/system';

import { SideDrawer } from './components/SideDrawer';
import { BackToTop } from './components/BackToTop';
import { AnchorElementsEnum, navItems } from './Navbar.types';
import { useEffect } from 'react';

export const navigationHeight = 80;

export const Navbar = () => {
  const [shouldTriggerNavbar, setShouldTriggerNavbar] = useState(false);

  const handleNavItemClick = (elementId: AnchorElementsEnum) => {
    const topOfElement = (document.getElementById(elementId)?.offsetTop || 0) - navigationHeight;
    window.scroll({ top: topOfElement, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setShouldTriggerNavbar(window.scrollY > navigationHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id={AnchorElementsEnum.Top}>
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
            <ImageContainer
              role="presentation"
              tabIndex={0}
              onClick={() => handleNavItemClick(AnchorElementsEnum.Top)}
            >
              <Image
                src="/img/logo.png"
                alt="lcar logo"
                // width={250} // TODO: pomysł: wieksze logo gdy scroll na gorze, gdy idzie w dol to juz normalny rozmiar
                // height={80}
                width={180}
                height={50}
                // width={150}
                // height={40}
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
              {/* TODO: jak jestes w danej sekcji, to ma byc podkreślnik! */}
              <MenuList disablePadding sx={{ display: 'flex', height: '100%' }}>
                {navItems.map(({ id, title }) => (
                  <MenuItem
                    onClick={() => handleNavItemClick(id)}
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

            <SideDrawer onNavItemClick={(id) => handleNavItemClick(id)} />
          </Container>
        </Toolbar>
      </AppBar>

      <BackToTop />
    </div>
  );
};

const ImageContainer = styled(Box)({
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
