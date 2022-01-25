import { Box, SxProps } from '@mui/material';
import { useRef, ReactNode } from 'react';
import { gsap, useIsomorphicLayoutEffect } from '..';

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  y?: number;
  triggerOnScroll?: boolean;
  sx?: SxProps;
};

// Pojawia się element od dołu
const FadeUpRaw = ({ children, duration, delay, y, triggerOnScroll, sx }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const animation = gsap.fromTo(
      elementRef.current,
      {
        y: y ?? 40,
        opacity: 0,
        duration: duration ?? 0.25,
        ease: 'power4.out',
      },
      {
        opacity: 1,
        y: 0,
        ease: 'power4.out',
        delay: delay ?? 0.5,
        scrollTrigger: triggerOnScroll
          ? {
              trigger: elementRef.current,
              start: 'top bottom-=50',
            }
          : undefined,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <Box ref={elementRef} sx={{ ...sx, opacity: 0 }}>
      {children}
    </Box>
  );
};

export const FadeUp = FadeUpRaw;
