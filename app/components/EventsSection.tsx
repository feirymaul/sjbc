import styles from "../home.module.css";

export interface EventItem {
  date: string;
  title: string;
  detail: string;
}

interface EventsSectionProps {
  events: EventItem[];
}

export function EventsSection({ events }: EventsSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionHeading}>Upcoming Events</h2>
      <div className={styles.eventsList}>
        {events.map((event) => {
          const [month, day] = event.date.split(" ");
          return (
            <article key={event.title} className={styles.eventCard}>
              <div className={styles.eventDate}>
                <span className={styles.eventMonth}>{month}</span>
                <span className={styles.eventDay}>{day}</span>
              </div>
              <div>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardBody}>{event.detail}</p>
                <a href="#visit" className={styles.link}>
                  Details and RSVP →
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
