import { Container, Typography } from '@mui/material';
import { ContactInfo } from 'src/modules/kontakt/components/ContactInfo';

const ContactPage = () => {
  return (
    <Container sx={{ mt: 10, mb: 5, pt: 10 }} maxWidth="lg">
      <Typography variant="h3">Kontakt</Typography>

      <Typography align="center" sx={{ mt: 4 }}>
        <strong>Auto detailing</strong> to specjalistyczna, wieloetapowa i świadoma pielęgnacja
        całego pojazdu lub jego poszczególnych elementów. Ma na celu oczyszczenie, konserwację,
        renowację i zabezpieczenie samochodu. Taką usługę warto wykonać zarówno w przypadku aut
        używanych, jak i nowych.
      </Typography>

      <ContactInfo />
    </Container>
  );
};

export default ContactPage;
