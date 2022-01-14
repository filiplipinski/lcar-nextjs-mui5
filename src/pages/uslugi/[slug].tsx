import { Typography, Container } from '@mui/material';
import type { NextPage, GetServerSidePropsContext } from 'next';
import Image from 'next/image';

import { getServiceEntry } from 'src/lib/contentful/api';
import { ServiceEntry } from 'src/lib/contentful/types';

type Props = {
  service: ServiceEntry['fields'];
};

export const ServicePage: NextPage<Props> = ({ service }) => {
  const { title, description, slug, gallery } = service;
  console.log('service w kliencie,', service);

  const imgSrc = `https:${gallery[0].fields.file.url}`;

  return (
    //   ZROBIC Z TEGO TEMPLATE!! z marginem TOP
    <Container sx={{ pt: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        {title}
      </Typography>

      <Typography>{description}</Typography>

      <Image src={imgSrc} alt={slug} width={500} height={400} />
    </Container>
  );
};

// TODO: getServerSide or getStaticProps? ZMIENIC NA STATIC PROPS + STATIC PATHS
export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{ slug: string }>) => {
  const slug = params?.slug || '/';

  const serviceEntry = await getServiceEntry(slug);
  if (!serviceEntry) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { service: serviceEntry.fields },
  };
};

// TODO: uzyc tutaj getStatisPaths?: https://dev.to/akuks/what-is-getstaticpaths-in-nextjs-5ee5
// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { slug: 'detailing-wnetrza' } }, { params: { slug: 'korekta-lakieru' } }],
//     fallback: true,
//   };
// }

export default ServicePage;
