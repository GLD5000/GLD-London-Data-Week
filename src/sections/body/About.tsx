import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';

export default function About() {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection } = useIntersectionProviderContext();

  useEffect(() => {
    let run = true;
    const refElement = elementRef.current;
    if (run && onScreen && refElement != null) {
      setcurrentSection(refElement.id);
    }

    return () => {
      run = false;
    };
  }, [onScreen, elementRef, setcurrentSection]);

  return (
    <section
      id="about-section"
      ref={elementRef}
      className="relative min-h-[80vh] scroll-m-32 sm:px-20 bg-transparent snap-start w-body-sm min-w-body max-w-body sm:w-body mx-auto"
    >
      <div className="text-xl w-80 mx-auto">
        <div className="flex">
          <p className="w-fit my-8">
            Data is part of our everyday lives as Londoners, from choosing the
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> best Tube route</span> to finding your
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> next pair of trainers</span>.
          </p>
        </div>

        <div className="flex">
          <p className="w-fit my-8">
            Join us at London Data Week for a citywide festival about data to
            <span className=" dark:text-yellow text-darkpink font-bold"> learn </span>,{' '}
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> create</span>,
            <span className=" dark:text-pink text-darkpink font-bold"> discuss</span>, and
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> explore</span> how to use data to shape
            our city for the better.
          </p>
        </div>

        <div className="flex">
          <p className="w-fit my-8">
            Explore our schedule to discover workshops, comedy events, cycling challenges and more! More events to be
            announced in May 2023.
          </p>
        </div>
      </div>
    </section>
  );
}
