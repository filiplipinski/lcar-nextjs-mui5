export enum AnchorElementsEnum {
  Top = 'anchorTop',
  AboutCompany = 'anchorAboutCompany',
  CompanyOffer = 'anchorCompanyOffer',
  Realizations = 'anchorRealizations',
  Contact = 'anchorContact',
}

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
    id: AnchorElementsEnum.Contact,
    title: 'Kontakt',
  },
];
