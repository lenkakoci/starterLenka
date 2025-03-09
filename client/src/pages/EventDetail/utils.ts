import { PollingEvent } from "../../types";

export const getEvent = async (id: string): Promise<PollingEvent> => {
  const response = await fetch(`http://localhost:4000/api/events/${id}`);
  if (!response.ok) {
    throw new Error("Could not fetch event");
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};
