import { useEffect, useRef } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Loader as GoogleMapsLoader } from '@googlemaps/js-api-loader';

import { ContactForm } from 'src/modules/kontakt/components/ContactForm';
import { ContactInfo } from 'src/modules/kontakt/components/ContactInfo';
import { PageTemplate } from 'src/common/components/PageTemplate';

const crumbs = [{ name: 'Kontakt' }];
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS;

const ContactPage = () => {
  const googleMapsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new GoogleMapsLoader({
      apiKey: googleMapsApiKey,
      version: 'weekly',
      libraries: ['places'],
    });

    loader.load().then(() => {
      if (!googleMapsRef.current) {
        return;
      }
      new window.google.maps.Map(googleMapsRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }, []);

  return (
    <PageTemplate title="Kontakt" crumbs={crumbs}>
      <Typography>
        Potrzebujesz wsparcia, profesjonalną poradę lub chcesz się jescze o coś dopytać? <br />{' '}
        Skontaktuj się z nami w wygodnej dla siebie formie. Odpowiemy z przyjemnością najszybciej
        jak możemy
      </Typography>

      <StyledStack sx={{ mt: 4 }}>
        <ContactInfo />

        <ContactForm />
      </StyledStack>

      <Box ref={googleMapsRef} sx={{ height: 300, mt: 4 }} />
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
