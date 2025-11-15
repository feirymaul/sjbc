import Image from "next/image";
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
          <Image src="/sjbc-logo.png" alt="SJBC logo" width={48} height={48} className={styles.navLogo} />
          <div>
            <p className={styles.navMiniTitle}>San Juan Baptist Church</p>
            <p className={styles.navMiniMeta}>Maite · San Juan · Siquijor</p>
          </div>
        </div>
        <nav className={styles.navLinks}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
