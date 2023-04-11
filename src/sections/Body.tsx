import About from './body/About';
import Contact from './body/Contact';
import Hero from './body/Hero';
import Schedule from './body/Schedule';

export default function Body() {
  return (
    <main
      id="main-content"
      className="relative grid w-screen grow grid-cols-frAutoFr content-between mt-16 py-10 sm:px-10"
    >
      <div className=" col-start-2 bg-bg dark:bg-bg-dk p-2 rounded-3xl border-none border-border dark:border-border flex h-full w-body-sm min-w-body max-w-body-sm flex-col gap-10 sm:w-body 2xl:max-w-body ">
        <Hero />
        <About />
        <Schedule />
        <Contact />
      </div>
    </main>
  );
}
