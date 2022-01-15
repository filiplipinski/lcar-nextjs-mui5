import { useState } from 'react';
import { Stack, Drawer, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'src/common/components/Link';

import { navItems } from '../Navbar.types';
import { FacebookIconLink, InstagramIconLink } from '../../ColoredIconLinks';

export const SideDrawer = () => {
  const [isOpen, setState] = useState(false);

  const closeDrawer = () => setState(false);

  return (
    <>
      <IconButton
        edge="start"
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

        <Stack
          direction="row"
          alignItems="center"
          sx={{ ml: '29px' }}
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          <FacebookIconLink iconFontSize={32} sx={{ mr: 1 }} />
          <InstagramIconLink iconFontSize={32} />
        </Stack>
      </Drawer>
    </>
  );
};
