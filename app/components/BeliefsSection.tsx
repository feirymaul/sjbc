import styles from "../home.module.css";

export interface BeliefStatement {
  title: string;
  description: string;
}

interface BeliefsSectionProps {
  statements: BeliefStatement[];
}

export function BeliefsSection({ statements }: BeliefsSectionProps) {
  return (
    <section id="beliefs" className={styles.section}>
      <h2 className={styles.sectionHeading}>What We Believe</h2>
      <p className={styles.sectionText}>
        San Juan Baptist Church is joyfully Reformed Baptist, confessing the 1689 London Baptist
        Confession to summarize what Scripture teaches about God, salvation, the church, and the hope
        of Christ’s return.
      </p>
      <div className={styles.beliefGrid}>
        {statements.map((belief) => (
          <article key={belief.title} className={styles.beliefCard}>
            <h3 className={styles.cardTitle}>{belief.title}</h3>
            <p className={styles.cardBody}>{belief.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
