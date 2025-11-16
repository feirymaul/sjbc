import styles from "../home.module.css";

export interface HighlightItem {
  title: string;
  subtitle: string;
  description: string;
}

export interface ScheduleBlock {
  range: string;
  title: string;
  description: string;
}

interface LifeSectionProps {
  highlights: HighlightItem[];
  schedule: ScheduleBlock[];
}

export function LifeSection({ highlights, schedule }: LifeSectionProps) {
  return (
    <section id="life" className={styles.section}>
      <h2 className={styles.sectionHeading}>Life at SJBC</h2>
      <p className={styles.sectionText}>
        We gather around scripture, prayer, hospitality, and service. Here’s a snapshot of the spaces
        where you can belong and grow, plus what a typical week looks like.
      </p>
      <div className={styles.highlightGrid}>
        {highlights.map((item) => (
          <article key={item.title} className={styles.highlightCard}>
            <p className={styles.cardLabel}>{item.subtitle}</p>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardBody}>{item.description}</p>
          </article>
        ))}
      </div>
      <div className={styles.sectionDivider}>
        <p>Weekly Rhythm</p>
      </div>
      <div className={styles.scheduleList}>
        {schedule.map((block) => (
          <article key={block.title + block.range} className={styles.scheduleCard}>
            <p className={styles.scheduleRange}>{block.range}</p>
            <h3 className={styles.cardTitle}>{block.title}</h3>
            <p className={styles.cardBody}>{block.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
