import React from "react";
import { Demo } from "./pages/Demo/Demo";
import { Event, EventProps } from "./components/Event/Event";

const testData: EventProps = {
  id: "event-1",
  title: "Výstup na Matterhorn",
  location: "Matterhorn",
  dates: [ // toto je pole objektů, každý objekt má vlastnosti timestamp (number) a records (pole objektů UserRecord)
    {
      timestamp: new Date("2025-7-27").getTime(),
      records: [ // toto je pole objektů UserRecord, každý objekt má vlastnosti name a answer
        { name: "Pavlína", answer: "yes" }, // as const zařídí, že se nejedná o string ale jednu z předdefinovaných hodnot
        { name: "Lukáš", answer: "no" },
      ],
    },
    {
      timestamp: new Date("2025-7-28").getTime(),
      records: [ // toto je pole objektů UserRecord, každý objekt má vlastnosti name a answer
        { name: "Hana", answer: "no" },
        { name: "Daniela", answer: "yes" },
      ],
    },
    {
      timestamp: new Date("2025-07-29").getTime(),
      records: [
        { name: "Pavel", answer: "if-needed" },
        { name: "Hana", answer: "yes" },
      ],
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <Demo name="Lenka Kocianova" />
      <Event id={testData.id} title={testData.title} location={testData.location} dates={testData.dates} />
    </div>
  )
  ;
};

export default App;
