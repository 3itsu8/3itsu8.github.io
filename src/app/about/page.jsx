import React from 'react';
import Image from 'next/image';
import styles from './about.module.css'; // stylesオブジェクトのインポート
import Link from 'next/link';

const Page = () => {
  return (
    <div className={styles.container}>
      <title>About | みつば</title>
      <section className={styles.section_about}>
        <h2 className={styles.section_title}>About</h2>
        <div className={styles.about_content}>
          <figure className={styles.icon}>
            <Image
              src="/images/1.png"
              alt="icon image"
              className={styles.icon_img}
              width={165}
              height={165}
            />
            <figcaption className={styles.about_caption}>
              <h2 className={styles.about_name}>みつば</h2>
              <p className={styles.about_info}>
                2022年から活動を開始. BlenderやAfter
                Effects等を用いて映像制作を行っています.
                <br />
                より良い作品作りのため日々勉強中.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section_social}>
        <h2 className={styles.section_title}>Social</h2>
        <div className={styles.social_content}>
          <div className={styles.social_X}>
            <figure className={styles.X_icon}>
              <Image
                src="/images/X_icon.png"
                alt="Xのアイコン"
                className={styles.X_img}
                width={165}
                height={165}
              />
              <figcaption className={styles.X_ID}>
                <p>
                  /{' '}
                  <Link
                    href="https://x.com/3itsu8"
                    className={styles.X_Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @3itsu8
                  </Link>
                </p>
              </figcaption>
            </figure>
          </div>
          <div className={styles.social_YT}>
            <figure className={styles.YT_icon}>
              <Image
                src="/images/YT_icon.png"
                alt="YouTubeのアイコン"
                className={styles.YT_img}
                width={165}
                height={165}
              />
              <figcaption className={styles.YT_ID}>
                <p>
                  /{' '}
                  <Link
                    href="https://www.youtube.com/@3itsu8"
                    className={styles.YT_Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    みつば
                  </Link>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section_contact}>
        <h2 className={styles.section_title}>Contact</h2>
        <div className={styles.contact_info}>
          <p>
            お問い合わせは下に記載されたメールアドレス,
            またはX(Twitter)のDMまでお願いします.
          </p>
        </div>
        <div className={styles.contact_mail}>
          <Link href="mailto:mitsuba.mov@gmail.com">mitsuba.mov@gmail.com</Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>©2024 みつば</p>
      </footer>
    </div>
  );
};

export default Page;
