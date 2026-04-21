import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import fifaLogo from "@/shared/assets/icons/logo.svg";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <img src={fifaLogo} alt="FIFA" className={styles.logo} />
      <nav className={styles.nav}>
        <NavLink
          to="/leagues"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Лиги
        </NavLink>
        <NavLink
          to="/teams"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Команды
        </NavLink>
      </nav>
    </div>
  </header>
);

export { Header };
