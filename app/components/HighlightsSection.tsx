import styles from "../home.module.css";

export interface HighlightItem {
  title: string;
  subtitle: string;
  description: string;
}

interface HighlightsSectionProps {
  items: HighlightItem[];
}

export function HighlightsSection({ items }: HighlightsSectionProps) {
  return (
    <section id="life" className={styles.section}>
      <h2 className={styles.sectionHeading}>Life at SJBC</h2>
      <p className={styles.sectionText}>
        We gather around expositional preaching, the ordinances, covenant fellowship, and ongoing
        discipleship shaped by the doctrines of grace.
      </p>
      <div className={styles.highlightGrid}>
        {items.map((item) => (
          <article key={item.title} className={styles.highlightCard}>
            <p className={styles.cardLabel}>{item.subtitle}</p>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardBody}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
