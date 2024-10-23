'use client';
import { useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.container}>
      <title>Home | みつば</title>
      <div className={styles.main}>
        <div className={styles.IntroContainer}>
          <Image
            className={styles.IconImage}
            src="/images/1.png"
            alt="image"
            width={165}
            height={165}
          />
          <div className={styles.IntroTextContainer}>
            <div className={styles.IntroText}>Video Creator</div>
            <div className={styles.IntroText}>みつば</div>
          </div>
        </div>
      </div>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="/videos/Video.mp4" type="video/mp4" />
      </video>
      <div className={styles.circleContainer}>
        <div className={styles.circle}></div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>みつば</div>
          <div className={styles.separator}></div>
          <div className={styles.jobTitle}>Video Creator</div>
        </div>
      </div>
    </div>
  );
}
