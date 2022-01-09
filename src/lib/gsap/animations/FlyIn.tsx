import { useRef, memo, ReactNode } from 'react';
import { gsap, useIsomorphicLayoutEffect } from '..';
import { getOffScreenLength } from '../utils/getOffScreen';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

const FlyInRaw = ({ children, delay, duration }: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const x = getOffScreenLength(elementRef.current, 'left');

    const animation = gsap.fromTo(
      elementRef.current,
      {
        x,
      },
      {
        x: 0,
        y: 0,
        ease: 'expo.out', // 'power4.inOut'
        delay: delay ?? 0,
        duration: duration ?? 1,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export const FlyIn = memo(FlyInRaw);
