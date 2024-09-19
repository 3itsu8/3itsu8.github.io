import React from 'react';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_navlist}>
          <li className={styles.header_navitem}>
            <a>
              <span>Home</span>
            </a>
          </li>
          <li className={styles.header_navitem}>
            <a>
              <span>Projects</span>
            </a>
          </li>
          <li className={styles.header_navitem}>
            <a>
              <span>About</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
