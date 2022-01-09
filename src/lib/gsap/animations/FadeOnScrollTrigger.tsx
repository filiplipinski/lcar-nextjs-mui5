import { useRef, memo, ReactNode } from 'react';
import { gsap, useIsomorphicLayoutEffect } from '..';

type Props = {
  children: ReactNode;
};

const FadeOnScrollTriggerRaw = ({ children }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const animation = gsap.fromTo(
      elementRef.current,
      {
        autoAlpha: 0,
      },
      {
        duration: 0.5,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top bottom-=300', // when the top of the trigger hits the bottom of the viewport - 300px
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export const FadeOnScrollTrigger = memo(FadeOnScrollTriggerRaw);
