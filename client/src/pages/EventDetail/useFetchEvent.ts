import { useAsyncActionTracker } from "../../hooks/useAsyncActionTracker";
import { PollingEvent } from "../../types";
import { getEvent } from "./utils";

export const useFetchEvent = (eventId: string) => {
  const {
    error,
    isLoading,
    data,
    execute: fetchEvents,
  } = useAsyncActionTracker<PollingEvent>({
    action: () => getEvent(eventId)
  });

  return { error, isLoading, data, fetchEvents };
};
