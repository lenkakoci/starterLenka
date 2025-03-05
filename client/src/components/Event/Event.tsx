import React from "react";
import "./styles.css";
import { EventTable } from "../EventTable/EventTable";
import { PollingEvent } from "../../types";

export const Event: React.FC<PollingEvent> = ({ location, title, id, dates }) => {
  return (
    <div className="event-container">
      <h1 className="event-title">{title}</h1>
      <p style={{ fontStyle: "italic", fontSize: "15px", color: "gray" }}>ID akce: {id}</p>
      {location ? <h2 className="event-location">Místo: {location}</h2> : null}
      <EventTable dates={dates} />
    </div>
  );
};

export default Event;
