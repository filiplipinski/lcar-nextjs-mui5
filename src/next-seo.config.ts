import { DefaultSeoProps } from 'next-seo';

const title = 'Kosmetyka samochodowa w Radomiu';
const description =
  'Detailing samochodowy w Radomiu i okolicach– korekta lakieru, powłoki ochronne, detailing wnętrza, PDR i renowacja tapicerki. Poznaj usługi studia LCAR!';

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
