'use client';
import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
// import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setOpen(!open);
    console.log('sample');
  };

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Projects', href: '/projects' },
    { title: 'About', href: '/about' },
  ];

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
        <button
          onClick={() => {
            handleClick();
            toggleMenu();
          }}
          className={styles.button}
        >
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
        {open && (
          <div className={styles.mobile_nav_background}>
            <div className={styles.mobile_nav}>
              {navLinks.map((link, index) => {
                return (
                  <MobileNavLink
                    className={styles.title_links}
                    key={index}
                    title={link.title}
                    href={link.href}
                  />
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

const MobileNavLink = ({ title, href }) => {
  return (
    <div>
      <Link href={href}>{title}</Link>
    </div>
  );
};
