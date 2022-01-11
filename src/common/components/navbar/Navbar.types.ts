export enum AnchorElementsIdEnum {
  Top = 'top',
  AboutCompany = 'o-firmie',
  CompanyOffer = 'uslugi',
  Realizations = 'realizacje',
  Contact = 'kontakt',
}

// TODO later: usługi bedzie mialo jeszcze menu rozsuwane, klik w podmenu otwiera nowa strone
export const navItems: { id: AnchorElementsIdEnum; title: string; href: string }[] = [
  {
    id: AnchorElementsIdEnum.AboutCompany,
    title: 'O firmie',
    href: '/#o-firmie',
  },
  {
    id: AnchorElementsIdEnum.CompanyOffer,
    title: 'Usługi',
    href: '/#uslugi',
  },
  {
    id: AnchorElementsIdEnum.Realizations,
    title: 'Realizacje',
    href: '/#realizacje',
  },
  // {
  //   // TODO later: id
  //   id: 'cennik' as AnchorElementsIdEnum,
  //   title: 'Cennik',
  // },
  {
    id: AnchorElementsIdEnum.Contact,
    title: 'Kontakt',
    href: '/kontakt',
  },
];
