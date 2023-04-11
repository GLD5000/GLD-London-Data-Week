import { useEffect } from 'react';
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
    <section
      id="about-section"
      ref={elementRef}
      className="relative min-h-screen scroll-m-32 sm:scroll-m-16 px-20 snap-start"
    >
      <div className=" bg-lightblue text-black w-fit py-12 px-20 mt-20 mr-auto font-bold">
        <p className=" text-6xl mb-4 mx-auto w-fit ">July 3-9</p>
        <p className=" text-2xl mr-auto w-fit">Join us for a free, city-wide</p>
        <p className=" text-2xl mr-auto w-fit">festival of data for everyone</p>
      </div>
      <div className="text-6xl">
        <p className="w-fit mx-auto mt-10">
          <span className=" text-lightblue font-bold">Data</span> in the{' '}
          <span className=" text-lightblue font-bold">public</span>,
        </p>
        <p className="w-fit mx-auto">
          for the <span className=" text-lightblue font-bold">public</span>.
        </p>
      </div>
      <p className="w-fit mx-auto text-2xl mt-10">#LDW2023</p>

      <div className=" -left-[3%] top-[27%] h-4 w-4 absolute bg-yellow hover:scale-150 hover:transition -z-5 " />
      <div className=" left-[85%] top-[25%] h-5 w-5 absolute bg-lightblue hover:scale-150 hover:transition -z-5 " />
      <div className=" left-[5%] top-[65%] h-6 w-6 absolute bg-pink hover:scale-150 hover:transition -z-5 " />
      <div className=" left-[15%] top-[64%] h-5 w-5 absolute bg-lightblue hover:scale-150 hover:transition -z-5 " />
      <div className=" left-[75%] top-[62%] h-4 w-4 absolute bg-pink hover:scale-150 hover:transition -z-5 " />
    </section>
  );
}
