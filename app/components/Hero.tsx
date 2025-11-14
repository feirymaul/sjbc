import Image from "next/image";
import styles from "../home.module.css";

interface HeroProps {
  tagline: string;
  subheading: string;
}

export function Hero({ tagline, subheading }: HeroProps) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.logoWrapper}>
          <Image
            src="/sjbc-logo.png"
            alt="San Juan Baptist Church logo"
            width={72}
            height={72}
            priority
            className={styles.logo}
          />
          <div>
            <p className={styles.logoLabel}>Reformed Baptist Community</p>
            <h1 className={styles.churchTitle}>
              San Juan <span className={styles.churchTitleAccent}>Baptist Church</span>
            </h1>
            <p className={styles.churchSubtitle}>Maite · San Juan · Siquijor</p>
          </div>
        </div>
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
        <p className={styles.heroCardLabel}>This Sunday</p>
        <p className={styles.heroCardTime}>9:30am · Maite, San Juan</p>
        <p className={styles.heroCardNote}>
          Kids check-in opens at 9:15am. Livestream option coming soon for those joining online.
        </p>
        <a href="#visit" className={styles.link}>
          All gathering details →
        </a>
      </div>
    </section>
  );
}
