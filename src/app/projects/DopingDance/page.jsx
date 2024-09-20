'use client';

import React, { useEffect } from 'react';
import styles from './DopingDance.module.css';

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
      <title>Projects | みつば</title>
      <section className={styles.content}>
        <div className={styles.all_projects_button}>
          <a> &lt;All Projects</a>
        </div>
        <div className={styles.main_info}>
          <div className={styles.video_link}>
            <blockquote className="twitter-tweet" data-media-max-width="560">
              <p lang="ja" dir="ltr">
                STEAKA(@steaka_id)様のドーピングダンスという楽曲で二次創作させていただきました
                本編:{' '}
                <a href="https://t.co/fmb2n0Nksm">https://t.co/fmb2n0Nksm</a>
                (匿名映像大会用に4か月くらい前に作ったものです){' '}
                <a href="https://t.co/I9f3WlthFq">pic.twitter.com/I9f3WlthFq</a>
              </p>
              &mdash; みつば (@3itsu8){' '}
              <a href="https://twitter.com/3itsu8/status/1651192127291031557">
                March 29, 2023
              </a>
            </blockquote>
          </div>
          <section className={styles.content_info}>
            <div className={styles.content_title}>
              <h2>【二次創作MV】ドーピングダンス</h2>
            </div>
            <div className={styles.content_caption}>
              <div className={styles.content_credits}>
                <h3>Credits</h3>
                <p>音楽 / STEAKA様</p>
              </div>
              <div className={styles.content_about}>
                <h3>About</h3>
                <p>
                  ソフトウェア / Blender, AviUtl
                  <br />
                  STEAKA様の楽曲「ドーピングダンス」をお借りして,
                  二次創作MVを作成しました.
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
