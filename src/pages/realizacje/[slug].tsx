import { Typography, Container } from '@mui/material';
import type { NextPage, GetServerSidePropsContext } from 'next';
// import Image from 'next/image';

import { getRealizationEntry } from 'src/lib/contentful/api';
import { RealizationEntry } from 'src/lib/contentful/types';

type Props = {
  realization: RealizationEntry['fields'];
};

export const RealizationPage: NextPage<Props> = ({ realization }) => {
  const { title, description } = realization;

  //   console.log('RealizationEntry w kliencie,', realization);

  return (
    //   ZROBIC Z TEGO TEMPLATE!! z marginem TOP
    <Container sx={{ pt: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        {title}
      </Typography>

      <Typography>{description}</Typography>

      {/* <Image src={imgSrc} alt={slug} width={500} height={400} /> */}
    </Container>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{ slug: string }>) => {
  const slug = params?.slug || '/';

  const realizationEntry = await getRealizationEntry(slug);
  if (!realizationEntry) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { realization: realizationEntry.fields },
  };
};

export default RealizationPage;
