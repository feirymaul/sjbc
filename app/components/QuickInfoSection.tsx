import styles from "../home.module.css";

export interface QuickInfoItem {
  label: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

interface QuickInfoSectionProps {
  items: QuickInfoItem[];
}

export function QuickInfoSection({ items }: QuickInfoSectionProps) {
  if (!items.length) return null;

  return (
    <section className={styles.quickInfoSection} aria-label="Essential visit details">
      <div className={styles.quickInfoGrid}>
        {items.map((item) => (
          <article key={item.title} className={styles.quickInfoCard}>
            <p className={styles.cardLabel}>{item.label}</p>
            <h3 className={styles.quickInfoTitle}>{item.title}</h3>
            <p className={styles.cardBody}>{item.description}</p>
            {item.href && item.linkText && (
              <a className={styles.link} href={item.href}>
                {item.linkText}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
