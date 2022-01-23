import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';

import { HeroBanner } from 'src/modules/home/components/HeroBanner';
import { AboutCompany } from 'src/modules/home/components/AboutCompany';
import { CompanyPros } from 'src/modules/home/components/CompanyPros';
import { Offer, Offers, offersData } from 'src/modules/home/components/Offers';
import { Realizations } from 'src/modules/home/components/Realizations';
import { Brands } from 'src/modules/home/components/Brands';
import { getHomePageRealizations } from 'src/lib/contentful/api';
import { Realization } from 'src/lib/contentful/types';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  offers,
  realizations,
}) => {
  return (
    <div>
      <HeroBanner />

      <AboutCompany />

      <CompanyPros />

      <Offers offers={offers} />

      <Realizations realizations={realizations} />

      <Brands />
    </div>
  );
};

type Props = {
  offers: Offer[];
  realizations: Realization[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // DOCS: https://plaiceholder.co/docs/examples/next
  const offers = await Promise.all(
    offersData.map(async (offer) => {
      const { base64 } = await getPlaiceholder(offer.imgSrc);
      return { ...offer, blurDataURL: base64 };
    })
  );

  const realizations = await getHomePageRealizations();

  return {
    props: {
      offers,
      realizations,
    },
    revalidate: 60,
  };
};

export default Home;
