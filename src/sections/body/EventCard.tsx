import { useState } from 'react';
import EventModal from './EventModal';

export default function EventCard({ eventObject }: { eventObject: Record<string, string> }) {
  const [clicked, setClicked] = useState(false);
  const { Name, Location } = eventObject;
  function handleClick() {
    setClicked((currentState) => !currentState);
  }
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className=" grid items-center h-full w-full  bg-semiWhite text-black text-base"
      >
        <h2 className="w-fit h-fit m-auto font-bold text-xl text-center">{Name.split(':')[0]}</h2>
        <div>
          <p className="w-fit h-fit m-auto">{Location.split(',')[0]}</p>
          <p className="w-fit h-fit m-auto text-sm font-semibold">3pm</p>
        </div>
      </button>
      {clicked ? <EventModal close={handleClick} event={eventObject} /> : null}
    </>
  );
}
