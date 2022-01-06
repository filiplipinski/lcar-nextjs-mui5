import { Container, Typography, Grid } from '@mui/material';

import { AnchorElementsEnum } from 'src/common/components/navbar/Navbar.types';
import { OfferCard } from './OfferCard';

// TODO: ladne opisy porobic
const servicesData = [
  {
    title: 'Detailing wnętrza',
    description:
      'Obejmuje dokładne odkurzanie nawet najdrobniejszych szczelin, staranne oczyszczenie dobranymi środkami tapicerki skórzanej, materiałowej oraz tworzyw sztucznych. Zastosowanie specjalistycznych impregnatów',
    imgSrc: '/img/offer/detailing-wnetrza.jpg',
  },
  {
    title: 'Korekta lakieru',
    description:
      'Korekta lakieru lub inaczej polerowanie samochodu ma na celu zniwelowanie niedoskonałości lakieru',
    imgSrc: '/img/offer/korekta-lakieru.jpg',
  },
  {
    title: 'Powłoki ochronne',
    description:
      'Powłoka zapewnia przez hydrofobowość oraz zwiększenie gładkości lakieru zapobiega przywieraniu brudu, powstawaniu korozji, a takze zabezpiecza lakier przed naturalnymi procesami, jakimi są starzenie oraz matowienie koloru',
    imgSrc: '/img/offer/korekta-lakieru.jpg', // TODO
  },
  {
    title: 'Usuwanie wgnieceń (PDR)',
    description:
      'Usuwanie wgnieceń karoserii samochodowych bez konieczności późniejszego lakierowania metodą bezinzwazyjną PDR',
    imgSrc: '/img/offer/usuwanie-wgniecen.jpg',
  },
  {
    title: 'Renowacja tapicerki skórzanej',
    description:
      'Bezpieczne środki usuną nawet głębokie zabrudzenia i przedłużą żywotność skóry – będzie aksamitna w dotyku i odżywiona',
    imgSrc: '/img/offer/renowacja-tapicerki.jpg',
  },
  {
    title: 'Usługi tapicerskie',
    description:
      'Jeżeli tapicerka uległa znacznemu zniszczeniu zajmiemy się obszyciem nowym materiałem',
    imgSrc: '/img/offer/uslugi-tapicerskie.jpg',
  },
  {
    title: 'Wyciszanie auta',
    description:
      'Dzięki nałożeniu kilku warstw materiałów eliminujemy hałas, piski i dudnienie o niskiej częstotliwości.',
    imgSrc: '/img/offer/polerowanie.jpg', // TODO
  },
  {
    title: 'Usługi dodatkowe',
    description:
      'W swojej ofercie usług detailingowych posiadamy również ponadstandardowe zabiegi, które dodają autom luksusowego i prestiżowego charakteru',
    imgSrc: '/img/offer/uslugi-dodatkowe.jpg',
  },
];

export const Offers = () => {
  return (
    <Container id={AnchorElementsEnum.CompanyOffer} sx={{ mt: 6 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        Usługi
      </Typography>

      <Grid container direction="row" spacing={4} sx={{ mt: 4 }}>
        {/* TODO: przekazac propy przez spread */}
        {servicesData.map((offerCardProps) => (
          <Grid item key={offerCardProps.imgSrc}>
            <OfferCard {...offerCardProps} />

            {/* <div style={{ width: 400 }}>{offerCardProps.title}</div> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
