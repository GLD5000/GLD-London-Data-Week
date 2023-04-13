function lookupMonthName(number: number) {
  const lookupArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return lookupArray[number + 1];
}

export default function EventModal({ close, event }: { close: () => void; event: Record<string, string> }) {
  const { Day, Date, Name, Location, DeliveryPartner, TypeofEvent } = event;
  const [monthNumber, dayOfMonth, year] = Date.split('/');
  const monthName = lookupMonthName(Number(monthNumber));
  return (
    <div
      //   onClick={close}
      //   onKeyDown={close}
      id="modal-background"
      className="fixed top-0 left-0 m-auto bg-semiBlue h-screen w-screen z-[999] flex"
    >
      <div
        className="autoFocus={true} relative sm:w-fit w-screen h-screen sm:h-fit bg-white text-darkblue m-auto p-12"
        // onClick={(e) => {
        //   e.stopPropagation();
        //   console.log('modal');
        // }}
      >
        <button id="close-btn" type="button" onClick={close} className="w-12 h-12 bg-palegrey absolute top-0 right-0">
          close
        </button>
        <div>
          <div className="my-4 bg-lightgreen py-2 px-4">
            <p className="w-fit mx-auto text-3xl font-bold">{Name.split(':')[0]}</p>
            {Name.split(':')[1] !== undefined ? (
              <p className="w-fit mx-auto mt-2 font-bold text-xl">{Name.split(':')[1]}</p>
            ) : null}
          </div>

          <p className="w-fit mx-auto my-2 text-xl">
            <span className="font-bold">Organiser: </span>
            {DeliveryPartner}
          </p>
          <p className="w-fit mx-auto my-2 text-xl">
            <span className="font-bold">Location: </span>
            {Location}
          </p>
          <p className="w-fit mx-auto my-2 text-xl">
            <span className="font-bold">Date: </span>
            {`${Day} ${dayOfMonth} ${monthName} ${year}`}
          </p>
          <p className="w-fit mx-auto my-2 text-xl">
            <span className="font-bold">Time: </span>3pm
          </p>
          <p className="w-fit mx-auto mt-8 mb-2 text-xl">
            <span className="font-bold">Registration: </span>www.google.com
          </p>
          <p className="w-fit mx-auto my-2 text-xl">
            <span className="font-bold">More Info: </span>
            {TypeofEvent}
          </p>
        </div>
      </div>
    </div>
  );
}
