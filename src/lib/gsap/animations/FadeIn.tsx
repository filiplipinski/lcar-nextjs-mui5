import { useRef, memo, ReactNode } from 'react';
import { gsap, useIsomorphicLayoutEffect } from '..';

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
};

const FadeInRaw = ({ children, duration, delay }: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const animation = gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: 'power4.out',
        delay: delay ?? 0,
        duration: duration ?? 0.5,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

// TODO: czy potrzebne memo, jezeli przekazujemy obiekt - children

export const FadeIn = memo(FadeInRaw);
