function objectifyTsv(tableData: string) {
  const [headerString, ...objectValueStrings] = tableData.split(/[\r\n]+/);
  const objectKeys = headerString.replaceAll(/[ ]/g, '').split('\t');
  const objectArray: Array<Record<string, string>> = [];
  objectValueStrings.forEach((objectValueString) => {
    const newObject: Record<string, string> = {};
    const valueArray = objectValueString.split('\t');
    valueArray.forEach((value, index) => {
      newObject[`${objectKeys[index]}`] = value.trim();
    });
    const newDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(newObject.Date));
    newObject.Day = newDay;
    objectArray.push(newObject);
  });
  return objectArray;
}

export default function eventData() {
  const dataTsv = `Name	Delivery Partner	Type of Event	Date	Location
    London Data Today & Tomorrow	GLA	Public Conversations	7/3/2023	City Hall
    Cabaret of Dangerous Ideas	Turing,CoDI	Exhibits & Experiences	7/6/2023	Camden Club
    Statisticians for Society: Using stats to supercharge charities	RSS,Turing	Data Education	7/4/2023	RSS offices, Errol Street, EC1Y 8LX
    GeoMob	GeoMob	Citizen Science	7/5/2023	Geovation Hub`;
  const dataObject = objectifyTsv(dataTsv);
  return dataObject;
}
