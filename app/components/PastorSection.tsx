import Image from "next/image";
import styles from "../home.module.css";

interface PastorSectionProps {
  name: string;
  wifeName: string;
  description: string;
  imageSrc: string;
}

export function PastorSection({ name, wifeName, description, imageSrc }: PastorSectionProps) {
  return (
    <section className={`${styles.section} ${styles.pastorSection}`}>
      <div className={styles.pastorContent}>
        <p className={styles.cardLabel}>Our Shepherds</p>
        <h2 className={styles.sectionHeading}>{name} &amp; {wifeName}</h2>
        <p className={styles.sectionText}>{description}</p>
      </div>
      <div className={styles.pastorImageWrapper}>
        <Image
          src={imageSrc}
          alt={`${name} and ${wifeName}`}
          width={498}
          height={315}
          className={styles.pastorImage}
          priority
        />
      </div>
    </section>
  );
}
