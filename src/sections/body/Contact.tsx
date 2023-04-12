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
      className="flex flex-col gap-10 min-h-screen scroll-m-32 sm:scroll-m-16 snap-none"
    >
      <h2 className="text-4xl font-bold w-fit mx-auto">Get in Touch</h2>
      <div className=" dark:bg-lightgreen bg-darkgreen flex text-black w-full p-4 h-32  mr-auto font-bold">
        <p className=" text-2xl m-auto w-fit">To propose an event, submit your idea by 15 May 2023</p>
      </div>
      <div className=" dark:bg-pink bg-darkpink flex text-black w-full p-4 h-32  mr-auto font-bold">
        <p className=" text-2xl m-auto w-fit">
          For any other questions, email us at londondataweek@gmail.com or fill out the form below!
        </p>
      </div>

      <form className="flex flex-col text-txt-main dark:text-txt-main-dk ">
        <input
          id="name-input"
          aria-label="name"
          className=" h-16 w-full border-transparent border-2 border-b-border p-2 bg-transparent text-xl placeholder:text-txt-mid dark:placeholder:text-txt-mid-dk"
          type="text"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          id="email-input"
          aria-label="email"
          className=" h-16 w-full border-transparent border-2 border-b-border p-2 bg-transparent text-xl placeholder:text-txt-mid dark:placeholder:text-txt-mid-dk"
          type="text"
          placeholder="Email"
          autoComplete="off"
        />
        <textarea
          id="message-input"
          aria-label="message"
          className=" w-full border-transparent border-2 border-b-border p-2 bg-transparent text-xl placeholder:text-txt-mid dark:placeholder:text-txt-mid-dk resize-y"
          placeholder="Message"
          rows={7}
          wrap="hard"
        />
        <button
          className="mt-8 border-border border-2 rounded-lg w-fit h-fit text-xl mx-auto px-4 py-2 font-bold"
          type="button"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
