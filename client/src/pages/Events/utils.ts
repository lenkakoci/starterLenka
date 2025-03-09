import { PollingEvent } from "../../types";

export const getEvents = async (): Promise<PollingEvent[]> => {
  const response = await fetch(`http://localhost:4000/api/events`);
  if (!response.ok) {
    throw new Error("Could not fetch events");
  }
  const jsonResponse = await response.json();
  return jsonResponse.items;
};
