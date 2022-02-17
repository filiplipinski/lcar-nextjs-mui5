import { Typography, Container, useMediaQuery, useTheme, Stack, Box } from '@mui/material';
import { styled, lighten } from '@mui/material/styles';
import { ExpandLess, Phone } from '@mui/icons-material';

import { Link } from 'src/common/components/Link';
import { scrollToElement } from 'src/common/utils/scroll';
import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';
import { FacebookIconLink, InstagramIconLink } from './ColoredIconLinks';
import { LazyImage } from './LazyImage';

export const Footer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <FooterContainer sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        {isDesktop && (
          <Stack direction="row" justifyContent="space-between">
            <div>
              <Typography
                variant="h5"
                component="h4"
                align="center"
                color="secondary2"
                sx={{ mb: 3 }}
              >
                Media
              </Typography>

              <FacebookIconLink iconFontSize={64} noPaddings sx={{ mr: 2 }} />

              <InstagramIconLink iconFontSize={64} noPaddings />
            </div>

            <div>
              <Typography
                variant="h5"
                component="h4"
                align="center"
                color="secondary2"
                sx={{ mb: 3 }}
              >
                Kontakt
              </Typography>

              <Box display="flex" alignItems="center">
                <Phone sx={{ fontSize: 40, color: 'common.white', mr: 2 }} />

                <div>
                  <Typography
                    variant="h5"
                    color="secondary2"
                    component="a"
                    href="tel:+48539943336"
                    sx={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="h5"
                      component="span"
                      sx={(theme) => ({ color: lighten(theme.palette.secondary.light, 0.06) })}
                    >
                      +48
                    </Typography>{' '}
                    539 943 336
                  </Typography>
                  <Typography color="secondary2">Pon.-Pt. 8-18</Typography>
                </div>
              </Box>
            </div>

            <LazyImage
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
            <Typography variant="h5" component="h4" color="secondary2">
              Media
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <FacebookIconLink iconFontSize={64} noPaddings />

              <InstagramIconLink iconFontSize={64} noPaddings />
            </Stack>

            <ExpandLess
              onClick={() => scrollToElement(scrollToElementsId.top)}
              sx={{ color: 'common.white', fontSize: 96, mb: 4 }}
            />

            <LazyImage
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
            <Typography
              component="span"
              fontWeight="inherit"
              sx={(theme) => ({ color: lighten(theme.palette.secondary.light, 0.06) })}
            >
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
