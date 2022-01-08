import type { NextPage, GetServerSideProps } from 'next';

import { HeroBanner } from 'src/modules/homepage/components/HeroBanner';
import { AboutCompany } from 'src/modules/homepage/components/AboutCompany';
import { CompanyPros } from 'src/modules/homepage/components/CompanyPros';
import { Offers } from 'src/modules/homepage/components/Offers';
import { Realizations } from 'src/modules/homepage/components/Realizations';
import { getRealizationsEntries } from 'src/lib/contentful/api';

type Props = {
  realizations: any;
};

const Home: NextPage<Props> = ({ realizations }) => {
  // console.log('realizations', realizations);

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const slug = String(params.slug ?? '/');

  // const realizations = await getRealizationsEntries();

  // console.log('services', services);
  return {
    props: { realizations: null },
  };
};

export default Home;
