import { navigationHeight } from '../components/navbar/Navbar';

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  const topOfElement = element.offsetTop - navigationHeight;

  window.scroll({ top: topOfElement, behavior: 'smooth' });
};
