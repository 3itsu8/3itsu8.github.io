import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_navlist}>
          <li className={styles.header_navitem}>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.header_navitem}>
            <Link href="/projects">
              <span>Projects</span>
            </Link>
          </li>
          <li className={styles.header_navitem}>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
