import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';

import { HeroBanner } from 'src/modules/home/components/HeroBanner';
import { AboutCompany } from 'src/modules/home/components/AboutCompany';
import { CompanyPros } from 'src/modules/home/components/CompanyPros';
import { Offer, Offers, offersData } from 'src/modules/home/components/Offers';
import { Realizations } from 'src/modules/home/components/Realizations';
import { Brands } from 'src/modules/home/components/Brands';
// import { getRealizationsEntries } from 'src/lib/contentful/api'; // TODO

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ offers }) => {
  return (
    <div>
      <HeroBanner />

      <AboutCompany />

      <CompanyPros />

      <Offers offers={offers} />

      <Realizations />

      <Brands />
    </div>
  );
};

type Props = {
  offers: Offer[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // DOCS: https://plaiceholder.co/docs/examples/next
  const offers = await Promise.all(
    offersData.map(async (offer) => {
      const { base64 } = await getPlaiceholder(offer.imgSrc);
      return { ...offer, blurDataURL: base64 };
    })
  );

  return {
    props: {
      offers,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // const slug = String(params.slug ?? '/');

//   // const realizations = await getRealizationsEntries();

//   // console.log('services', services);
//   return {
//     props: { realizations: null },
//   };
// };

export default Home;
