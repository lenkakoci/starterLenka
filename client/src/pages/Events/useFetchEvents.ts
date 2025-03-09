import { useAsyncActionTracker } from "../../hooks/useAsyncActionTracker";
import { PollingEvent } from "../../types";
// import { loadEventsGenerated, SimplePollingEvent } from "../../apiClient";
import { getEvents } from "./utils";

export const useFetchEvents = () => {
  const {
    error,
    isLoading,
    data,
    execute: fetchEvents,
  } = useAsyncActionTracker<PollingEvent[]>({
    action: () => getEvents()
    // action: () => loadEventsGenerated()
  });

  return { error, isLoading, data, fetchEvents };
};
