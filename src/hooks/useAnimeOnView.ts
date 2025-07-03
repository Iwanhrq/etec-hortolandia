import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';

export function useAnimeOnView<T extends HTMLElement>(options: {
  animation: any;
  once?: boolean;
}) {
  const ref = useRef<T | null>(null);
  const scope = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    let hasAnimated = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasAnimated || !options.once)) {
          scope.current = createScope({ root: ref }).add(() => {
            animate(el, options.animation);
          });
          hasAnimated = true;
          if (options.once) observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (scope.current) scope.current.revert();
    };
  }, [options.animation, options.once]);

  return ref;
} 