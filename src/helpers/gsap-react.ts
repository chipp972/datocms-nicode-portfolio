import React from 'react';

type Params = {
  animationFn: () => gsap.core.Timeline;
  dependencyList: React.DependencyList;
};

export const useGsapAnimation = ({ animationFn, dependencyList = [] }: Params) => {
  const animationRef = React.useRef<gsap.core.Timeline>(null);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      if (animationRef.current?.isActive()) {
        animationRef.current.kill();
      }
      animationRef.current = animationFn();
    }
  }, dependencyList);
};
