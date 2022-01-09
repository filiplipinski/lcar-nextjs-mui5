import { createContext, Dispatch, SetStateAction } from 'react';

type GsapTransitionContextValue = {
  timeline: gsap.core.Timeline;
  setTimeline: Dispatch<SetStateAction<gsap.core.Timeline>>;
};

export const GsapTransitionContext = createContext<GsapTransitionContextValue | undefined>(
  undefined
);
