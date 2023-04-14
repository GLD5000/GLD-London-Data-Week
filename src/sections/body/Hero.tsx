import { useEffect } from 'react';
import FullLogoWhiteColour from '../../assets/FullLogoWhiteColour';
import GroupLogoWhite from '../../assets/GroupLogoWhite';
import DownArrowSvg from '../../icons/DownArrowSvg';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';

export default function Hero() {
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
    <section id="hero-section" ref={elementRef} className="w-full min-h-screen items-center sm:px-16 snap-start ">
      <div className="flex h-full flex-col justify-between">
        <div className="h-fit grid gap-20 mt-32">
          <FullLogoWhiteColour />
          <div className=" ml-auto md:w-3/5">
            <GroupLogoWhite />
          </div>
        </div>
        <a
          className="h-12 w-12 mx-auto mt-auto mb-8 text-pink hover:transition hover:text-lightgreen focus-within:transition focus-within:text-lightgreen"
          href="#about-section"
          aria-label="scroll down"
          id="scroll-down"
        >
          <DownArrowSvg />
        </a>
      </div>
    </section>
  );
}
