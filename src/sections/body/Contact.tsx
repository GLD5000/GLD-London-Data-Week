import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';

export default function Contact() {
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
      id="contact-section"
      ref={elementRef}
      className="flex flex-col gap-10 min-h-[80vh] scroll-m-32 snap-none lg:px-20 w-body-sm min-w-body max-w-body sm:w-body mx-auto"
    >
      <h2 className="text-4xl font-bold w-fit mx-auto">Get in Touch</h2>
      <div className=" dark:bg-lightgreen bg-darkgreen flex text-black w-full p-4 min-h-[8rem] overflow-x-auto mr-auto font-bold">
        <p className=" text-xl sm:text-2xl m-auto w-fit">To propose an event, submit your idea by 15 May 2023</p>
      </div>
      <div className=" dark:bg-pink bg-darkpink flex text-black w-full p-4 min-h-[8rem] overflow-x-auto  mr-auto font-bold">
        <p className=" text-xl sm:text-2xl m-auto w-fit">
          For any other questions, email us at londondataweek@gmail.com or fill out the form below!
        </p>
      </div>

      <form className="flex flex-col  bg-palegrey dark:bg-white rounded-3xl text-darkblue p-4 gap-2 ">
        <input
          id="name-input"
          aria-label="name"
          className=" h-16 w-full border-transparent border border-b-border p-2 bg-transparent text-base sm:text-xl placeholder:text-txt-mid dark:placeholder:text-txt-mid"
          type="text"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          id="email-input"
          aria-label="email"
          className=" h-16 w-full border-transparent border border-b-border p-2 bg-transparent text-base sm:text-xl placeholder:text-txt-mid dark:placeholder:text-txt-mid"
          type="text"
          placeholder="Email"
          autoComplete="off"
        />
        <textarea
          id="message-input"
          aria-label="message"
          className=" w-full border-transparent border border-b-border p-2 bg-transparent text-base sm:text-xl placeholder:text-txt-mid dark:placeholder:text-txt-mid resize-y"
          placeholder="Message"
          rows={4}
          wrap="hard"
        />
        <button
          className="mt-8 border-border border rounded-lg w-fit h-fit text-base sm:text-xl mx-auto px-4 py-2 font-bold text-white bg-darkblue hover:transition hover:text-darkblue hover:bg-white focus:transition focus:text-darkblue focus:bg-white"
          type="button"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
