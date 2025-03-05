import { PollingEvent } from "./types";

export const data: PollingEvent[] = [
  {
    title: "Tým building",
    id: "1",
    location: "Praha",
    dates: [
      {
        timestamp: 1726514405258,
        records: [
          { name: "Honza", answer: "ano" },
          { name: "Jana", answer: "ne" },
        ],
      },
      {
        timestamp: 1726600861177,
        records: [{ name: "Jana", answer: "ne" }],
      },
    ],
  },
  {
    title: "Výjezd X",
    id: "2",
    location: "Mělník",
    dates: [
      {
        timestamp: 1726514405258,
        records: [
          { name: "Honza", answer: "ne" },
          { name: "Jana", answer: "ano" },
        ],
      },
      {
        timestamp: 1726600861177,
        records: [{ name: "Jana", answer: "ano" }],
      },
    ],
  },
  {
    title: "Akce XYZ",
    id: "3",
    location: "Brno",
    dates: [
      {
        timestamp: 1726514405258,
        records: [
          { name: "Honza", answer: "ano" },
          { name: "Jana", answer: "ano" },
        ],
      },
      {
        timestamp: 1726600861177,
        records: [{ name: "Petr", answer: "ano" }],
      },
    ],
  },
];

export const getDataById = (id: string) => {
  return data.find((item) => item.id === id);
};
