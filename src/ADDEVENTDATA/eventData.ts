const dataTsv = `Name	Organiser	Date	Time	EventType	MoreInfo	Location
  London Data Today & Tomorrow	GLA	7/3/2023	10:00 - 16:00	Public Conversations	https://www.eventbrite.com/e/london-data-week-2023-tickets-618137193987	City Hall
  Statisticians for Society: Using stats to supercharge charities	RSS	7/4/2023	10:00 - 16:00	Data Education	https://rss.org.uk/membership/volunteering-and-promoting/statisticians-for-society-initiative/	RSS offices, Errol Street, EC1Y 8LX
  GeoMob	GeoMob	7/5/2023	18:00	Public Conversations	https://thegeomob.com/post/july-5th-2023-geomoblon-details	Geovation Hub
  Cabaret of Dangerous Ideas	Turing,CoDI	7/6/2023	20:00 - 21:30	Exhibits & Experiences	https://www.eventsforce.net/turingevents/263/home	TBD
  Citi Map Data Collection Campaign	Citi Map	7/7/2023	All Day	Citizen Science	https://citimap.org/	TBD
  Citi Map Data Collection Campaign	Citi Map	7/8/2023	All Day	Citizen Science	https://citimap.org/	TBD
  All the Docks	All the Docks	7/9/2023	All Day	Citizen Science	https://allthedocks.com/	All over London`;

export default function getData() {
  return dataTsv.trim();
}
