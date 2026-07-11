export const home = {
  hero: {
    eyebrow: "San Juan · Siquijor",
    title: "Welcome to San Juan Baptist Church",
    subheading:
      "A church family in Maite, Siquijor, gathering each Lord's Day to hear God's Word, worship Christ, and care for one another.",
    cardLabel: "Visit us",
    cardTitle: "Maite, San Juan",
    cardNote: "Kids and guests are welcome. Full gathering times are listed just below.",
    cardLinkText: "Plan your visit →",
  },
  newHere: {
    heading: "New here?",
    intro: "A few things guests usually want to know before their first Sunday.",
    cards: [
      {
        title: "Kids & families",
        body: "Sunday School for children, youth, and adults, plus a warm welcome for the whole family in the morning service.",
        href: "/visit",
        linkText: "What to expect →",
      },
      {
        title: "Language",
        body: "Most of our gathering is in Cebuano, with English woven throughout so visitors can follow along.",
        href: "/faq",
        linkText: "More guest questions →",
      },
      {
        title: "Find us",
        body: "We meet in Maite, San Juan, beside the old municipal cemetery. Map and contact details are on the visit page.",
        href: "/visit",
        linkText: "Directions & contact →",
      },
    ],
  },
  lifeTeaser: {
    heading: "Life together",
    intro:
      "We gather around the Word, pray for one another, and seek the good of our island, week by week, not only on special Sundays.",
  },
  beliefsTeaser: {
    heading: "Rooted in Scripture",
    body: "The Bible is our final authority. We also hold the 1689 Confession as a clear summary of the faith, and we love to make the gospel plain.",
  },
  shepherd: {
    label: "Our shepherds",
    heading: "Pastor Ramir & Ellen",
    body: "Since 1993 they have shepherded SJBC through preaching, pastoral care, and long faithfulness on Siquijor, serving together.",
  },
} as const;
