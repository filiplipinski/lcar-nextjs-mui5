import { Box } from '@mui/material';
import { useRef, ReactNode } from 'react';
import { gsap, useIsomorphicLayoutEffect } from '..';

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  manualTriggerMode?: boolean; // if true, then must use shouldTrigger
  triggerManually?: boolean;
  triggerOnScroll?: boolean;
};

// Pojawia się element od przezroczystosci
const FadeInRaw = ({
  children,
  duration,
  delay,
  manualTriggerMode = false,
  triggerManually,
  triggerOnScroll,
}: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const shouldStart = manualTriggerMode ? triggerManually : true;

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
        scrollTrigger: triggerOnScroll
          ? {
              trigger: elementRef.current,
              start: 'top bottom-=100', // when the top of the trigger hits the bottom of the viewport - 300px
              // toggleActions: 'play none none reverse', // reverse animation when going up
            }
          : undefined,
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

export const FadeIn = FadeInRaw;
