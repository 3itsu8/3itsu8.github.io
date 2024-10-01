import React from 'react';
import styles from './inthegray.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <title>Projects | みつば</title>
      <div className={styles.all_projects_button}>
        <a> &lt;All Projects</a>
      </div>
      <section className={styles.content}>
        <div className={styles.main_info}>
          <div className={styles.video_link}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_SUpJcIBDDE?si=5M7PuGE-qONx8JcZ&amp;start=62"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <section className={styles.content_info}>
            <div className={styles.content_title}>
              <h2>【OS-4合作】in the gray</h2>
            </div>
            <div className={styles.content_caption}>
              <div className={styles.content_credits}>
                <h3>Credits</h3>
                <p>音楽 / 歩く人様</p>
              </div>
              <div className={styles.content_about}>
                <h3>About</h3>
                <p>
                  ソフトウェア / After Effects
                  <br />
                  OS-4合作にて投稿した作品になります.
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
