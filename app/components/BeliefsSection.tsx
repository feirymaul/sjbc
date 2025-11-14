import styles from "../home.module.css";

export interface BeliefStatement {
  title: string;
  description: string;
}

interface BeliefsSectionProps {
  heading?: string;
  intro?: string;
  statements: BeliefStatement[];
}

export function BeliefsSection({ heading = "What We Believe", intro, statements }: BeliefsSectionProps) {
  return (
    <section id="beliefs" className={styles.section}>
      <h2 className={styles.sectionHeading}>{heading}</h2>
      {intro && <p className={styles.sectionText}>{intro}</p>}
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
