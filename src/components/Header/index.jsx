'use client';
import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
        <button onClick={handleClick} className={styles.button}>
          <span
            className={`${styles.span} ${isOpen ? styles.openFirst : styles.closedFirst}`}
          ></span>
          <span
            className={`${styles.span} ${isOpen ? styles.openSecond : styles.closedSecond}`}
          ></span>
          <span
            className={`${styles.span} ${isOpen ? styles.openThird : styles.closedThird}`}
          ></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
