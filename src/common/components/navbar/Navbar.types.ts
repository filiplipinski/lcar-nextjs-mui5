const scrollToId = 'scrollto';

// FYI: zrobiłem to tak, poniewaz inaczej scrollował się domyślny przeglądarkowy scroll hash do anchor z ID
// Wolę samemu to kontrolować (scroller jest w _app.tsx), gdyz mam wladze jaki ma byc efekt scrollowania,
// ze ma miec pewny offset (wysokosc navbara), a takze byl blad z nawigowaniem do sekcji najwyzej #top.
// (scroll przesuwal się tylko o 1 px do gory)
export const scrollToElementsId = {
  top: `${scrollToId}-top`,
  aboutCompany: `${scrollToId}-o-firmie`,
  offer: `${scrollToId}-uslugi`,
  realizations: `${scrollToId}-realizacje`,
} as const;

// TODO later: usługi bedzie mialo jeszcze menu rozsuwane, klik w podmenu otwiera nowa strone
export const navItems: { title: string; href: string }[] = [
  {
    title: 'O firmie',
    href: '/#o-firmie',
  },
  {
    title: 'Usługi',
    href: '/#uslugi',
  },
  {
    title: 'Realizacje',
    href: '/#realizacje',
  },
  // {
  //   // TODO later: id
  //   id: 'cennik' as AnchorElementsIdEnum,
  //   title: 'Cennik',
  // },
  {
    title: 'Kontakt',
    href: '/kontakt',
  },
];
