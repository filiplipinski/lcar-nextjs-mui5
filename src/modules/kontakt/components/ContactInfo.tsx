import { Home, PhoneAndroid, MailOutline } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContactInfo = () => {
  return (
    <Stack spacing={4} sx={{ mt: { md: 6 } }}>
      <Stack direction="row" alignItems="center">
        <IconContainer>
          <Home sx={{ color: 'secondary.main', fontSize: 48 }} />
        </IconContainer>
        <div>
          <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>
            Karol Lipiński
          </Typography>
          <Typography variant="body2">
            ul. Złota 48 <br /> 26-604 Radom
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
            539 943 336
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
              variant="h5"
              component="span"
              color="secondary"
              sx={{ textTransform: 'inherit' }}
            >
              karol.lipinski
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
  width: 80,
  height: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 16,

  [theme.breakpoints.up('md')]: {
    marginRight: 32,
  },
}));
