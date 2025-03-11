import React, { useEffect } from "react";
import { Link } from "react-router";
// import { PollingEvent } from "../../types";
import { Navigation } from "../../components/Navigation/Navigation";
import "./styles.css";
import { useFetchEvents } from "./useFetchEvents";

export const Events: React.FC = () => {
  const { fetchEvents, isLoading, error, data } = useFetchEvents();
  useEffect(() => {
    fetchEvents();
  }, []);
  console.log(error);
  return (
    <div className="events-container">
      <Navigation />
      <h1>Nastávající akce:</h1>
      {error ? error : ""}
      {isLoading ? "Loading..." : ""}
      <ul className="event-list">
        {data && data.map((item) => (
          <li key={item.id}>
            <Link to={`/events/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
