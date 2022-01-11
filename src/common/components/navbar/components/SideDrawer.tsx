import { useState } from 'react';
import { Stack, Typography, Drawer, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { AnchorElementsIdEnum, navItems } from '../Navbar.types';

type Props = {
  onNavItemClick: (id: AnchorElementsIdEnum) => void;
};

export const SideDrawer = ({ onNavItemClick }: Props) => {
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
          {navItems.map(({ id, title }) => (
            <Typography
              variant="button"
              key={id}
              sx={{
                ml: 5,
                my: 2,
                textTransform: 'uppercase',
              }}
              onClick={() => onNavItemClick(id)}
            >
              {title}
            </Typography>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};
