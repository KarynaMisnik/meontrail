export type Activity = {
  id: number;
  title: string;
  location: string;
  timestamp: string;
};

export const posts: Activity[] = [
  {
    id: 1,
    title: "Morning hike",
    location: "Nuuksio National Park",
    timestamp: "2026-06-22T08:30:00",
  },
  {
    id: 2,
    title: "Trail run",
    location: "Koli National Park",
    timestamp: "2026-06-22T10:15:00",
  },
  {
    id: 3,
    title: "Bird watching",
    location: "Linnansaari National Park",
    timestamp: "2026-06-22T12:45:00",
  },
  {
    id: 4,
    title: "Camping trip",
    location: "Repovesi National Park",
    timestamp: "2026-06-21T18:20:00",
  },
  {
    id: 5,
    title: "Evening walk",
    location: "Oulanka National Park",
    timestamp: "2026-06-21T20:10:00",
  },
];
