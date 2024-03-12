import type { NextPage, GetStaticProps } from 'next';
import { styled } from '@mui/material/styles';

import { getAllServices } from 'src/lib/contentful/api';
import { buildUrl } from 'src/lib/contentful/utils';
import { AsideProps } from 'src/common/components/AsideMenu';
import { PageTemplate } from 'src/common/components/PageTemplate';
import { Box, Typography } from '@mui/material';
import { offersData } from 'src/modules/home/components/Offers';
import { LazyImage } from 'src/common/components/LazyImage';
import { mediaQueries } from 'src/styles/theme';

const OrderedList = styled('ol')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  fontSize: '1.125rem', // 18px subtitle1
  fontWeight: 700,
  paddingLeft: 8,

  [theme.breakpoints.up('md')]: {
    paddingLeft: 0,
  },
}));

const crumbs = [{ name: 'Oferta' }, { name: 'Skoda' }];

export const SkodaOfferPage: NextPage<Props> = ({ asideProps }) => {
  return (
    <PageTemplate
      crumbs={crumbs}
      asideProps={asideProps}
      //   nextSeoProps // FILIP: TODO
    >
      <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
        Oferta na usługi outsourcingu myjni samochodowej <br /> oraz autodetailingu
      </Typography>

      <Typography variant="body2" sx={{ mb: 2, textAlign: 'right' }}>
        Radom 11.03.2024r.
      </Typography>

      <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
        AMD Auto Centrum Autoryzowany Salon i Serwis
        <br />
        Ul. Wernera 59
        <br />
        26-600 Radom
      </Typography>

      <OrderedList>
        <li>
          <Typography variant="subtitle1" mb={1}>
            O nas – lcar to wiedza, pasja, doświadczenie oraz niesamowita precyzja
          </Typography>

          <Typography>
            <strong>Firma LCAR</strong> działa na rynku radomskim od czterech lat w dziedzinie
            autodetailingu oraz usuwania zewnętrznych uszkodzeń nadwozi pojazdów jak i wyciszenia
            ich wnętrza. Właściciel - Karol Lipiński to manager, trener i konsultant serwisowy.
            Zdobyte doświadczenie zawodowe zbudowane na 15 letniej pracy w Autoryzowanych Serwisach
            czołowych marek, na różnych szczeblach (począwszy od magazynu, przygotowania pojazdów
            nowych, serwisu i napraw, po zarządzanie serwisem posprzedażnym), pozwoliło na szersze
            spojrzenie na biznes dealerski oraz potrzeby Autoryzowanych Stacji Obsługi oferując
            nowatorskie usługi nieinwazyjnych napraw powłok lakierowych Smart Repair oraz szeroko
            pojętego detailingu, a także wszelkich usług pielęgnacji pojazdu.
          </Typography>

          <Box
            sx={{
              position: 'relative',
              height: { xs: 250, sm: 350 },
              width: 'auto',
              maxWidth: 600,
              mt: 2,
              ml: 'auto',
              mr: 'auto',
            }}
          >
            <LazyImage
              src="/img/trzy-samochody-przed-garazem.jpg"
              alt="Trzy samochody stojące przed garażem"
              layout="fill"
              sizes={`${mediaQueries.lg} 100vw, 60vw`}
              objectFit="cover"
            />
          </Box>
        </li>

        <li>
          <Typography variant="subtitle1" mb={1}>
            Efect „WOW”
          </Typography>

          <Typography>
            Jak wiemy pierwsze wrażenie jest zazwyczaj kluczowe. Stąd w wielu obszarach kładziony
            jest bardzo duży nacisk na efekt „WOW” i zachwyt klienta. Nawet najlepiej wykonana
            praca, jeśli nie będzie odpowiednio sprzedana - nie uzyska swojej wartości i tym samym
            ceny. W LCAR dbamy o to, aby efekt „WOW” towarzyszył nieustająco i pozostał w pamięci
            klienta na długo.
          </Typography>
        </li>

        <li>
          <Typography variant="subtitle1" mb={1}>
            Myjnia a detailing?
          </Typography>

          <Typography>
            Kluczowym dla zadowolenia klienta jest finalne przygotowanie pojazdu do wydania, czy to
            auta nowego, czy auta po naprawie w serwisie. <strong>Myjnia</strong> ma więc na celu
            utrzymać samochód w czystości zewnętrznej oraz wewnętrznej, jednakże najczęściej jest
            wąskim gardłem w procesie wydania pojazdu, co wpływa na finalną oceną jakości usługi,
            zwłaszcza jeśli zostanie pominięta.
          </Typography>
          <br />
          <Typography>
            <strong>Detailing</strong> to szczególnie rozbudowany proces mycia, czyszczenia,
            polerowania oraz konserwacji auta z dbałością o każdy detal. Celem tych działań jest nie
            tylko idealna czystość zewnętrzna i wewnętrzna, ale przede wszystkim usunięcie
            niedoskonałości lakierniczych oraz zabezpieczenie powłok zewnętrznych i wewnętrznych
            pojazdu przed wpływami czynników zewnętrznych czy eksploatacyjnych.{' '}
            <strong>Detailing</strong> znacząco podnosi efekt wizualny, często też cenę samochodu, a
            przede wszystkim nadaje prestiż. W ramach detailingu mogą być wykonywane również
            dodatkowe usługi: jak renowacja i wyciszenia wnętrza, oklejanie nadwozia czy jego
            poszczególnych elementów jak szyby, reflektory itp.
          </Typography>
        </li>

        <li>
          <Typography variant="subtitle1" mb={1}>
            Dlaczego LCAR?
          </Typography>

          <Box
            sx={{
              position: 'relative',
              height: { xs: 250, sm: 350 },
              width: 'auto',
              maxWidth: 350,

              ml: 'auto',
              mr: 'auto',
            }}
          >
            <LazyImage
              src="/img/lcar-graph.png"
              alt="Graf LCAR"
              layout="fill"
              sizes={`${mediaQueries.lg} 100vw, 60vw`}
              objectFit="contain"
            />
          </Box>

          <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
            Zarządzanie
          </Typography>

          <Typography mb={1}>
            Rozwiązania, które oferuje nasza firma zapewniają nie tylko komfort zarządzania procesem
            przygotowania pojazdu do wydania, ale przede wszystkim daje gwarancję efektu finalnego.
            <strong>LCAR</strong> bierze na siebie pełną odpowiedzialność związaną z prowadzeniem
            tego działu. Dzięki czemu dealerzy mogą skupić się na swojej podstawowej działalności,
            mając pewność, że wszelkie kwestie związane z przygotowaniem estetycznym pojazdu zostaną
            rozwiązane przez profesjonalistów, co wpłynie na wydajności całego biznesu i satysfakcję
            klientów, gwarantując jakość wykonanych usług na miarę najwyższych oczekiwań klienta.
          </Typography>

          <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
            Komfort
          </Typography>

          <Typography mb={1}>
            W czasach, gdy pozyskanie dobrych pracowników jest nie tylko czasochłonne, ale także
            kosztowne, odciążamy naszych Partnerów, biorąc na siebie proces rekrutacji,
            zatrudnienia, szkolenia i dopilnowania pracowników. Gwarantujemy stabilność bieżącej
            pracy w przypadku nieplanowanych sytuacji (choroba, okres urlopowy, rezygnacja z pracy
            itp.).
          </Typography>

          <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
            Sprzedaż
          </Typography>

          <Typography mb={1}>
            Współpraca z <strong>LCAR</strong> to rozpoczęcie innowacyjnego programu skierowanego do
            dealerów samochodowych. Założeniem systemu jest kompensowanie podstawowych kosztów myjni
            poprzez sprzedaż dodatkowych usług detailingowych klientom ze wszystkich działów
            Dealera. Cały proces sprzedaży usług detailingowych oraz chemii leży po stronie LCAR, a
            dla Dealera pozostaje bonus obniżający koszty bieżącej działalności myjni.
          </Typography>

          <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
            Osczędność
          </Typography>

          <Typography mb={1}>
            Współpraca z <strong>LCAR</strong> daje Dealerom pełną kontrolę nad kosztami tego
            działu. Dzięki stałej współpracy i przejrzystej ofercie koszty mogą być łatwiej
            prognozowane i kontrolowane, co pozwala na uzyskanie oszczędności oraz lepsze
            wykorzystanie zasobów finansowych firmy. Dodatkowo LCAR gwarantuje dodatkowe wsparcie
            marketingowe wykonując zdjęcia oraz krótkie filmy na media społecznościowe.
          </Typography>
        </li>
      </OrderedList>
    </PageTemplate>
  );
};

type Props = {
  asideProps: AsideProps;
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async () => {
  const noOfServices = offersData.length;
  const otherServices = await getAllServices(noOfServices);
  const asideProps: AsideProps = {
    type: 'uslugi',
    data: otherServices.map(({ slug, title, introduction, mainImage }) => {
      return {
        slug,
        title: title || '',
        description: introduction || '',
        imgSrc: buildUrl(mainImage?.fields.file.url) || '',
      };
    }),
  };

  return {
    props: { asideProps },
    revalidate: 3600, // re-generate the page every 1hour
  };
};

export default SkodaOfferPage;
