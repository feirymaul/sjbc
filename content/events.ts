export type UpcomingEvent = {
  date: string;
  title: string;
  detail: string;
  /** ISO date for filtering past featured events; omit to always show */
  isoDate?: string;
};

export type PastEvent = {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
};

/** Only surface items that are current or future when isoDate is set. */
export const upcomingEvents: UpcomingEvent[] = [
  // Add real upcoming events with isoDate: "YYYY-MM-DD"
];

export const pastEvents: PastEvent[] = [
  {
    date: "Dec 21, 2025",
    title: "Christmas Party 2025",
    description: "Celebrating Christ's incarnation with our church family.",
    imageSrc: "/christmas_party_2025.jpg",
  },
  {
    date: "Sep 23, 2025",
    title: "Women's Fellowship",
    description:
      "A gathering to encourage, strengthen, and equip women to grow in Christ and in fellowship with one another.",
    imageSrc: "/womens-fellowship-2025.jpg",
  },
  {
    date: "May 24, 2025",
    title: "Summer Youth Camp",
    description:
      "Three days of worship, study, games, and friendship as we draw near to God through His Word.",
    imageSrc: "/summer-youth-camp-2025.jpg",
  },
  {
    date: "Apr 27, 2025",
    title: "21st Church Anniversary",
    description: "With guest speaker Ptr. Joebel Casiple from Talibon Baptist Church.",
    imageSrc: "/21st-church-anniversary-v3.jpg",
  },
  {
    date: "Feb 17, 2025",
    title: "Medical & Dental Mission",
    description:
      "Grace Bible Church International's mission of free medical and dental care, hosted at SJBC.",
    imageSrc: "/medical-mission-2025-v2.jpg",
  },
  {
    date: "Dec 29, 2024",
    title: "Couple's Night",
    description:
      "An evening of fellowship, encouragement, and prayer for marriages across our church family.",
    imageSrc: "/couples-night-2024.jpg",
  },
];

export function getActiveUpcomingEvents(now = new Date()): UpcomingEvent[] {
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return upcomingEvents.filter((event) => {
    if (!event.isoDate) return true;
    const eventDay = new Date(event.isoDate + "T00:00:00");
    return eventDay >= startOfToday;
  });
}
