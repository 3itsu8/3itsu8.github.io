'use client';
import styles from './page.module.css';
import Image from 'next/image';
export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.IconImage}
        src="/images/1.png"
        alt="image"
        width={165}
        height={165}
      />
      <video width="640" height="360" autoPlay loop muted playsInline>
        <source src="/videos/Video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
