import styles from "../home.module.css";

interface HeroProps {
  tagline: string;
  subheading: string;
  cardLabel?: string;
  cardTitle?: string;
  cardNote?: string;
  cardLinkHref?: string;
  cardLinkText?: string;
}

export function Hero({
  tagline,
  subheading,
  cardLabel = "This Sunday",
  cardTitle = "9:30am · Maite, San Juan",
  cardNote = "Kids check-in opens at 9:15am. Livestream option coming soon for those joining online.",
  cardLinkHref = "#visit",
  cardLinkText = "All gathering details →",
}: HeroProps) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h2 className={styles.tagline}>{tagline}</h2>
        <p className={styles.subheading}>{subheading}</p>
        <div className={styles.actions}>
          <a href="#visit" className={`${styles.button} ${styles.buttonPrimary}`}>
            Plan a Visit
          </a>
          <a href="#beliefs" className={`${styles.button} ${styles.buttonSecondary}`}>
            What We Believe
          </a>
        </div>
      </div>
      <div className={styles.heroCard}>
        <p className={styles.heroCardLabel}>{cardLabel}</p>
        <p className={styles.heroCardTime}>{cardTitle}</p>
        <p className={styles.heroCardNote}>{cardNote}</p>
        <a href={cardLinkHref} className={styles.link}>
          {cardLinkText}
        </a>
      </div>
    </section>
  );
}
