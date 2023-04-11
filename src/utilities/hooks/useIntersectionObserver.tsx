import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(
  options?: Partial<{ root: null | Element; rootMargin: string; threshold: number | number[] }>,
) {
  const elementRef = useRef(null);
  const [onScreen, setOnScreen] = useState(false);

  function callback(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    setOnScreen(entry.isIntersecting);
  }

  useEffect(() => {
    const { current } = elementRef;
    const observer = new IntersectionObserver(callback, options);
    if (current !== null) observer.observe(current);

    return () => {
      if (current !== null) observer.unobserve(current);
    };
  }, [elementRef, onScreen, options]);

  return { elementRef, onScreen };
}

useIntersectionObserver.defaultProps = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};
