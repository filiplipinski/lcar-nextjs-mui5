import { Box } from '@mui/material';
import { useRef, memo, ReactNode } from 'react';
import { gsap, useIsomorphicLayoutEffect } from '..';
import { getOffScreenLength } from '../utils/getOffScreen';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  shouldStart?: boolean;
};

const FlyInRaw = ({ children, delay, duration, shouldStart }: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!shouldStart) {
      return;
    }

    const x = getOffScreenLength(elementRef.current, 'left');

    const animation = gsap.fromTo(
      elementRef.current,
      {
        x,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        ease: 'expo.out', // or 'power4.inOut'
        delay: delay ?? 0,
        duration: duration ?? 1,
      }
    );

    return () => {
      animation.kill();
    };
  }, [shouldStart]);

  return (
    <Box ref={elementRef} sx={{ opacity: 0 }}>
      {children}
    </Box>
  );
};

export const FlyIn = memo(FlyInRaw);
