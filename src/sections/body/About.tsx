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
      {/* <div className=" -left-[3%] top-[7%] md:top-[27%] h-4 w-4 absolute bg-yellow hover:scale-150 hover:transition " />
      <div className=" left-[85%] top-[3%] md:top-[25%] h-5 w-5 absolute dark:bg-lightgreen bg-darkgreen hover:scale-150 hover:transition" />
      <div className=" left-[5%] top-[86%] md:top-[65%] h-6 w-6 absolute bg-pink hover:scale-150 hover:transition" />
      <div className=" left-[15%] top-[92%] md:top-[64%] h-5 w-5 absolute dark:bg-lightgreen bg-darkgreen hover:scale-150 hover:transition" />
      <div className=" left-[75%] top-[90%] md:top-[62%] h-4 w-4 absolute bg-pink hover:scale-150 hover:transition" /> */}

      <div className=" dark:bg-lightgreen bg-darkgreen text-darkblue w-fit py-12 px-4 sm:px-20 mt-20 mx-auto sm:mr-auto font-bold z-0">
        <p className=" text-6xl mb-4 mx-auto w-fit ">July 3-9</p>
        <p className=" text-2xl mr-auto w-fit text-center">Join us for a free, city-wide</p>
        <p className=" text-2xl mr-auto w-fit text-center">festival of data for everyone</p>
      </div>
      <img className="rounded-2xl w-full" role="presentation" src="./data cropped.png" alt="Data in the Public, For" />
      {/* <div className="text-6xl">
        <p className="w-fit mx-auto mt-10 text-center">
          <span className=" dark:text-lightgreen text-center text-darkgreentxt font-bold">Data</span> in the{' '}
          <span className=" dark:text-lightgreen text-center text-darkgreentxt font-bold">public</span>,
        </p>
        <p className="w-fit mx-auto text-center">
          for the <span className=" dark:text-lightgreen text-darkgreentxt font-bold">public</span>.
        </p>
      </div>
      <p className="w-fit mx-auto text-2xl mt-10">#LDW2023</p> */}
    </section>
  );
}
