export default function EventCard() {
  return (
    <div className="flex flex-col w-64 h-[30rem] shrink-0 gap-4 bg-pink p-4 snap-start scroll-m-4">
      <div className="grid h-fit w-full bg-semiWhite text-black text-xl item font-bold p-4">
        <h2 className="w-fit h-fit m-auto text-4xl">3</h2> <p className="w-fit h-fit m-auto text-3xl">Monday</p>
      </div>
      <div className="grid grid-rows-2 grow shrink-0 overflow-y-auto gap-4">
        <div className=" grid items-center h-full w-full  bg-semiWhite text-black text-base">
          <h2 className="w-fit h-fit m-auto font-bold text-xl text-center">London Today & Tomorrow</h2>
          <div>
            <p className="w-fit h-fit m-auto">GLA City Hall</p>
            <p className="w-fit h-fit m-auto text-sm">10am - 3pm</p>
          </div>
        </div>
        <div className=" grid items-center h-full w-full  bg-semiWhite text-black text-base">
          <h2 className="w-fit h-fit m-auto font-bold  text-xl text-center">London Today & Tomorrow</h2>
          <div>
            <p className="w-fit h-fit m-auto">GLA City Hall</p>
            <p className="w-fit h-fit m-auto text-sm">10am - 3pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
