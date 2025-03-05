import React from "react";
import { Link } from "react-router";
import { PollingEvent } from "../../types";
import { Navigation } from "../../components/Navigation/Navigation";
import "./styles.css";

export const Events: React.FC<{ data: PollingEvent[] }> = ({ data }) => {
  return (
    <div className="events-container">
      <Navigation />
      <h1>Nastávající akce:</h1>
      <ul className="event-list">
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/events/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
