'use client';
import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: [0.39, 1, 0.4, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
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
        <button onClick={toggleMenu} className={styles.button}>
          <span
            className={`${styles.span} ${open ? styles.openFirst : styles.closedFirst}`}
          ></span>
          <span
            className={`${styles.span} ${open ? styles.openSecond : styles.closedSecond}`}
          ></span>
          <span
            className={`${styles.span} ${open ? styles.openThird : styles.closedThird}`}
          ></span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.mobile_nav_background}
            >
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className={styles.mobile_nav}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={mobileLinkVars}
                    className="overflow-hidden"
                  >
                    <Link href={link.href}>
                      <span onClick={toggleMenu}>{link.title}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

const mobileLinkVars = {
  initial: {
    y: '-70%',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};
