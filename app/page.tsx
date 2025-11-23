import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { BeliefsSection, BeliefStatement } from "./components/BeliefsSection";
import { LifeSection, HighlightItem, ScheduleBlock } from "./components/LifeSection";
import { EventItem } from "./components/EventsSection";
import { PastEventsSection } from "./components/PastEventsSection";
import { VisitSection } from "./components/VisitSection";
import { Footer } from "./components/Footer";
import { PastorSection } from "./components/PastorSection";
import { FAQSection } from "./components/FAQSection";
import { QuickInfoSection, QuickInfoItem } from "./components/QuickInfoSection";
import { Reveal } from "./components/Reveal";
import styles from "./home.module.css";

const navLinks = [
  { label: "Life & Schedule", href: "#life" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Visit", href: "#visit" },
  { label: "FAQ", href: "#faq" },
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
    range: "9:30 - 10:40am",
    title: "Sunday School",
    description:
      "Kids, students, and adults working through catechism, scripture memory, and prayer in age-specific classes.",
  },
  {
    range: "10:40 - 10:50am",
    title: "Courtyard Break",
    description: "Coffee, bread, and conversation before we gather for corporate worship.",
  },
  {
    range: "10:50am - 12:00pm",
    title: "Worship Service",
    description:
      "Call to worship, psalms and hymns, expositional preaching.",
  },
  {
    range: "3:00pm Wednesdays",
    title: "Cottage Prayer Meeting",
    description: "We rotate homes each week to pray for our members, missionaries, and the needs of San Juan.",
  },
];

const upcomingEvents: EventItem[] = [
  {
    date: "Dec 21",
    title: "Christmas Party",
    detail:
      "Following our worship service we'll have our christmas party for carols, testimony sharing, and a joyful dinner with the whole church family. Invite friends and neighbors.",
  },
];

const quickInfoItems: QuickInfoItem[] = [
  // {
  //   label: "Prayer & Care",
  //   title: "Message the pastor",
  //   description: "Share a prayer request or ask a question anytime.",
  //   href: "mailto:sjbcsiquijor@gmail.com",
  //   linkText: "Email us →",
  // },
  // {
  //   label: "Find Us",
  //   title: "Maite, San Juan",
  //   description: "Beside old municipal cemetery",
  //   href: "https://maps.app.goo.gl/8UcU8Jx3vsFrDwLu9",
  //   linkText: "Open map →",
  // },
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
      "Salvation is God's gift, by grace through faith in Christ alone, and He invites all people to repent, believe, and follow Jesus.",
  },
  {
    title: "The Church",
    description:
      "Christ builds His church as baptized believers covenant together for discipline, discipleship, worship, and mission under qualified elders and deacons.",
  },
  {
    title: "Ordinances",
    description:
      "We observe the ordinances given by Christ. Baptism is a public declaration that you belong to Jesus, and the Lord's Supper is a reminder of His finished work.",
  },
  {
    title: "Mission & Hope",
    description:
      "We proclaim the gospel to every neighbor, seek the good of Siquijor, and await the return of Jesus when He will make all things new.",
  },
];

const visitInfoBullets = [
  "Main gathering in Cebuano with English woven throughout.",
  "Plan for a relaxed, family-friendly environment with kids.",
  "Next celebration of the Lord's Supper will be announced soon.",
];

const featuredEvent = upcomingEvents[0];

const pastEvents = [
  {
    date: "Sep 23, 2025",
    title: "Women's Fellowship",
    description: "A gathering designed to encourage, strengthen, and equip women to grow in Christ and in fellowship with one another.",
    imageSrc: "/womens-fellowship-2025.jpg",
  },
  {
    date: "May 24, 2025",
    title: "Summer Youth Camp",
    description: "Three days of worship, study, games, friendships, and unforgettable moments as we draw near to God who has made Himself known through His Word.",
    imageSrc: "/summer-youth-camp-2025.jpg",
  },
  {
    date: "Apr 27, 2025",
    title: "21st Church Anniversary",
    description: "With Guest Speaker Ptr. Joebel Casiple from Talibon Baptist Church.",
    imageSrc: "/21st-church-anniversary-v3.jpg",
  },
    {
  date: "Feb 17, 2025",
    title: "Medical & Dental Mission",
    description: "Grace Bible Church International's mission to serve our community with free medical and dental care hosted at SJBC.",
    imageSrc: "/medical-mission-2025-v2.png",
  },
  {
    date: "Dec 29, 2024",
    title: "Couple's Night",
    description: "An evening of fellowship, encouragement, and prayer for marriages across our church family.",
    imageSrc: "/couples-night-2024.png",
  },
];

