import React from 'react';
import styles from './projects_content.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.all_projects_button}>
          <a> &lt;All Projects</a>
        </div>
        <div className={styles.main_info}>
          <div className={styles.video_link}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wQjTWwEB6RU?si=XW_5-uEuLbxe2_-Z"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <section className={styles.content_info}>
            <div className={styles.content_title}>
              <h2>PVSF2023Sp 稲葉曇 - ハルノ寂寞</h2>
            </div>
            <div className={styles.content_caption}>
              <div className={styles.content_credits}>
                <h3>Credits</h3>
                <p>
                  音楽 / 稲葉曇様
                  <br />
                  MMDモデル / Serre様, Priod_0906様
                </p>
              </div>
              <div className={styles.content_about}>
                <h3>About</h3>
                <p>
                  ソフトウェア / Blender, AviUtl, Davinci Resolve
                  <br />
                  PVSF2023Spにて投稿した,
                  楽曲「ハルノ寂寞」の二次創作MVになります
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
