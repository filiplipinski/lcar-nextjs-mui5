import { Box, SxProps } from '@mui/material';
import { useRef, memo, ReactNode } from 'react';
import { gsap, useIsomorphicLayoutEffect } from '..';
import { getOffScreenLength } from '../utils/getOffScreen';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right';
  manualTriggerMode?: boolean; // if true, then must use shouldTrigger
  triggerManually?: boolean;
  triggerOnScroll?: boolean;
  sx?: SxProps;
};

// Pojawia się element przylatujac z boku
const FlyInRaw = ({
  children,
  delay,
  duration,
  manualTriggerMode = false,
  triggerManually,
  direction = 'left',
  triggerOnScroll,
  sx,
}: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const shouldStart = manualTriggerMode ? triggerManually : true;
  const x = getOffScreenLength(elementRef.current, direction);

  useIsomorphicLayoutEffect(() => {
    if (!shouldStart) {
      return;
    }

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
        scrollTrigger: triggerOnScroll
          ? {
              trigger: elementRef.current,
              start: 'top bottom-=100',
            }
          : undefined,
      }
    );

    return () => {
      animation.kill();
    };
  }, [shouldStart]);

  return (
    <Box ref={elementRef} sx={{ ...sx, transform: `translateX(${x}px)`, opacity: 0 }}>
      {children}
    </Box>
  );
};

export const FlyIn = memo(FlyInRaw);
