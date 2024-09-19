'use client';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
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
      <div className={styles.video}>
        <video autoPlay loop muted playsInline>
          <source src="/videos/Video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
