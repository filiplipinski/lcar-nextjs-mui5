export enum AnchorElementsEnum {
  Top = 'anchorTop',
  AboutCompany = 'anchorAboutCompany',
  CompanyOffer = 'anchorCompanyOffer',
  Realizations = 'anchorRealizations',
  Contact = 'anchorContact',
}

// TODO: usługi bedzie mialo jeszcze menu rozsuwane, klik w podmenu otwiera nowa strone
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
    // TODO: id
    id: 'cennik' as AnchorElementsEnum,
    title: 'Cennik',
  },
  {
    id: AnchorElementsEnum.Contact,
    title: 'Kontakt',
  },
];
