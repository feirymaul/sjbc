import styles from "../home.module.css";

interface NavLink {
  label: string;
  href: string;
}

interface FooterProps {
  navLinks: NavLink[];
}

export function Footer({ navLinks }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <p className={styles.footerBrand}>San Juan Baptist Church</p>
        <p className={styles.footerText}>
          Reformed Baptist fellowship serving the whole island of Siquijor.
        </p>
        <p className={styles.footerText}>5F4W+855 · Maite, San Juan, Siquijor</p>
      </div>
      <div className={styles.footerColumn}>
        <p className={styles.footerHeading}>Gathering Times</p>
        <p className={styles.footerText}>9:30am Sunday School</p>
        <p className={styles.footerText}>10:50am Worship Service</p>
        <p className={styles.footerText}>3:00pm Wednesday Prayer</p>
      </div>
      <div className={styles.footerColumn}>
        <p className={styles.footerHeading}>Quick Links</p>
        <div className={styles.footerLinks}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.footerLink}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
