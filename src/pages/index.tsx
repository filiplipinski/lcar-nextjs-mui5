import type { NextPage } from 'next';

import { HeroBanner } from 'src/modules/homepage/components/HeroBanner';
import { AboutCompany } from 'src/modules/homepage/components/AboutCompany';

const Home: NextPage = () => {
  return (
    <div>
      <HeroBanner />

      <AboutCompany />

      <div style={{ width: '100%', height: 500 }}></div>
    </div>
  );
};

export default Home;
