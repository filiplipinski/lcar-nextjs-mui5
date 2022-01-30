import { SxProps, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Facebook, Instagram } from '@mui/icons-material';

import { Link } from 'src/common/components/Link';

type Props = {
  sx?: SxProps;
  iconFontSize?: number;
  noPaddings?: boolean;
};

export const FacebookIconLink = ({ sx, iconFontSize = 24, noPaddings }: Props) => {
  return (
    <IconButton
      LinkComponent={Link}
      href="https://www.facebook.com/Lcar-Autodetailing-Radom-105024021544930"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      size="small"
      sx={{ ...sx, p: noPaddings ? 0 : '3px' }}
    >
      <FacebookIcon sx={{ fontSize: iconFontSize }} />
    </IconButton>
  );
};

export const InstagramIconLink = ({ sx, iconFontSize = 24, noPaddings }: Props) => {
  return (
    <IconButton
      LinkComponent={Link}
      href="https://www.instagram.com/lcarradom"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      size="small"
      sx={{ ...sx, p: noPaddings ? 0 : '5px' }}
    >
      {/* 0.75 because i want to scale icon to be the same as facebook */}
      <InstagramIcon sx={{ fontSize: iconFontSize * 0.8 }} />
    </IconButton>
  );
};

const FacebookIcon = styled(Facebook)({
  color: '#4267B2',
});

const InstagramIcon = styled(Instagram)(({ theme }) => ({
  borderRadius: 6,
  color: theme.palette.common.white,
  background:
    'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
}));
