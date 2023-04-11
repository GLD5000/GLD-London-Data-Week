import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';

export default function Hero() {
  const { elementRef, onScreen } = useIntersectionObserver();
  return (
    <section id="about-section" ref={elementRef} className="min-h-screen scroll-m-16">
      {`${onScreen}`}
    </section>
  );
}
