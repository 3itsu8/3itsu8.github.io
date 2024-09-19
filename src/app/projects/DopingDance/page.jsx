import React from 'react';
import styles from './projects_content.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.all_projects_button}>
          <a> All Projects</a>
        </div>
        <div className={styles.main_info}>
          <div className={styles.video_link}>
            <blockquote className="twitter-tweet" data-media-max-width="560">
              <p lang="ja" dir="ltr">
                STEAKA(@steaka_id)様のドーピングダンスという楽曲で二次創作させていただきました
                <br />
                本編:{' '}
                <a href="https://t.co/fmb2n0Nksm">https://t.co/fmb2n0Nksm</a>
                <br />
                (匿名映像大会用に4か月くらい前に作ったものです){' '}
                <a href="https://t.co/I9f3WlthFq">pic.twitter.com/I9f3WlthFq</a>
              </p>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
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
