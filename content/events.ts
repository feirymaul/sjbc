export type UpcomingEvent = {
  date: string;
  title: string;
  detail: string;
  imageSrc?: string;
  /** Last day to show the event, in the church's local time; omit to always show */
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
  {
    date: "Oct 25, 2026",
    title: "Pastor Appreciation Month",
    detail: "Join us in showing love and appreciation for Pastor Ramir Quijada this month.",
    imageSrc: "/pastor-appreciation-month-2026.png",
    isoDate: "2026-10-25",
  },
];

export const pastEvents: PastEvent[] = [
  {
    date: "May 22, 2026",
    title: "Youth Camp 2026",
    description: "Young people gathered around the campfire for fellowship and encouragement.",
    imageSrc: "/youth-camp-2026.jpg",
  },
  {
    date: "Apr 26, 2026",
    title: "Baptism",
    description: "A day by the sea celebrating baptism with our church family.",
    imageSrc: "/baptism-2026.jpg",
  },
  {
    date: "Apr 26, 2026",
    title: "22nd Church Anniversary",
    description: "Giving thanks to God for 22 years since the church's 2004 reform.",
    imageSrc: "/22nd-church-anniversary-2026.jpg",
  },
  {
    date: "Apr 17, 2026",
    title: "Operation Christmas Child Distribution",
    description: "Children received gift boxes during our Operation Christmas Child distribution.",
    imageSrc: "/operation-christmas-child-distribution-2026.jpg",
  },
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
    description:
      "Giving thanks to God for 21 years since the church's 2004 reform. Ptr. Joebel Casiple from Talibon Baptist Church spoke.",
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
  const dateParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const getPart = (type: string) => dateParts.find((part) => part.type === type)?.value;
  const today = `${getPart("year")}-${getPart("month")}-${getPart("day")}`;

  return upcomingEvents.filter((event) => {
    if (!event.isoDate) return true;
    return event.isoDate >= today;
  });
}
