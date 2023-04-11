import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';

export default function Hero() {
  const { elementRef, onScreen } = useIntersectionObserver();

  useEffect(() => {
    let run = true;

    if (run && onScreen) {
      console.log('onScreen:', onScreen);
    }

    return () => {
      run = false;
    };
  }, [onScreen]);

  return (
    <section id="about-section" ref={elementRef} className="min-h-screen scroll-m-16">
      About
    </section>
  );
}
