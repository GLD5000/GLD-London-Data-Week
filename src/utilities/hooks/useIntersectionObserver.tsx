import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(
  options?
:  Partial<{ root: null | Element; rootMargin: string; threshold: number | number[] }>
) {
  const elementRef = useRef(null);
  const [onScreen, setOnScreen] = useState(false);

  function callback(entries: Array<IntersectionObserverEntry>) {
    const [entry] = entries;
    setOnScreen(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef, onScreen]);

  return {elementRef, onScreen};
}

useIntersectionObserver.defaultProps = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};
