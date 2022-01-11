import { useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { AnchorElementsIdEnum } from '../Navbar.types';
import { scrollToElement } from 'src/common/utils/scroll';

export const BackToTop = () => {
  const trigger = useScrollTrigger();

  return (
    <Zoom in={trigger}>
      <Box
        onClick={() => scrollToElement(AnchorElementsIdEnum.Top)}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1 }}
      >
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
      </Box>
    </Zoom>
  );
};
