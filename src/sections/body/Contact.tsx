import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';

export default function Contact() {
  const { elementRef, onScreen } = useIntersectionObserver();

  useEffect

  return (
    <section id="contact-section" ref={elementRef} className="min-h-screen scroll-m-16">
      {`${onScreen}`}
    </section>
  );
}
