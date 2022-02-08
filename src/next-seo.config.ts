import { DefaultSeoProps } from 'next-seo';

const title = 'LCAR Auto Detailing - Radom';
const description =
  'Specjalizujemy się w naprawach bezinwazyjnych PDR (wyciąganie wgnieceń), wykonujemy korekty lakieru, polerowanie reflektorów, nanoszenie powłok i wosków ochronnych.';

export const defaultSeo: DefaultSeoProps = {
  defaultTitle: title,
  titleTemplate: '%s | Lcar Auto Detaling',
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.lcar.pl/',
    site_name: 'Lcar',
    images: [
      {
        url: '/img/meta-tags-image.jpg',
        width: 1200,
        height: 627,
        alt: 'Lcar',
      },
    ],
  },
};
