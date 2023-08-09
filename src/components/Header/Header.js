// CSS
import styles from "./Header.module.css";

// Hooks
import { useState } from "react";

const Header = () => {

    const [active, setActive] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.container_header}>
        <div className={styles.logo}>
          <span>Telecom FA</span>
        </div>
        <div className={`${styles.menu_bar} ${active && styles.active}`} onClick={() => setActive((actualActive) => !actualActive)}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <ul className={styles.menu}>
          <li>
            <a onClick={() => setActive(false)} href="#planos">Planos</a>
          </li>
          <li>
            <a onClick={() => setActive(false)} href="#form">Cadastro vivo</a>
          </li>
          <li>
            <button>Nos contate</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
