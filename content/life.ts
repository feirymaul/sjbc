export const life = {
  title: "Life at SJBC",
  intro:
    "We gather around Scripture, prayer, hospitality, and service. Here is what a typical week looks like for our church family.",
  schedule: [
    {
      range: "9:30am Sunday",
      title: "Sunday School",
      description:
        "Children's class, Youth class, and Adult class. Catechism, Scripture, discussion, and prayer.",
    },
    {
      range: "10:50am Sunday",
      title: "Morning Service",
      description:
        "Psalms and hymns, prayer, and expositional preaching from the Bible.",
    },
    {
      range: "1:30pm · Last Sunday",
      title: "Afternoon Service",
      description:
        "Every last Sunday of the month. An extra gathering for worship and fellowship.",
    },
    {
      range: "7:00pm Wednesday",
      title: "Cottage Prayer Meeting",
      description:
        "We gather midweek for Scripture, intercession, and prayer for our members, missionaries, and San Juan.",
    },
  ],
  mercy: {
    title: "Serve San Juan",
    body: "Beyond our weekly gatherings, we also seek to serve neighbors through mercy and mission: meal distribution, hospital visitation, and evangelism, as the Lord opens doors.",
  },
} as const;
