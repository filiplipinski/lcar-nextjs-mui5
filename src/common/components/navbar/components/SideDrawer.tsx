import { useState } from 'react';
import { Stack, Drawer, IconButton, Divider, Button, Box } from '@mui/material';
import { Menu as MenuIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

import { Link } from 'src/common/components/Link';

import { navItems } from '../Navbar.types';
import { FacebookIconLink, InstagramIconLink } from '../../ColoredIconLinks';

export const SideDrawer = () => {
  const [isOpen, setState] = useState(false);

  const closeDrawer = () => setState(false);

  return (
    <>
      <IconButton
        edge="end"
        aria-label="menu"
        onClick={() => setState(true)}
        sx={{
          color: 'primary.dark',
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer anchor="right" open={isOpen} onClose={closeDrawer}>
        {/* TODO later: ewentualnie ogarnac to jako ul/li */}
        <Stack
          sx={{
            width: 250,
            marginTop: '20%',
            display: 'flex',
            flexDirection: 'column',
          }}
          divider={<Divider orientation="horizontal" flexItem />}
          role="presentation"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          {navItems.map(({ title, href }) => (
            // TODO later: focus na przycisk moglby byc nie niebieski, a czerwony
            <Link
              key={href}
              href={href}
              sx={{
                pl: 5,
                py: 2,
                textTransform: 'uppercase',
              }}
            >
              {title}
            </Link>
          ))}
        </Stack>

        <Box sx={{ pl: 4 }}>
          <NumberButton href="tel:+48539943336" variant="text">
            <PhoneIcon fontSize="small" sx={{ mr: 1, color: 'secondary.light' }} />
            +48 539 943 336
          </NumberButton>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          <FacebookIconLink iconFontSize={40} sx={{ mr: 1 }} />
          <InstagramIconLink iconFontSize={40} />
        </Stack>
      </Drawer>
    </>
  );
};

const NumberButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  borderRadius: '10px',
  fontSize: 20,
  letterSpacing: '-1px',
  color: theme.palette.secondary.light,
  whiteSpace: 'nowrap',
}));
