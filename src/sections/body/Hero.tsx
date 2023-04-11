import FullLogoWhiteColour from '../../assets/FullLogoWhiteColour';
import GroupLogoWhite from '../../assets/GroupLogoWhite';
import DownArrowSvg from '../../icons/DownArrowSvg';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';

export default function Hero() {
  const { elementRef, onScreen } = useIntersectionObserver();
  return (
    <section id="hero-section" ref={elementRef} className="w-full min-h-screen items-center p-4">
      <div className="h-fit grid gap-20">
        <FullLogoWhiteColour />
        <div className=" ml-auto w-3/5">
          <GroupLogoWhite />
        </div>
        <a className="h-12 w-12 sm:h-20 sm:w-20 m-auto text-pink" href="#about-section">
          <DownArrowSvg />
        </a>
      </div>
    </section>
  );
}
