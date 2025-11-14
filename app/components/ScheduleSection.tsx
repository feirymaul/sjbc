import styles from "../home.module.css";

export interface ScheduleBlock {
  range: string;
  title: string;
  description: string;
}

interface ScheduleSectionProps {
  schedule: ScheduleBlock[];
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <section id="schedule" className={styles.section}>
      <h2 className={styles.sectionHeading}>Weekly Rhythm</h2>
      <p className={styles.sectionText}>
        Our weekly rhythm centers on catechism, fellowship, family worship, and the stated means God
        has given His church.
      </p>
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
