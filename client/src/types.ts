export type UserRecord = {
  name: string;
  answer: "ano" | "ne" | "možná";
};
export type DateRecord = {
  timestamp: number;
  records: UserRecord[];
};
export type PollingEvent = {
  location?: string;
  title: string;
  id: string;
  dates: DateRecord[];
};
export type EventsListProps = {
  data: PollingEvent[];
};
