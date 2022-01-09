import { useContext } from 'react';
import { GsapTransitionContext } from '../context/GsapTransitionContext';

// TODO: nie potrzebne, wywal najprawdopodobniej
export const useGsapTransition = () => {
  const ctx = useContext(GsapTransitionContext);

  if (ctx === undefined) {
    throw new Error('useGsapTransition must be used within an GsapTransitionContextController');
  }
  return ctx;
};
