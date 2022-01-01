import { navigationHeight } from '../components/navbar/Navbar';
import { AnchorElementsEnum } from '../components/navbar/Navbar.types';

export const scrollToElement = (elementAnchor: AnchorElementsEnum) => {
  const element = document.getElementById(elementAnchor);

  if (!element) {
    return;
  }

  const topOfElement = element.offsetTop - navigationHeight;

  window.scroll({ top: topOfElement, behavior: 'smooth' });
};
