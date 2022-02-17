import { Home, PhoneAndroid, MailOutline } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContactInfo = () => {
  return (
    <Stack spacing={4} itemScope itemType="http://schema.org/LocalBusiness" sx={{ mt: { md: 6 } }}>
      <meta itemProp="name" content="Lcar Auto Detailing" />

      <Stack direction="row" alignItems="center">
        <IconContainer>
          <Home sx={{ color: 'secondary.main', fontSize: 48 }} />
        </IconContainer>
        <div>
          <Typography variant="h5" itemProp="founder" sx={{ textTransform: 'capitalize' }}>
            Karol Lipiński
          </Typography>
          <Typography
            variant="body2"
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            <span itemProp="streetAddress">ul. Złota 48</span> <br />{' '}
            <span itemProp="postalCode">26-604</span> <span itemProp="addressLocality">Radom</span>
            <meta itemProp="addressRegion" content="mazowieckie" />
          </Typography>
        </div>
      </Stack>

      <Stack direction="row">
        <IconContainer>
          <PhoneAndroid sx={{ color: 'secondary.main', fontSize: 48 }} />
        </IconContainer>
        <div>
          <Typography
            variant="h5"
            component="a"
            href="tel:+48539943336"
            sx={{ textDecoration: 'none' }}
          >
            <Typography variant="h5" component="span" color="secondary">
              +48
            </Typography>{' '}
            <span itemProp="telephone">539 943 336</span>
          </Typography>
          <Typography variant="body2">Telefon komórkowy</Typography>
        </div>
      </Stack>

      <Stack direction="row">
        <IconContainer>
          <MailOutline sx={{ color: 'secondary.main', fontSize: 48 }} />
        </IconContainer>
        <div>
          <Typography
            component="a"
            href="mailto:karol.lipinski@lcar.pl"
            variant="h5"
            sx={{ textTransform: 'lowercase', textDecoration: 'none' }}
          >
            <Typography
              component="span"
              variant="h5"
              color="secondary"
              sx={{ textTransform: 'inherit' }}
            >
              karol.lipinski
              <meta itemProp="email" content="karol.lipinski@lcar.pl" />
            </Typography>
            @lcar.pl
          </Typography>

          <Typography variant="body2">Adres email</Typography>
        </div>
      </Stack>
    </Stack>
  );
};

const IconContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: 60,
  height: 60,
  minWidth: 60,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 16,

  [theme.breakpoints.up('sm')]: {
    width: 80,
    height: 80,
    minWidth: 80,
  },

  [theme.breakpoints.up('md')]: {
    marginRight: 32,
  },
}));
