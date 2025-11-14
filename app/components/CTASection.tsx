import styles from "../home.module.css";

export function CTASection() {
  return (
    <section className={`${styles.section} ${styles.ctaSection}`}>
      <h2 className={styles.ctaHeading}>Ready to take a next step?</h2>
      <p className={styles.ctaText}>
        Tell us you are coming, request baptism or membership, or share how we can shepherd you
        through prayer and pastoral care.
      </p>
      <div className={styles.actions}>
        <a href="#visit" className={`${styles.button} ${styles.buttonPrimary}`}>
          I&apos;m Planning a Visit
        </a>
        <a href="#contact" className={`${styles.button} ${styles.buttonSecondary}`}>
          Contact the Team
        </a>
      </div>
    </section>
  );
}
