import { Typography, Container, useMediaQuery, useTheme, Stack, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, ExpandLess, Phone, Instagram } from '@mui/icons-material';
import Image from 'next/image';

import { Link } from 'src/common/components/Link';
import { scrollToElement } from 'src/common/utils/scroll';
import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';

export const Footer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        {isDesktop && (
          <Stack direction="row" justifyContent="space-between">
            <div>
              <Typography variant="h5" align="center" color="secondary2" sx={{ mb: 3 }}>
                Media
              </Typography>

              <Link
                href="https://www.facebook.com/Lcar-105024021544930"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 2 }}
              >
                <FacebookIcon />
              </Link>

              {/* <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <YouTube />
                </Link> */}

              <Link
                href="https://www.instagram.com/lcarradom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
            </div>

            <div>
              <Typography variant="h5" align="center" color="secondary2" sx={{ mb: 3 }}>
                Kontakt
              </Typography>

              <Box display="flex" alignItems="center">
                <Phone sx={{ fontSize: 40, color: 'common.white', mr: 2 }} />

                <div>
                  <Typography variant="h5" color="secondary2" component="a" href="tel:+48539943336">
                    <Typography variant="h5" component="span" color="secondary">
                      +48
                    </Typography>{' '}
                    539 943 336
                  </Typography>
                  <Typography color="secondary2">Pon.-Pt. 8-18</Typography>
                </div>
              </Box>
            </div>

            <Image
              src="/img/logo-white.png"
              alt="lcar logo"
              width={180}
              height={50}
              objectFit="contain"
              unselectable="on"
            />
          </Stack>
        )}

        {!isDesktop && (
          <Stack direction="column" alignItems="center" spacing={2}>
            <Typography variant="h5" color="secondary2">
              Media
            </Typography>

            <Stack direction="row" spacing={2}>
              <Link
                href="https://www.facebook.com/Lcar-105024021544930"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </Link>

              {/* <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <YouTube />
              </Link> */}

              <Link
                href="https://www.instagram.com/lcarradom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
            </Stack>

            <ExpandLess
              onClick={() => scrollToElement(scrollToElementsId.top)}
              sx={{ color: 'common.white', fontSize: 96, mb: 4 }}
            />

            <Image
              src="/img/logo-white.png"
              alt="lcar logo"
              width={180}
              height={50}
              objectFit="contain"
              unselectable="on"
            />
          </Stack>
        )}

        <Typography align="center" color="secondary2" sx={{ mt: 4 }}>
          <span style={{ fontWeight: 800 }}>
            <Typography component="span" fontWeight="inherit" color="secondary">
              LCAR.PL
            </Typography>{' '}
            ® 2021
          </span>{' '}
          Wszelkie prawa zastrzeżone
        </Typography>

        <Typography variant="caption" component="p" align="center" color="secondary2">
          site by{' '}
          <Link
            href="https://github.com/filiplipinski"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            @filiplipinski
          </Link>
        </Typography>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  paddingTop: 48,
  paddingBottom: 24,
}));

const FacebookIcon = styled(Facebook)({
  fontSize: 64,
  color: '#4267B2',
});

const InstagramIcon = styled(Instagram)(({ theme }) => ({
  fontSize: 64,
  borderRadius: 20,
  color: theme.palette.common.black,
  background:
    'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
}));
