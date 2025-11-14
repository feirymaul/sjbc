import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { BeliefsSection, BeliefStatement } from "./components/BeliefsSection";
import { HighlightsSection, HighlightItem } from "./components/HighlightsSection";
import { ScheduleSection, ScheduleBlock } from "./components/ScheduleSection";
import { EventsSection, EventItem } from "./components/EventsSection";
import { VisitSection } from "./components/VisitSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { PastorSection } from "./components/PastorSection";
import styles from "./home.module.css";

const navLinks = [
  { label: "Life at SJBC", href: "#life" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Schedule", href: "#schedule" },
  { label: "Visit", href: "#visit" },
];

const highlightItems: HighlightItem[] = [
  {
    title: "Catechism Classes",
    subtitle: "9:30am Sunday School",
    description:
      "Children, youth, and adults walk through the New City and Baptist catechisms with discussion and prayer.",
  },
  {
    title: "Lord's Day Worship",
    subtitle: "10:50am Sanctuary",
    description:
      "Word-centered liturgy with congregational singing, expositional preaching, and weekly pastoral prayer.",
  },
  {
    title: "Midweek Prayer",
    subtitle: "Wednesdays 3pm",
    description:
      "Rotating cottage prayer meeting focused on scripture reading, intercession, and testimony.",
  },
  {
    title: "Mercy & Mission",
    subtitle: "Serve San Juan",
    description:
      "Launching soon: meal distribution, hospital visitation, and evangelism teams serving our island each month.",
  },
];

const weeklySchedule: ScheduleBlock[] = [
  {
    range: "9:30 – 10:40am",
    title: "Sunday School",
    description:
      "Kids, students, and adults working through catechism, scripture memory, and prayer in age-specific classes.",
  },
  {
    range: "10:40 – 10:50am",
    title: "Courtyard Break",
    description: "Coffee, cassava cake, and conversation before we gather for corporate worship.",
  },
  {
    range: "10:50am – 12:00pm",
    title: "Worship Service",
    description:
      "Call to worship, psalms and hymns, expositional preaching, and the Lord's Supper on the first Sunday.",
  },
  {
    range: "3:00pm Wednesdays",
    title: "Cottage Prayer Meeting",
    description: "We rotate homes each week to pray for our members, missionaries, and the needs of San Juan.",
  },
];

const upcomingEvents: EventItem[] = [
  {
    date: "Dec NA",
    title: "Church Christmas Party",
    detail:
      "Evening of carols, testimony sharing, and potluck dinner at the church courtyard. Invite friends and neighbors.",
  },
];

const beliefStatements: BeliefStatement[] = [
  {
    title: "Scripture Alone",
    description:
      "The sixty-six books of the Old and New Testaments are the inspired, infallible Word of God and the only sufficient, certain, and authoritative rule for all faith and obedience.",
  },
  {
    title: "Triune God",
    description:
      "We worship the one living and true God in three persons: Father, Son, and Holy Spirit. He is eternal, sovereign, holy, and worthy of all glory.",
  },
  {
    title: "Sovereign Grace",
    description:
      "Salvation is accomplished by grace alone through faith alone in Christ alone, as the Spirit effectually calls, regenerates, and keeps His people.",
  },
  {
    title: "The Church",
    description:
      "Christ builds His church as baptized believers covenant together for discipline, discipleship, worship, and mission under qualified elders and deacons.",
  },
  {
    title: "Ordinances",
    description:
      "We observe the two ordinances given by Christ-believer's baptism and the Lord's Supper as visible signs of the gospel and membership in the body.",
  },
  {
    title: "Mission & Hope",
    description:
      "We proclaim the gospel to every neighbor, seek the good of Siquijor, and await the return of Jesus when He will make all things new.",
  },
];

const visitInfoBullets = [
  "Preaching in Cebuano with English woven throughout.",
  "Lunch fellowship available every last week of the month.",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        tagline="Hope for every neighbor on the island."
        subheading="We are a multigenerational church practicing the way of Jesus in San Juan through meaningful worship, community, and everyday mission."
      />
      <NavBar links={navLinks} />
      <BeliefsSection
        heading="What We Believe"
        intro="San Juan Baptist Church is joyfully Reformed Baptist, upholding the 1689 London Baptist Confession of Faith."
        statements={beliefStatements}
      />
      <HighlightsSection items={highlightItems} />
      <ScheduleSection schedule={weeklySchedule} />
      <EventsSection events={upcomingEvents} />
      <PastorSection
        name="Pastor Ramir"
        wifeName="Ellen"
        description="Pastor Ramir and Ellen have served SJBC for over two decades. Shepherding through expositional preaching, counseling families, and leading island outreach together."
        imageSrc="/pastor-and-wife-cropped.jpg"
      />
      <VisitSection
        infoBullets={visitInfoBullets}
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.059165699876!2d123.4770338!3d9.1557712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab3f00038814eb%3A0x8fcb065f94930087!2sSan%20Juan%20Baptist%20Church!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
      />
      <CTASection />
      <Footer navLinks={navLinks} />
    </main>
  );
}
