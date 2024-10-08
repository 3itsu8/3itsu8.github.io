'use client';

import React, { useEffect } from 'react';
import styles from './Othello.module.css';

const Page = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.all_projects_button}>
          <a href="/projects"> &lt;All Projects</a>
        </div>
        <div className={styles.main_info}>
          <div className={styles.video_link}>
            <blockquote className="twitter-tweet" data-media-max-width="560">
              <p lang="zxx" dir="ltr">
                <a href="https://t.co/xAMTkHQJT9">pic.twitter.com/xAMTkHQJT9</a>
              </p>
              &mdash; みつば (@3itsu8){' '}
              <a href="https://twitter.com/3itsu8/status/1822951166063554767?ref_src=twsrc%5Etfw">
                August 12, 2024
              </a>
            </blockquote>
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
