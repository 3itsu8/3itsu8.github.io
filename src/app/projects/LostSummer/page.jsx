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
              src="https://www.youtube.com/embed/mNKpsNXFSJk?si=nZDXd-v2IvU7qcUx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <section className={styles.content_info}>
            <div className={styles.content_title}>
              <h2>【二次創作MV】ロスト・サマー</h2>
            </div>
            <div className={styles.content_caption}>
              <div className={styles.content_credits}>
                <h3>Credits</h3>
                <p>
                  音楽 / 小林オニキス様
                  <br />
                  歌詞 / はな様
                  <br />
                  MMDモデル / Serre様, Priod_0906様,雪原 葵様
                </p>
              </div>
              <div className={styles.content_about}>
                <h3>About</h3>
                <p>
                  ソフトウェア / Blender, AviUtl, Davinci Resolve
                  <br />
                  小林オニキス様の楽曲「ロスト・サマー」をお借りして,
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
