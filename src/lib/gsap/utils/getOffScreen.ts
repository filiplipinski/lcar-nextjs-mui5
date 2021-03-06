// set its x position to screen.width minus its current x position plus half the element width
// https://greensock.com/forums/topic/27591-animate-in-from-offscreen/
export const getOffScreenLength = (el: HTMLElement | null, direction: 'left' | 'right'): number => {
  if (!el) {
    return 0;
  }

  const rect = el.getBoundingClientRect();

  if (direction === 'left') {
    return 0 - rect.left - el.offsetWidth;
  } else {
    return screen.width - rect.left + el.offsetWidth / 2;
  }
};
