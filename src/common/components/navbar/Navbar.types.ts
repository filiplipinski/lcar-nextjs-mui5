export enum AnchorElementsEnum {
  Top = 'top',
  AboutCompany = 'o-firmie',
  CompanyOffer = 'uslugi',
  Realizations = 'realizacje',
  Contact = 'kontakt',
}

// TODO later: usługi bedzie mialo jeszcze menu rozsuwane, klik w podmenu otwiera nowa strone
export const navItems: { id: AnchorElementsEnum; title: string }[] = [
  {
    id: AnchorElementsEnum.AboutCompany,
    title: 'O firmie',
  },
  {
    id: AnchorElementsEnum.CompanyOffer,
    title: 'Usługi',
  },
  {
    id: AnchorElementsEnum.Realizations,
    title: 'Realizacje',
  },
  {
    // TODO later: id
    id: 'cennik' as AnchorElementsEnum,
    title: 'Cennik',
  },
  {
    id: AnchorElementsEnum.Contact,
    title: 'Kontakt',
  },
];
