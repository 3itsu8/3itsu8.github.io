import React from 'react';
import styles from './Header.module.css';
import TransitionLink from './utils/TransitionLink';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_navlist}>
          <li className={styles.header_navitem}>
            <TransitionLink href="/">
              <span>Home</span>
            </TransitionLink>
          </li>
          <li className={styles.header_navitem}>
            <TransitionLink href="/projects">
              <span>Projects</span>
            </TransitionLink>
          </li>
          <li className={styles.header_navitem}>
            <TransitionLink href="/about">
              <span>About</span>
            </TransitionLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