const faqItems = [
  {
    question: "What language do you use during services?",
    answer: "Most of our gathering is in Cebuano with English woven throughout.",
  },
  {
    question: "What kind of worship music should I expect?",
    answer: "We sing from the traditional Trinity Hymnal in English alongside other scripture-rich songs. We also explain gospel-centered lyrics so everyone can worship together.",
  },
  {
    question: "Do I need to know theology to attend?",
    answer: "No. We aim to teach the Bible in simple, everyday language. You will hear terms explained, and you can ask questions anytime in our classes or over coffee.",
  },
  {
    question: "What should I wear and how long is the service?",
    answer: "Wear something modest and God-honoring; people range from casual to dressy. Sunday worship lasts about 70 minutes with singing, prayer, scripture, and preaching.",
  },
  {
    question: "How do you care for kids and youth?",
    answer: "We offer age-appropriate Sunday School, catechism classes, and a safe space for kids during the sermon. Families are also encouraged to worship together.",
  },
  {
    question: "How can I get connected?",
    answer: "Stay for lunch on the last Sunday of the month, join a prayer gathering, or talk with Pastor Ramir and the elders about baptism, membership, or community groups.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <NavBar links={navLinks} />
      <Hero
        tagline="Hope for every neighbor on the island."
        subheading="We are neighbors, families, and friends learning to follow Jesus together through scripture, prayer, hospitality, and service across San Juan."
        cardLabel={featuredEvent ? "Upcoming Event" : "This Sunday"}
        cardTitle={featuredEvent ? `${featuredEvent.date} · ${featuredEvent.title}` : "9:30am · Maite, San Juan"}
        cardNote={
          featuredEvent
            ? featuredEvent.detail
            : "Kids check-in opens at 9:15am. Livestream option coming soon for those joining online."
        }
        cardLinkHref="#visit"
        cardLinkText={featuredEvent ? "See visit details →" : "All gathering details →"}
      />
      <Reveal>
        <QuickInfoSection items={quickInfoItems} />
      </Reveal>
      <Reveal delay={100}>
        <PastEventsSection events={pastEvents} />
      </Reveal>
      <Reveal delay={150}>
        <BeliefsSection
          heading="What We Believe"
          intro="We uphold the 1689 London Baptist Confession because it helps us explain the timeless truths of Scripture in everyday life."
          statements={beliefStatements}
        />
      </Reveal>
      <Reveal delay={250}>
        <LifeSection highlights={highlightItems} schedule={weeklySchedule} />
      </Reveal>
      {/*<EventsSection events={upcomingEvents} />*/}
      <Reveal delay={300}>
        <FAQSection items={faqItems} />
      </Reveal>
      <Reveal delay={350}>
        <PastorSection
          name="Pastor Ramir"
          wifeName="Ellen"
          description="Pastor Ramir and Ellen have served SJBC for over three decades. Shepherding through expositional preaching, counseling families, and leading island outreach together."
          imageSrc="/pastor-and-wife.jpg"
        />
      </Reveal>
      <Reveal delay={400}>
        <VisitSection
          infoBullets={visitInfoBullets}
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.059165699876!2d123.4770338!3d9.1557712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab3f00038814eb%3A0x8fcb065f94930087!2sSan%20Juan%20Baptist%20Church!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
        />
      </Reveal>
      {/*<CTASection />*/}
      <Footer navLinks={navLinks} />
    </main>
  );
}
