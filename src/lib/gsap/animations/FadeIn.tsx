import { Box } from '@mui/material';
import { useRef, memo, ReactNode } from 'react';
import { gsap, useIsomorphicLayoutEffect } from '..';

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  shouldStart?: boolean;
};

const FadeInRaw = ({ children, duration, delay, shouldStart }: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!shouldStart) {
      return;
    }

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
  }, [shouldStart]);

  return (
    <Box ref={elementRef} sx={{ opacity: 0 }}>
      {children}
    </Box>
  );
};

// TODO rozkmina: czy potrzebne memo, jezeli przekazujemy obiekt - children

export const FadeIn = memo(FadeInRaw);
