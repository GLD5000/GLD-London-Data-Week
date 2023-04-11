import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import EventCard from './EventCard';
import RightArrowSvg from '../../icons/RightArrowSvg';
import LeftArrowSvg from '../../icons/LeftArrowSvg';

export default function Schedule() {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection } = useIntersectionProviderContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  function scrollLeft() {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft -= 720;
    }
  }
  function scrollRight() {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft += 720;
    }
  }

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
    <section id="schedule-section" ref={elementRef} className="min-h-screen scroll-m-32 sm:scroll-m-16 mt-20">
      <h2 className="text-4xl font-bold w-fit mx-auto">LDW 2023 Schedule</h2>
      <div className="flex flex-row  py-10 border-4 mt-20">
        <button
          type="button"
          className="p-2"
          onClick={() => {
            scrollLeft();
          }}
        >
          <LeftArrowSvg />
          Left
        </button>
        <div
          ref={scrollRef}
          className="flex flex-row snap-x snap-always scroll-smooth snap-start overflow-x-scroll w-full  gap-4 p-4"
        >
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <button
          type="button"
          className="p-2"
          onClick={() => {
            scrollRight();
          }}
        >
          <RightArrowSvg />
          Right
        </button>
      </div>
    </section>
  );
}
