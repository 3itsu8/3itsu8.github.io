'use client';

import Image from 'next/image';
import styles from './Othello.module.css';
import LinkButton from '../../../components/LinkButton';

const Page = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <title>Projects | みつば</title>
        <div className={styles.all_projects_button}>
          <a href="/projects"> &lt;All Projects</a>
        </div>
        <div className={styles.main_info}>
          <div className={styles.video_link}>
            <Image
              src="/images/project/2024_Othello.png"
              alt='映像"Othello"'
              width={960}
              height={540}
            />
            <LinkButton link="https://x.com/3itsu8/status/1822951166063554767">
              X&#40;Twitter&#41;&nbsp;
            </LinkButton>
          </div>
          <section className={styles.content_info}>
            <div className={styles.content_title}>
              <h2>Othello</h2>
            </div>
            <div className={styles.content_caption}>
              <div className={styles.content_credits}>
                <h3>Credits</h3>
                <p>映像 / みつば</p>
              </div>
              <div className={styles.content_about}>
                <h3>About</h3>
                <p>
                  ソフトウェア / Blender, After Effects
                  <br />
                  オセロをモチーフにしたモーショングラフィクス作品です.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>©2024 みつば</p>
      </footer>
    </div>
  );
};

export default Page;
