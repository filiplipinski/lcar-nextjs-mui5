import { navigationHeight } from '../components/navbar/Navbar';
import { AnchorElementsIdEnum } from '../components/navbar/Navbar.types';

export const scrollToElement = (elementId: AnchorElementsIdEnum | string) => {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  const topOfElement = element.offsetTop - navigationHeight;

  window.scroll({ top: topOfElement, behavior: 'smooth' });
};
