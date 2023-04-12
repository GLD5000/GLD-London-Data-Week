export default function EventCard({ eventObject }: { eventObject: Record<string, string> }) {
  const { Name, Location } = eventObject;
  return (
    <div className=" grid items-center h-full w-full  bg-semiWhite text-black text-base">
      <h2 className="w-fit h-fit m-auto font-bold text-xl text-center">{Name.split(':')[0]}</h2>
      <div>
        <p className="w-fit h-fit m-auto">{Location.split(',')[0]}</p>
        <p className="w-fit h-fit m-auto text-sm font-semibold">3pm</p>
      </div>
    </div>
  );
}
