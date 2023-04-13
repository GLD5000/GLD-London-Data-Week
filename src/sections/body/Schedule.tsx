import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import RightArrowSvg from '../../icons/RightArrowSvg';
import LeftArrowSvg from '../../icons/LeftArrowSvg';
import eventData from '../../eventData';
import DayCard from './DayCard';

const dataArray = eventData();

const DayCards = dataArray.map((event, index) => (
  <DayCard key={`${event.Date}-${event.Name}`} colourIndex={index} eventsArray={[event]} />
));

export default function Schedule() {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection } = useIntersectionProviderContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  function scrollLeft() {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft -= 500;
    }
  }
  function scrollRight() {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft += 500;
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
    <section id="schedule-section" ref={elementRef} className="min-h-[90vh] scroll-m-32 mt-20 snap-start">
      <h2 className="text-4xl font-bold w-fit mx-auto">LDW 2023 Schedule</h2>
      <div className="flex flex-row  py-4 border mt-20 border-current bg-palegrey dark:bg-darkblue text-darkblue dark:text-white">
        <button
          aria-label="scroll-left"
          id="scroll-left"
          type="button"
          className="p-2"
          onClick={() => {
            scrollLeft();
          }}
        >
          <LeftArrowSvg />
        </button>
        <div
          ref={scrollRef}
          className="flex flex-row snap-x snap-always snap-mandatory scroll-smooth snap-start overflow-x-scroll w-full  bg-darkblue  gap-4 p-2 dark:scrollbar-thumb-palegrey scrollbar-thumb-darkblue scrollbar-track-palegrey dark:scrollbar-track-transparent scrollbar-thin"
        >
          {DayCards}
          <div className="w-full h-full shrink-0 snap-none" />
        </div>
        <button
          aria-label="scroll-right"
          id="scroll-right"
          type="button"
          className="p-2"
          onClick={() => {
            scrollRight();
          }}
        >
          <RightArrowSvg />
        </button>
      </div>
    </section>
  );
}
