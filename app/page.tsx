import Image from "next/image";

const palette = {
  navy: "#0f172a",
  deepNavy: "#0b1a2b",
  slate: "#475569",
  accent: "#d97706",
  accentSoft: "#fde68a",
  sand: "#fff8ef",
  softCard: "#fdf4e3",
};

const navLinks = [
  { label: "Life at SJBC", href: "#life" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Sermon", href: "#sermon" },
  { label: "Schedule", href: "#schedule" },
  { label: "Visit", href: "#visit" },
];

const highlightItems = [
  {
    title: "Sunday Worship",
    subtitle: "9:30am Sanctuary",
    description: "A bilingual gathering with live worship, kids programming, and coffee afterward.",
  },
  {
    title: "Midweek Prayer",
    subtitle: "Wednesdays 3pm",
    description: "An intimate time of scripture reading, testimonies, and intercession for our city.",
  },
  {
    title: "Serve San Juan",
    subtitle: "Monthly Outreach",
    description: "Neighborhood cleanup, meal distribution, and support for local shelters.",
  },
  {
    title: "Reformed Theology",
    subtitle: "1689 Confession",
    description: "Rooted in the historic 1689 London Baptist Confession of Faith with gospel-centered preaching.",
  },
];

const upcomingEvents = [
  {
    date: "Mid Dec",
    title: "Church Christmas Party",
    detail:
      "Evening of carols, testimony sharing, and potluck dinner at the church courtyard. Invite friends and neighbors.",
  },
];

const weeklySchedule = [
  {
    range: "9:30 – 10:40am",
    title: "Sunday School",
    description: "Age-specific classes and Bible studies for kids, students, and adults.",
  },
  {
    range: "10:40 – 10:50am",
    title: "Courtyard Break",
    description: "Snacks, coffee, and conversation before the worship gathering begins.",
  },
  {
    range: "10:50am – 12:00pm",
    title: "Worship Service",
    description: "Live worship, prayer, teaching, and communion on the first Sunday of the month.",
  },
  {
    range: "3:00pm Wednesdays",
    title: "Cottage Prayer Meeting",
    description: "Rotating homes across the city interceding for needs and sharing testimonies.",
  },
];

const beliefStatements = [
  {
    title: "Scripture Alone",
    description:
      "The sixty-six books of the Old and New Testaments are the inspired, infallible Word of God and the only sufficient, certain, and authoritative rule for all faith and obedience.",
  },
  {
    title: "Triune God",
    description:
      "We worship the one living and true God—Father, Son, and Holy Spirit—eternal, sovereign, holy, and worthy of all glory, as confessed in the first chapters of the 1689 confession.",
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
      "We observe the two ordinances given by Christ—believer’s baptism and the Lord’s Supper—as visible signs of the gospel and membership in the body.",
  },
  {
    title: "Mission & Hope",
    description:
      "We proclaim the gospel to every neighbor, seek the good of Siquijor, and await the return of Jesus when He will make all things new.",
  },
];

export default function Home() {
  return (
    <main className="sjbc-page" style={styles.page}>
      <section id="hero" className="sjbc-hero" style={styles.hero}>
        <div className="sjbc-hero-content" style={styles.heroContent}>
          <div style={styles.logoWrapper}>
            <Image
              src="/sjbc-logo.png"
              alt="San Juan Baptist Church logo"
              width={72}
              height={72}
              priority
              style={styles.logo}
            />
            <div>
              <p style={styles.logoLabel}>Reformed Baptist Community</p>
              <h1 style={styles.churchTitle}>
                San Juan <span style={styles.churchTitleAccent}>Baptist Church</span>
              </h1>
              <p style={styles.churchSubtitle}>Maite · San Juan · Siquijor</p>
            </div>
          </div>
          <h2 style={styles.tagline}>
            Hope for every neighbor on the island.
          </h2>
          <p style={styles.subheading}>
            We are a multigenerational church practicing the way of Jesus in San Juan through
            meaningful worship, community, and everyday mission.
          </p>
          <div className="sjbc-actions" style={styles.heroActions}>
            <a href="#visit" style={{ ...styles.button, background: palette.accent, color: "#fff" }}>
              Plan a Visit
            </a>
            <a href="#beliefs" style={{ ...styles.button, background: palette.accentSoft, color: palette.navy }}>
              What We Believe
            </a>
          </div>
        </div>
        <div className="sjbc-hero-card" style={styles.heroCard}>
          <p style={styles.heroCardLabel}>This Sunday</p>
          <p style={styles.heroCardTime}>9:30am · Maite, San Juan</p>
          <p style={styles.heroCardNote}>
            Kids check-in opens at 9:15am. Livestream option coming soon for those joining online.
          </p>
          <a href="#visit" style={styles.cardLink}>
            All gathering details →
          </a>
        </div>
      </section>

      <header className="sjbc-header" style={styles.header}>
        <div className="sjbc-nav" style={styles.nav}>
          <nav className="sjbc-nav-links" style={styles.navLinks}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="sjbc-nav-actions" style={styles.navActions}>
            <a href="#visit" style={{ ...styles.button, background: palette.accent, color: "#fff" }}>
              Plan a Visit
            </a>
            <a href="#contact" style={{ ...styles.button, background: palette.accentSoft, color: palette.navy }}>
              Contact
            </a>
          </div>
        </div>
      </header>

      <section id="beliefs" className="sjbc-section" style={styles.section}>
        <h2 style={styles.sectionHeading}>What We Believe</h2>
        <p style={styles.sectionText}>
          San Juan Baptist Church is joyfully Reformed Baptist, confessing the 1689 London Baptist
          Confession to summarize what Scripture teaches about God, salvation, the church, and the
          hope of Christ’s return.
        </p>
        <div style={styles.beliefGrid}>
          {beliefStatements.map((belief) => (
            <article key={belief.title} style={styles.beliefCard}>
              <h3 style={styles.cardTitle}>{belief.title}</h3>
              <p style={styles.cardBody}>{belief.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="life" className="sjbc-section" style={styles.section}>
        <h2 style={styles.sectionHeading}>Life at SJBC</h2>
        <p style={styles.sectionText}>
          We gather around expositional preaching, the ordinances, covenant fellowship, and
          ongoing discipleship shaped by the doctrines of grace.
        </p>
        <div style={styles.highlightGrid}>
          {highlightItems.map((item) => (
            <article key={item.title} style={styles.highlightCard}>
              <p style={styles.cardLabel}>{item.subtitle}</p>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardBody}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* <section id="sermon" className="sjbc-section" style={styles.sermonSection}>
        <div>
          <p style={styles.cardLabel}>Latest Sermon</p>
          <h2 style={styles.sectionHeading}>“Rooted in Love”</h2>
          <p style={styles.sectionText}>
            Pastor Elena unpacks Ephesians 3:14-21 and how the Spirit strengthens us to love
            our city sacrificially.
          </p>
          <div className="sjbc-actions" style={styles.heroActions}>
            <button type="button" style={{ ...styles.button, background: palette.accent, color: "#fff" }}>
              ▶︎ Watch Message
            </button>
            <button
              type="button"
              style={{
                ...styles.button,
                background: "#fff",
                color: palette.navy,
                border: "1px solid rgba(217, 119, 6, 0.35)",
              }}
            >
              Download Notes
            </button>
          </div>
        </div>
        <div style={styles.sermonCard}>
          <p style={styles.cardLabel}>Scripture</p>
          <p style={styles.cardTitle}>Ephesians 3:14-21</p>
          <p style={styles.cardBody}>
            “I pray that you, being rooted and established in love, may have power together
            with all the Lord’s holy people…”
          </p>
        </div>
      </section> */}

      <section id="schedule" className="sjbc-section" style={styles.section}>
        <h2 style={styles.sectionHeading}>Weekly Rhythm</h2>
        <p style={styles.sectionText}>
          Our weekly rhythm centers on catechism, fellowship, family worship, and the stated
          means God has given His church.
        </p>
        <div style={styles.scheduleList}>
          {weeklySchedule.map((block) => (
            <article key={block.title + block.range} style={styles.scheduleCard}>
              <p style={styles.scheduleRange}>{block.range}</p>
              <h3 style={styles.cardTitle}>{block.title}</h3>
              <p style={styles.cardBody}>{block.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sjbc-section" style={styles.section}>
        <h2 style={styles.sectionHeading}>Upcoming at San Juan Baptist</h2>
        <div style={styles.eventsList}>
          {upcomingEvents.map((event) => (
            <article key={event.title} style={styles.eventCard}>
              <div style={styles.eventDate}>
                <span style={styles.eventMonth}>{event.date.split(" ")[0]}</span>
                <span style={styles.eventDay}>{event.date.split(" ")[1]}</span>
              </div>
              <div>
                <h3 style={styles.cardTitle}>{event.title}</h3>
                <p style={styles.cardBody}>{event.detail}</p>
                <a href="#visit" style={styles.cardLink}>
                  Details and RSVP →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="visit" className="sjbc-section" style={styles.visitSection}>
        <div>
          <p style={styles.cardLabel}>Visit</p>
          <h2 style={styles.sectionHeading}>Plan your first Sunday</h2>
          <p style={styles.sectionText}>
            San Juan Baptist Church, Maite, San Juan, Siquijor · Free parking lot and ADA entrances available. Arrive
            a few minutes early to grab some coffee.
          </p>
          <ul style={styles.infoList}>
            <li>Kids ministry for nursery through 8th grade.</li>
            <li>Live Cebuano/English preaching with headsets for hearing assistance.</li>
            <li>Preaching in Cebuano with English woven throughout.</li>
            <li>Prayer team available after each gathering.</li>
          </ul>
        </div>
        <div id="contact" style={styles.visitCard}>
          <p style={styles.cardLabel}>Connect</p>
          <p style={styles.cardBody}>
            Email <a href="mailto:sjbcsiquijor@gmail.com" style={styles.link}>sjbcsiquijor@gmail.com</a>
            <br />
            Call +63 961 530 9826
          </p>
          <p style={styles.cardBody}>
            Follow{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61576682513008"
              style={styles.link}
            >
              Facebook
            </a>
          </p>
          <div style={styles.mapWrapper}>
            <iframe
              title="San Juan Baptist Church map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.059165699876!2d123.4770338!3d9.1557712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab3f00038814eb%3A0x8fcb065f94930087!2sSan%20Juan%20Baptist%20Church!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
              width="100%"
              height="220"
              style={styles.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="sjbc-section" style={styles.ctaSection}>
        <h2 style={styles.ctaHeading}>Ready to take a next step?</h2>
        <p style={styles.ctaText}>
          Tell us you are coming, request baptism or membership, or share how we can shepherd
          you through prayer and pastoral care.
        </p>
        <div className="sjbc-actions" style={styles.heroActions}>
          <a href="#visit" style={{ ...styles.button, background: palette.accent, color: "#fff" }}>
            I&apos;m Planning a Visit
          </a>
          <a href="#contact" style={{ ...styles.button, background: "transparent", color: "#fff", border: "1px solid #fff" }}>
            Contact the Team
          </a>
        </div>
      </section>

      <footer className="sjbc-footer" style={styles.footer}>
        <div style={styles.footerColumn}>
          <p style={styles.footerBrand}>San Juan Baptist Church</p>
          <p style={styles.footerText}>
            Reformed Baptist fellowship serving the whole island of Siquijor.
          </p>
          <p style={styles.footerText}>5F4W+855 · Maite, San Juan, Siquijor</p>
        </div>
        <div style={styles.footerColumn}>
          <p style={styles.footerHeading}>Gathering Times</p>
          <p style={styles.footerText}>9:30am Sunday School</p>
          <p style={styles.footerText}>10:50am Worship Service</p>
          <p style={styles.footerText}>3:00pm Wednesday Prayer</p>
        </div>
        <div style={styles.footerColumn}>
          <p style={styles.footerHeading}>Quick Links</p>
          <div style={styles.footerLinks}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={styles.footerLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  page: {
    fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    padding: "2rem 1.5rem 4rem",
    maxWidth: "1100px",
    margin: "0 auto",
    color: palette.navy,
    lineHeight: 1.6,
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
  },
  navInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: palette.softCard,
    borderRadius: "999px",
    padding: "0.6rem 1.25rem",
    border: "1px solid rgba(217, 119, 6, 0.2)",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  navInfoItem: {
    margin: 0,
    fontSize: "0.9rem",
    color: palette.navy,
    fontWeight: 600,
  },
  navInfoLinks: {
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap",
  },
  navInfoLink: {
    textDecoration: "none",
    color: palette.accent,
    fontWeight: 600,
    fontSize: "0.9rem",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    padding: "1rem 1.5rem",
    borderRadius: "999px",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    background: "#fff",
    boxShadow: "0 10px 40px -30px rgba(15, 23, 42, 0.6)",
    flexWrap: "wrap",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
  navLink: {
    textDecoration: "none",
    color: palette.slate,
    fontWeight: 500,
    fontSize: "0.95rem",
  },
  navActions: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  hero: {
    background: "linear-gradient(135deg, #fffdf6, #fde6c8, #fde68a)",
    borderRadius: "1.5rem",
    padding: "3rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    alignItems: "center",
  },
  heroContent: {
    textAlign: "left",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1rem",
  },
  logo: {
    borderRadius: "999px",
    border: "2px solid rgba(15, 23, 42, 0.15)",
  },
  logoLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.25em",
    fontSize: "0.7rem",
    color: palette.slate,
  },
  churchTitle: {
    margin: 0,
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: 1.1,
  },
  churchTitleAccent: {
    display: "block",
    fontWeight: 400,
    fontSize: "2.25rem",
    color: palette.accent,
  },
  churchSubtitle: {
    margin: "0.3rem 0 0",
    color: palette.accent,
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontSize: "0.65rem",
  },
  tagline: {
    fontSize: "2.75rem",
    margin: "0.5rem 0",
    color: palette.navy,
  },
  subheading: {
    margin: "0.75rem 0 1.25rem",
    color: palette.slate,
  },
  heroActions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
  },
  button: {
    padding: "0.8rem 1.4rem",
    borderRadius: "999px",
    fontWeight: 600,
    textDecoration: "none",
    border: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 15px 30px -18px rgba(15, 23, 42, 0.45)",
  },
  heroCard: {
    background: palette.sand,
    borderRadius: "1.25rem",
    padding: "2rem",
    boxShadow: "0 20px 55px -35px rgba(15, 23, 42, 0.65)",
  },
  heroCardLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.25em",
    fontSize: "0.7rem",
    marginBottom: "0.5rem",
    color: "rgba(15, 23, 42, 0.55)",
  },
  heroCardTime: {
    fontSize: "1.5rem",
    margin: 0,
  },
  heroCardNote: {
    color: palette.slate,
    margin: "0.75rem 0",
  },
  cardLink: {
    color: palette.accent,
    fontWeight: 600,
    textDecoration: "none",
  },
  section: {
    background: palette.sand,
    borderRadius: "1.25rem",
    padding: "2.5rem",
    boxShadow: "0 10px 35px -25px rgba(15, 23, 42, 0.5)",
  },
  sectionHeading: {
    margin: "0 0 0.5rem",
    fontSize: "2rem",
  },
  sectionText: {
    margin: "0 0 1.5rem",
    color: palette.slate,
  },
  highlightGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.5rem",
  },
  highlightCard: {
    border: "1px solid rgba(217, 119, 6, 0.2)",
    borderRadius: "1rem",
    padding: "1.5rem",
    background: palette.softCard,
  },
  cardLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "0.65rem",
    color: "rgba(15, 23, 42, 0.45)",
    marginBottom: "0.6rem",
  },
  cardTitle: {
    margin: 0,
    fontSize: "1.25rem",
  },
  cardBody: {
    margin: "0.6rem 0 0",
    color: palette.slate,
  },
  sermonSection: {
    background: "linear-gradient(120deg, #0f172a, #1c2d3f)",
    borderRadius: "1.5rem",
    padding: "2.5rem",
    color: "#fff",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2rem",
  },
  sermonCard: {
    background: "rgba(255,255,255,0.12)",
    borderRadius: "1rem",
    padding: "1.5rem",
    border: "1px solid rgba(255,255,255,0.25)",
  },
  eventsList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  beliefGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.25rem",
  },
  beliefCard: {
    border: "1px solid rgba(217, 119, 6, 0.2)",
    borderRadius: "1rem",
    padding: "1.5rem",
    background: palette.softCard,
  },
  scheduleList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  scheduleCard: {
    border: "1px solid rgba(217, 119, 6, 0.2)",
    borderRadius: "1rem",
    padding: "1.25rem 1.5rem",
    background: palette.softCard,
  },
  scheduleRange: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: palette.accent,
    marginBottom: "0.3rem",
  },
  eventCard: {
    border: "1px solid rgba(15, 23, 42, 0.08)",
    borderRadius: "1rem",
    padding: "1.5rem",
    display: "flex",
    gap: "1.5rem",
    alignItems: "flex-start",
    background: palette.softCard,
  },
  eventDate: {
    minWidth: "64px",
    textAlign: "center",
    background: "#fff",
    borderRadius: "0.75rem",
    border: "1px solid rgba(217, 119, 6, 0.35)",
    padding: "0.5rem",
  },
  eventMonth: {
    display: "block",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    color: palette.accent,
  },
  eventDay: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: palette.navy,
  },
  visitSection: {
    background: palette.sand,
    borderRadius: "1.25rem",
    padding: "2.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2rem",
    boxShadow: "0 10px 35px -25px rgba(15, 23, 42, 0.5)",
  },
  infoList: {
    margin: "1rem 0 0",
    paddingLeft: "1.25rem",
    color: palette.slate,
  },
  visitCard: {
    border: "1px solid rgba(217, 119, 6, 0.3)",
    borderRadius: "1.25rem",
    padding: "1.75rem",
    background: palette.softCard,
  },
  mapWrapper: {
    marginTop: "1.5rem",
    borderRadius: "1rem",
    overflow: "hidden",
    border: "1px solid rgba(217, 119, 6, 0.25)",
  },
  map: {
    border: "0",
  },
  link: {
    color: palette.accent,
    fontWeight: 600,
    textDecoration: "none",
  },
  ctaSection: {
    background: "linear-gradient(120deg, #0b1a2b, #132f3b)",
    color: "#fff",
    borderRadius: "1.5rem",
    padding: "2.5rem",
    textAlign: "center",
  },
  ctaHeading: {
    margin: "0 0 0.75rem",
    fontSize: "2rem",
  },
  ctaText: {
    margin: "0 0 1.5rem",
    color: "rgba(255,255,255,0.85)",
  },
  footer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
    borderTop: "1px solid rgba(15, 23, 42, 0.1)",
    paddingTop: "2rem",
  },
  footerColumn: {
    background: palette.softCard,
    borderRadius: "1rem",
    padding: "1.5rem",
    border: "1px solid rgba(217, 119, 6, 0.15)",
  },
  footerBrand: {
    margin: 0,
    fontWeight: 700,
    color: palette.navy,
  },
  footerHeading: {
    margin: "0 0 0.5rem",
    fontWeight: 600,
    color: palette.navy,
  },
  footerText: {
    margin: "0.25rem 0",
    color: palette.slate,
  },
  footerLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },
  footerLink: {
    textDecoration: "none",
    color: palette.accent,
    fontWeight: 600,
  },
};
