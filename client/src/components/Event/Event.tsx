import React from "react";
import "./styles.css";
import { EventTable } from "../EventTable/EventTable";

export type UserRecord = {
  name: string;
  answer: "yes" | "no" | "if-needed";
};
export type DateRecord = {
  timestamp: number;
  records: UserRecord[];
};

export type EventProps = {
  location?: string;
  id: string;
  title: string;
  dates: DateRecord[];
};

export const Event: React.FC<EventProps> = ({ location, id, title, dates }) => {
  return (
    <div className="event-container">
      <h1 className="event-title">{title}</h1>
      <p>ID akce: {id}</p>
      {location ? <h2 className="event-location">Místo: {location}</h2> : null}
      <EventTable dates={dates} />
    </div>
  );
};

export default Event;
