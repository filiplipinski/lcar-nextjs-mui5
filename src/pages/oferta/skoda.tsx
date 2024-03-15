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
import { SRLWrapper } from 'simple-react-lightbox';

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

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={4} pl="6%">
        <LazyImage
          src="/img/skoda-logo.png"
          alt="Skoda"
          height={150}
          width={150}
          objectFit="contain"
        />
        <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
          AMD Auto Centrum Autoryzowany Salon i Serwis
          <br />
          Ul. Wernera 59
          <br />
          26-600 Radom
        </Typography>
      </Box>

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

          <Box maxWidth={600} mt={1} ml="auto" mr="auto">
            <LazyImage
              src="/img/trzy-samochody-przed-garazem.jpg"
              alt="Trzy samochody stojące przed garażem"
              width={1151}
              height={770}
              // layout="fill"
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
            <br />
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

          <Box maxWidth={250} ml="auto" mr="auto">
            <LazyImage
              src="/img/offer/lcar-graph.png"
              alt="Graf LCAR"
              width={384}
              height={392}
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

        <li>
          <Typography variant="subtitle1" mb={1}>
            Warunki handlowe oraz opis usługi zewnętrznej
          </Typography>

          <Typography>
            Zakres mycia ręcznego w LCAR został podzielony na 7 wariantów: od mycia podstawowego
            (serwisowego), aż po mycie detailingowe z procesem dekontaminacji i konserwacji ceramiki
            lub folii.
            <br />
            Równorzędnie na potrzeby tej oferty został przygotowany uproszczony cennik uśredniający
            zakres i cenę usług niezależny od wielkości pojazdu oraz stopnia jego zanieczyszczenia,
            oparty o uśrednioną czasochłonność wykonania usługi. Uproszczony cennik na pewno będzie
            pomocny podczas rozliczeń na koniec miesiąca, bazując na ilości zleconych pojazdów.
          </Typography>

          <SRLWrapper
            options={{
              buttons: {
                showAutoplayButton: false,
                showDownloadButton: false,
                showFullscreenButton: true,
                showThumbnailsButton: false,
              },
              thumbnails: {
                showThumbnails: false,
              },
              caption: {
                showCaption: false,
              },
            }}
          >
            <Box mt={1}>
              <LazyImage
                src="/img/offer/cennik-skoda-1.jpg"
                alt="Cennik usług zewnętrznych na prowadzenie profesjonalnej myjni"
                height={705}
                width={1290}
                layout="responsive"
                sizes={`${mediaQueries.lg} 100vw, 60vw`}
                objectFit="contain"
              />
            </Box>
          </SRLWrapper>
          <Typography variant="caption" sx={{ textAlign: 'center', display: 'block', mb: 2 }}>
            Kliknij aby zobaczyć w na cały ekran ⤴
          </Typography>

          <Typography>
            Z doświadczenia wiemy, że najlepsze rozwiązania biznesowe to najprostsze rozwiązania,
            takie które na wstępie eliminują możliwość popełnienia błędów technicznych czy
            komunikacyjnych. Wychodząc naprzeciw - poniżej przedstawiamy uproszczony cennik poprzez
            ujednolicenie zakresów mycia oraz opłat z tym związanych.
          </Typography>

          <SRLWrapper
            options={{
              buttons: {
                showAutoplayButton: false,
                showDownloadButton: false,
                showFullscreenButton: true,
                showThumbnailsButton: false,
              },
              thumbnails: {
                showThumbnails: false,
              },
              caption: {
                showCaption: false,
              },
            }}
          >
            <Box mt={1}>
              <LazyImage
                src="/img/offer/cennik-skoda-2.jpg"
                alt="Uproszczony cennik usług zewnętrznych na prowadzenie profesjonalnej myjni"
                height={382}
                width={1304}
                layout="responsive"
                sizes={`${mediaQueries.lg} 100vw, 60vw`}
                objectFit="contain"
              />
            </Box>
          </SRLWrapper>

          <Typography variant="caption" sx={{ textAlign: 'center', display: 'block', mb: 2 }}>
            Kliknij aby zobaczyć w na cały ekran ⤴
          </Typography>

          <Typography>
            Wielu klientów zabezpiecza swoje nowe auto zarówno powłokami jak i foliami ochronnymi
            PPF. W dzisiejszej dobie nie jest to wcale proste umyć dokładnie samochód, odpowiednio
            zakonserwować, bez wykwalifikowanej wiedzy oraz detergentów do tego celu przewidzianych.
            Dlatego warto jest przekazanie działu myjni fachowcom w tej dziecinie, ponieważ
            ograniczy to ryzyko, stres, reklamacje oraz zmniejszy ilość niezadowolonych klientów.
            Natomiast korzystając z profesjonalistów w zakresie autodetailinu spotęguje to efekt
            pierwszego wrażenia po odbiorze nowego samochodu, czy auta po usłudze serwisowej.
            Zadowolenie Państwa klientów zdecydowanie zwiększy wskaźnik polecenia serwisu.
          </Typography>
        </li>

        <li>
          <Typography variant="subtitle1" mb={1}>
            Minimalna ilość zleceń
          </Typography>

          <Typography>
            Gwarantując Państwu, dostępność na stałe jednego pracownika firmy LCAR w wymiarze
            minimum: 8 godzin dziennie, pięć dni w tygodniu, trzeba się liczyć z kosztami stałymi,
            jakie musimy ponieść. Koszty stałe wynikają z kosztów zatrudnienia pracownika na umowę o
            pracę oraz opłatami ZUS, polisy OC firmy jaki i kosztami związanymi ze środkami
            chemicznymi. Jeśli ilość zleceń z Państwa strony będzie niewystarczająca dla osiągniecia
            obrotu pozwalającego pokryć te koszty stałe musimy przewidzieć minimalny koszt
            miesięczny jakim Państwa zafakturujemy. Tym samym kwota za wykonane usługi oraz gotowość
            do ich wykonania wyniesie{' '}
            <strong>minimum 9 500 tysięcy złotych netto miesięcznie</strong>, a w przypadku
            zabezpieczenia dwóch zmian dziennie, czyli na stałe dwóch pracowników jest to kwota 19
            000 zł netto.
          </Typography>
        </li>

        <li>
          <Typography variant="subtitle1" mb={1}>
            Ograniczenia w ofercie
          </Typography>

          <Typography>
            W wyżej przedstawionych propozycjach finansowych nie uwzględniono ponoszenia przez LCAR
            kosztów takich jak:
            <ul>
              <li>Media (woda, prąd, środki do konserwacji pomieszczeń myjni</li>
              <li>Podatki lokalowe (podatek od gruntu, pomieszczeń)</li>
              <li>
                Koszt zapewnienia i utrzymania stacjonarnych (dealerskich) urządzeń myjących i
                odkurzających
              </li>
              <li>Amortyzacji oraz serwisu pomieszczenia myjni</li>
            </ul>
          </Typography>
        </li>

        <li>
          <Typography variant="subtitle1" mb={1}>
            Rozszerzenie usług i bonus dealerski
          </Typography>

          <Typography>
            Mając w ofercie ogromny wachlarz profesjonalnych usług detailingowych podnoszących
            walory estetyczne i ochronne samochodów, uważam, że nie wystąpią takie miesiące gdzie
            Państwo nie zapewnicie ilości zleceń i będziecie zobowiązani wypłacić minimalną kwotę
            stałą z umowy. Tym samym po stronie LCAR będzie przygotowanie prostych w opisie oraz
            atrakcyjnych ofert pakietowych dla usług dodatkowych. Doświadczenie nasze wskazuje, że
            każdy posiadacz nowego samochodu lub klient serwisu będzie chciał skorzystać z usługi
            premium zabezpieczającej pojazd na miejscu u Państwa w serwisie lub co najmniej
            konserwacji powłok lub folii już założonych.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ mt: 2, textTransform: 'uppercase', textDecoration: 'underline' }}
          >
            Dla Państwa popłyną z tego dodatkowe korzyści ponieważ, proponujemy utworzenie systemu
            bonusowego dla Dealera, za każde rozszerzenie usług ponad wymagany standard. Oferujemy
            zatem rabat od każdej dodatkowej usługi, abyście mieli Państwo narzędzie do motywacji
            swoich handlowców. Rabat wyniesie 10% wartości zafakturowanej klientowi przez LCAR
            usługi i może być odejmowany z miesięcznego rozliczenia lub przekazywany jako voucher na
            inne zlecenia.
          </Typography>

          <Typography mt={2}>
            Współpracując z LCAR dajesz możliwość swoim klientom skorzystania z następujących usług
            dodatkowych:
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, textDecoration: 'underline' }}>
            Korekta lakieru
          </Typography>

          {/* TODO FILIP: ogarnac inaczej, pozbyc sie style */}
          <ul style={{ fontWeight: 'normal' }}>
            <li>polerowanie wykonujemy w celu usunięcia zarysowań oraz hologramów na lakierze</li>
            <li>
              jednoetapową tzw. One step odświeża lakier nadaje głębi kolorystycznej oraz znika
              całkowicie hologram (usuwa zarysowania do 50% rys)
            </li>
            <li>
              dwuetapowa korekta lakieru, proces ten usuwa od 60 do 80 % zarysowań nadając niezwykły
              blask lakieru
            </li>
            <li>wieloetapowa korekta lakieru;</li>
          </ul>

          <Typography variant="h6" sx={{ mt: 2, textDecoration: 'underline' }}>
            Zabezpieczenie lakieru
          </Typography>

          <Typography>
            Najnowsze powłoki ceramiczne zachowują doskonały wygląd twojego samochodu. Dodatkowo
            chronią go przed ptasimi odchodami, mocną chemia i oksydacją. Certyfikowana trwałość 10
            H ogranicza powstawanie mikro zarysowań. Wysoka szklistość oraz połysk wyróżnią z tłumu
            Twój samochód. Hydrofobowość na najwyższym poziomie gwarantuje łatwe i przyjemne mycie.
            <br />
            <br /> Wybór powłoki należy do Ciebie
          </Typography>

          <Box mt={1}>
            <LazyImage
              src="/img/karol1.jpg"
              alt="Dokładne polerowanie lakieru"
              height={305}
              width={1387}
              layout="responsive"
              sizes={`${mediaQueries.lg} 100vw, 60vw`}
              objectFit="contain"
            />
          </Box>

          <Typography variant="h6" sx={{ mt: 2, textDecoration: 'underline' }}>
            Zabezpieczenie ochronne foliami PPF
          </Typography>

          <Typography>
            Folie PPF to najlepsza ochrona i doskonałe właściwości estetyczne. Jest bardzo
            elastyczna, dzięki czemu łatwo się aplikuje, a innowacyjny top coat chroni przed
            odplamieniami i zapewnia hydrofobowość. Wyróżnia się doskonałą klarownością, nadaje
            lakierowi niepowtarzalną szklistość i połysk, świetnie się regeneruje, jednocześnie
            gwarantując najlepsze właściwości ochronne. Już teraz jest to najszybciej rozwijający
            się system zabezpieczenia lakieru przed zarysowaniami oraz odpryskami od kamieni.
          </Typography>

          <Box display="flex" alignItems="center" justifyContent="space-around">
            <LazyImage
              src="/img/skoda-logo.png"
              alt="Skoda"
              height={120}
              width={120}
              objectFit="contain"
            />
            <LazyImage
              src="/img/logo.png"
              alt="Lcar"
              height={120}
              width={150}
              objectFit="contain"
            />
          </Box>
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
