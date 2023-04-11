import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';

export default function Schedule() {
  const { elementRef, onScreen } = useIntersectionObserver();
  return (
    <section id="schedule-section" ref={elementRef} className="min-h-screen scroll-m-16">
      {`${onScreen}`}
    </section>
  );
}
