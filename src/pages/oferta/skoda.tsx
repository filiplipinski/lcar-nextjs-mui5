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

const OrderedList = styled('ol')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

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

          <Typography mb={1}>
            <Typography component="span" variant="subtitle1" fontWeight="bold">
              KAROL LIPIŃSKI
            </Typography>{' '}
            – właściciel firmy manager, trener i konsultant serwisowy.
          </Typography>

          <Typography>
            Doświadczenie zawodowe zbudowane na 15 letniej pracy w Autoryzowanych Serwisach
            czołowych marek, na różnych szczeblach, w tym 6 letnie doświadczenie w prowadzeniu i
            zarządzaniu serwisem posprzedażnym (pojazdów osobowych, dostawczych, ciężarowych i
            autobusów). Absolwent Wojskowej Akademii Technicznej Wydział Mechaniczny – Cywilny, oraz
            Wojskowy, Oficer i żołnierz Wojska Polskiego oraz ekspert w dziedzinie detailingu,
            nieinwazyjnych napraw powłok lakierowych najnowszymi technologiami Smart Repair.
            Pasjonat motoryzacji, sportów wodnych i sztuk walki.
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
            Myjnia, a detailing?
          </Typography>

          <Typography>
            Myjnia na celu utrzymać samochód w czystości zewnętrznej oraz wewnętrznej. Najczęściej w
            serwisach Autoryzowanych jest wąskim gardłem oraz niestety znaczącym kosztem serwisowym.{' '}
            <br />
            <Typography component="span" fontWeight="bold">
              Detailing
            </Typography>{' '}
            to szczególnie rozbudowany proces mycia, czyszczenia, polerowania oraz konserwacji auta.{' '}
            <Typography component="span" fontWeight="bold">
              Celem tych działań jest
            </Typography>{' '}
            jest zabezpieczenie karoserii oraz wnętrza, usunięcie niedoskonałości lakierniczych i
            zabezpieczenie powłok pojazdu przed wpływami czynników zewnętrznych, eksploatacyjnych.
            Detailing znacząco podnosi wygląd wizualny często cenę samochodu, a przede wszystkim
            prestiż.
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
            Rozwiązania, które oferuje nasza firma zapewniają nie tylko oszczędność czasu i kosztów,
            ale przede wszystkim komfort zarządzania. LCAR bierze na siebie pełną odpowiedzialność
            związaną z prowadzeniem tego działu. Dzięki czemu dealerzy mogą skupić się na swojej
            podstawowej działalności, mając pewność, że wszelkie problemy związane z myjnią zostaną
            rozwiązane przez profesjonalistów, co wpłynie na wydajności całego biznesu. Dodatkowo
            gwarantując jakość wykonanych usług na miarę najwyższych oczekiwań klienta.
          </Typography>

          <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
            Komfort
          </Typography>

          <Typography mb={1}>
            W czasach, gdy pozyskanie dobrych pracowników jest nie tylko czasochłonne, ale także
            kosztowne, odciążamy naszych Partnerów, biorąc na siebie proces rekrutacji, zatrudnienia
            i szkolenia pracowników. Gwarantujemy stabilność bieżącej pracy w przypadku
            nieplanowanych sytuacji (choroba, rezygnacja z pracy itp.). W ramach współpracy Dealer
            nie ponosi kosztów związanych ze sprzętem oraz chemią niezbędną do wykonywania usług
            (nie dotyczy myjni automatycznej).
          </Typography>

          <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
            Sprzedaż
          </Typography>

          <Typography mb={1}>
            Współpraca z LCAR to rozpoczęcie innowacyjnego programu skierowanego do dealerów
            samochodowych. Założeniem systemu jest kompensowanie kosztów myjni po przez sprzedaż
            usług detailingowych do klientów ze wszystkich działów dealera. Cały proces sprzedaży
            usług detailingowych oraz chemii leży po stronie LCAR, a dla Dealera pozostaje dodatkowy
            bonus.
          </Typography>

          <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
            Osczędność
          </Typography>

          <Typography mb={1}>
            Współpraca z LCAR daje naszym klientom pełną kontrolę nad kosztami. Dzięki stałej
            współpracy koszty mogą być łatwiej prognozowane i kontrolowane, co pozwala na uzyskanie
            oszczędności oraz lepsze wykorzystanie zasobów finansowych firmy. Dodatkowo LCAR
            gwarantuje dodatkowe wsparcie marketingowe wykonując zdjęcia oraz krótkie filmy na media
            społecznościowe.
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
