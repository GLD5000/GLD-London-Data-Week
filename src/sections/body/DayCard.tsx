import EventCard from './EventCard';

function getColour(indexValue: number) {
  const colourKeys = ['pink', 'green', 'yellow'];
  const returnIndex = indexValue % colourKeys.length;
  return colourKeys[returnIndex];
}

export default function DayCard({
  eventsArray,
  colourIndex,
}: {
  eventsArray: Array<Record<string, string>>;
  colourIndex: number;
}) {
  const { Day, Date } = eventsArray[0];
  const [, dayOfMonth] = Date.split('/');
  const colour = getColour(colourIndex);
  const eventCards = eventsArray.map((event, index) => {
    const key = `${index}`;
    return <EventCard key={key} eventObject={event} />;
  });
  return (
    <div
      className={`flex flex-col md:flex-row mx-auto w-full rounded shrink-0 gap-2 ${
        colour === 'yellow' ? 'bg-yellow' : ''
      }${colour === 'pink' ? 'bg-pink' : ''}${colour === 'green' ? 'bg-lightgreen' : ''} p-1`}
    >
      <div className="grid h-fit m-auto w-60 text-black text-xl font-bold">
        <h2 className="w-fit h-fit m-auto text-4xl">{dayOfMonth}</h2>{' '}
        <p className="w-fit h-fit m-auto text-3xl">{Day}</p>
      </div>

      <div className="grid gap-1 grow">{eventCards}</div>
    </div>
  );
}
