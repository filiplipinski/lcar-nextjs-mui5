import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography, Container } from '@mui/material';

import { HeroBanner } from 'src/modules/homepage/components/HeroBanner';
import { AboutCompany } from 'src/modules/homepage/components/AboutCompany';
import { CompanyPros } from 'src/modules/homepage/components/CompanyPros';
import { Offers } from 'src/modules/homepage/components/Offers';

const Home: NextPage = () => {
  return (
    <div>
      <HeroBanner />

      <AboutCompany />

      <CompanyPros />

      {/* TEST section below */}
      {/* TODO: jakas animacja do pojawiajacego sie tekstu */}
      {/* <div style={{ position: 'relative', width: '100vw', height: 300 }}>
        <Container sx={{ zIndex: 1, position: 'relative', padding: 3 }}>
          <Typography
            align="center"
            style={{
              color: 'white',
              maxWidth: 600,
              marginLeft: 'auto',
            }}
          >
            <strong>Auto detailing</strong> to specjalistyczna, wieloetapowa i świadoma pielęgnacja
            całego pojazdu lub jego poszczególnych elementów. Ma na celu oczyszczenie, konserwację,
            renowację i zabezpieczenie samochodu. Taką usługę warto wykonać zarówno w przypadku aut
            używanych, jak i nowych.
          </Typography>
          <br />

          <Typography align="center" style={{ color: 'white', maxWidth: 600, marginLeft: 'auto' }}>
            Auto detailing w równym stopniu dba o stronę zewnętrzną pojazdu oraz jego wnętrze. W
            efekcie dzięki przemyślanym działaniom indywidualnie dopasowanymi do potrzeb samochodu
            oraz oczekiwań właściciela, klient otrzymuje samochód w zachwycającym stanie.
          </Typography>
        </Container>

        <Image
          src="/img/section-banner.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
        />

        <Image
          src="/img/shadow.png"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
        />
      </div> */}

      <Offers />

      {/* <div style={{ width: '100%', height: 500, backgroundColor: 'black' }}></div> */}
    </div>
  );
};

export default Home;
