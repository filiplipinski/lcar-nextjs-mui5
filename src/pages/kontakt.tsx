import { Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { navigationHeight } from 'src/common/components/navbar/Navbar';
import { ContactForm } from 'src/modules/kontakt/components/ContactForm';
import { ContactInfo } from 'src/modules/kontakt/components/ContactInfo';

const ContactPage = () => {
  return (
    <Container sx={{ pt: `${navigationHeight}px`, mb: 6, mt: 6 }} maxWidth="lg">
      <Typography variant="h3">Kontakt</Typography>

      <Typography sx={{ mt: 2 }}>
        Potrzebujesz wsparcia, profesjonalną poradę lub chcesz się jescze o coś dopytać? <br />{' '}
        Skontaktuj się z nami w wygodnej dla siebie formie. Odpowiemy z przyjemnością najszybciej
        jak możemy
      </Typography>

      <StyledStack sx={{ mt: 4 }}>
        <ContactInfo />

        <ContactForm />
      </StyledStack>
    </Container>
  );
};

const StyledStack = styled(Stack)(({ theme }) => ({
  '& > *': {
    flexBasis: '50%',
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export default ContactPage;
