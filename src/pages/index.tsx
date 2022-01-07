import type { NextPage } from 'next';

import { HeroBanner } from 'src/modules/homepage/components/HeroBanner';
import { AboutCompany } from 'src/modules/homepage/components/AboutCompany';
import { CompanyPros } from 'src/modules/homepage/components/CompanyPros';
import { Offers } from 'src/modules/homepage/components/Offers';
import { Realizations } from 'src/modules/homepage/components/Realizations';

const Home: NextPage = () => {
  return (
    <div>
      <HeroBanner />

      <AboutCompany />

      <CompanyPros />

      <Offers />

      <Realizations />
    </div>
  );
};

export default Home;
