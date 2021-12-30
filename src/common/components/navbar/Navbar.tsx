import { AppBar, Toolbar, MenuItem, MenuList, Container, Button, Box } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';

import { SideDrawer } from './components/SideDrawer';
import { BackToTop } from './components/BackToTop';
import { AnchorElementsEnum, navItems } from './Navbar.types';
import { HideOnScroll } from './components/HideOnScroll';

const navigationHeight = 80;

export const Navbar = () => {
  const handleNavItemClick = (elementId: AnchorElementsEnum) => {
    const topOfElement = (document.getElementById(elementId)?.offsetTop || 0) - navigationHeight;
    window.scroll({ top: topOfElement, behavior: 'smooth' });
  };

  return (
    <div>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            height: navigationHeight,
            backgroundColor: 'background.default',
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
                  width={150}
                  height={40}
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
                  {navItems.map(({ id, title }, i) => (
                    <MenuItem
                      onClick={() => handleNavItemClick(id)}
                      key={id}
                      tabIndex={0}
                      sx={{
                        fontWeight: 'medium',
                        fontSize: 18,
                        px: '24px',
                        transition: '.3s ease',

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
                <NumberButton variant="text" color="secondary">
                  +48 539 943 336
                </NumberButton>
              </Box>

              <SideDrawer onNavItemClick={(id) => handleNavItemClick(id)} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Offset id={AnchorElementsEnum.Top} />
      <BackToTop />
    </div>
  );
};

const Offset = styled('div')({
  minHeight: navigationHeight,
});

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

const NumberButton = styled(Button)({
  fontWeight: 'bold',
  marginLeft: '32px',
  borderRadius: '10px',
  fontSize: 20,
  letterSpacing: '-1px',
});
