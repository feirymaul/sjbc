import styles from "../home.module.css";

interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps {
  links: NavLink[];
}

export function NavBar({ links }: NavBarProps) {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.navLogoText}>
          <p className={styles.navMiniTitle}>San Juan Baptist Church</p>
          <p className={styles.navMiniMeta}>Maite · San Juan · Siquijor</p>
        </div>
        <nav className={styles.navLinks}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.navActions}>
          <a href="#visit" className={`${styles.button} ${styles.buttonPrimary}`}>
            Plan a Visit
          </a>
          <a href="#contact" className={`${styles.button} ${styles.buttonSecondary}`}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
