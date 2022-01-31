import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ContactForm } from 'src/modules/kontakt/components/ContactForm';
import { ContactInfo } from 'src/modules/kontakt/components/ContactInfo';
import { PageTemplate } from 'src/common/components/PageTemplate';

const crumbs = [{ name: 'Kontakt' }];

const ContactPage = () => {
  return (
    <PageTemplate title="Kontakt" crumbs={crumbs}>
      <Typography>
        Potrzebujesz wsparcia, profesjonalną poradę lub chcesz się jescze o coś dopytać? <br />{' '}
        Skontaktuj się z nami w wygodnej dla siebie formie. Odpowiemy z najszybciej jak możemy
      </Typography>

      <StyledStack sx={{ mt: 4 }}>
        <ContactInfo />

        <ContactForm />
      </StyledStack>
    </PageTemplate>
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
