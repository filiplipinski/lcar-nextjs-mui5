import { MouseEvent } from 'react';
import { useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { AnchorElementsEnum } from '../Navbar.types';

export const BackToTop = () => {
  const trigger = useScrollTrigger();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (event.currentTarget.ownerDocument || document).getElementById(
      AnchorElementsEnum.Top
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1 }}
      >
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};
