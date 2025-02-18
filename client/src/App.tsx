import React from "react";
import { Demo } from "./pages/Demo/Demo";
import { Event } from "./components/Event/Event";

const testData = {
  id: "event-1",
  title: "Výstup na Matterhorn",
  location: "Matterhorn",
  dates: [ // toto je pole objektů, každý objekt má vlastnosti timestamp (number) a records (pole objektů UserRecord)
    {
      timestamp: new Date("2025-7-27").getTime(),
      records: [ // toto je pole objektů UserRecord, každý objekt má vlastnosti name a answer
        { name: "Pavel", answer: "yes" as const }, // as const zařídí, že se nejedná o string ale jednu z předdefinovaných hodnot
        { name: "Lukáš", answer: "no" as const },
      ],
    },
    {
      timestamp: new Date("2025-7-28").getTime(),
      records: [ // toto je pole objektů UserRecord, každý objekt má vlastnosti name a answer
        { name: "Hana", answer: "no" as const },
        { name: "Daniela", answer: "yes" as const },
      ],
    },
    {
      timestamp: new Date("2025-07-29").getTime(),
      records: [
        { name: "Pavel", answer: "if-needed" as const },
        { name: "Hana", answer: "yes" as const },
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
