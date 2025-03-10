// Typ pro jednotlivou odpověď účastníka
type RecordEntry = {
  name: string;
  answer: 'yes' | 'no' | 'if-needed';
};

// Typ pro datum s odpověďmi
type EventDate = {
  timestamp: number;
  records: RecordEntry[];
};

// Typ pro jednotlivou událost
type EventItem = {
  id: number;
  location: string;
  title: string;
  dates: EventDate[];
};

// Typ pro hlavní objekt
type EventsData = {
  items: EventItem[];
};

export const dataUdalosti: EventsData = {
  items: [
    {
      id: 1,
      location: 'Praha',
      title: 'Super akce',
      dates: [
        {
          timestamp: 1726514405258,
          records: [
            { name: 'Honza', answer: 'yes' },
            { name: 'Jana', answer: 'no' },
          ],
        },
        {
          timestamp: 1726600861177,
          records: [{ name: 'Jana', answer: 'no' }],
        },
      ],
    },
    {
      id: 2,
      location: 'Brno',
      title: 'Super akce 2',
      dates: [
        {
          timestamp: 1726514405258,
          records: [
            { name: 'Honza', answer: 'no' },
            { name: 'Jana', answer: 'no' },
            { name: 'Petr', answer: 'no' },
          ],
        },
        {
          timestamp: 1726600861177,
          records: [{ name: 'Jana', answer: 'no' }],
        },
      ],
    },
    {
      id: 3,
      location: 'Mělník',
      title: 'Super akce 3',
      dates: [
        {
          timestamp: 1726514405556,
          records: [
            { name: 'Honza', answer: 'no' },
            { name: 'Jana', answer: 'no' },
            { name: 'Petr', answer: 'no' },
          ],
        },
        {
          timestamp: 1726600861177,
          records: [{ name: 'Jana', answer: 'no' }],
        },
      ],
    },
  ],
};
