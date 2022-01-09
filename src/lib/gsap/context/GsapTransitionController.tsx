import { ReactNode, useState } from 'react';
import { gsap } from 'src/lib/gsap';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';

import { GsapTransitionContext } from './GsapTransitionContext';

// GSAP animation and timeline context based on https://github.com/johnpolacek/TweenPages
export const GsapTransitionContextController = ({ children }: { children: ReactNode }) => {
  const [timeline, setTimeline] = useState(() => gsap.timeline({ paused: true }));
  const [displayChildren, setDisplayChildren] = useState(children);

  // delay the routing change until after any animations have completed
  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear();
          setDisplayChildren(children);
        });
      }
    }
  }, [children]);

  return (
    <GsapTransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}
    >
      {children}
    </GsapTransitionContext.Provider>
  );
};
