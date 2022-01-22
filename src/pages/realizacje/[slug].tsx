import { Typography, Container } from '@mui/material';
import type { NextPage, GetServerSidePropsContext } from 'next';
// import Image from 'next/image';

import { getRealization } from 'src/lib/contentful/api';
import { Realization } from 'src/lib/contentful/types';

type Props = {
  realization: Realization;
};

export const RealizationPage: NextPage<Props> = ({ realization }) => {
  const { title, description } = realization;

  //   console.log('RealizationEntry w kliencie,', realization);

  return (
    // TODO: uzyc tempaltu
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

  const realization = await getRealization(slug);
  if (!realization) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { realization },
  };
};

export default RealizationPage;
