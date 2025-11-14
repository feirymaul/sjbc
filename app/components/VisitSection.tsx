import styles from "../home.module.css";

interface VisitSectionProps {
  infoBullets: string[];
  mapSrc: string;
}

export function VisitSection({ infoBullets, mapSrc }: VisitSectionProps) {
  return (
    <section id="visit" className={styles.visitSection}>
      <div>
        <p className={styles.cardLabel}>Visit</p>
        <h2 className={styles.sectionHeading}>Plan your first Sunday</h2>
        <p className={styles.sectionText}>
          San Juan Baptist Church, Maite, San Juan, Siquijor · Free parking lot and ADA entrances
          available. Arrive a few minutes early to grab some coffee.
        </p>
        <ul className={styles.infoList}>
          {infoBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <div id="contact" className={styles.visitCard}>
        <p className={styles.cardLabel}>Connect</p>
        <p className={styles.cardBody}>
          Email <a href="mailto:sjbcsiquijor@gmail.com" className={styles.link}>sjbcsiquijor@gmail.com</a>
          <br />
          Call +63 961 530 9826
        </p>
        <p className={styles.cardBody}>
          Follow {" "}
          <a href="https://www.facebook.com/profile.php?id=61576682513008" className={styles.link}>
            Facebook
          </a>
        </p>
        <div className={styles.mapWrapper}>
          <iframe
            title="San Juan Baptist Church map"
            src={mapSrc}
            height="220"
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
