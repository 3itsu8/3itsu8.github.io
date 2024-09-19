import React from 'react';
import styles from './projects.module.css';
import Image from 'next/image';

export default function project() {
  return (
    <div className={styles.container}>
      <section className={styles.section_project}>
        <h2 className={styles.section_title}>Projects</h2>
        <h2 className={styles.contents_year}>2024</h2>
        <div className={styles.contents_item}>
          <div className={styles.content}>
            <Image
              src="/images/project/2024_Othello.png"
              alt='映像"Othello"'
              width={300}
              height={300}
            />
            <a>
              <div className={styles.mask}>
                <div className={styles.caption}>Othello</div>
              </div>
            </a>
          </div>
          <div className={styles.content}>
            <Image
              src="/images/project/2024_inthegray.png"
              alt='映像"in the gray"'
              width={300}
              height={300}
            />
            <a>
              <div className={styles.mask}>
                <div className={styles.caption}>【OS-4合作】in the gray</div>
              </div>
            </a>
          </div>
        </div>

        <h2 className={styles.contents_year}>2023</h2>
        <div className={styles.contents_item}>
          <div className={styles.content}>
            <Image
              src="/images/project/2023_Sekibaku.png"
              alt='映像"ハルノ寂寞"'
              width={300}
              height={300}
            />
            <a>
              <div className={styles.mask}>
                <div className={styles.caption}>
                  PVSF2023Sp 稲葉曇 - ハルノ寂寞
                </div>
              </div>
            </a>
          </div>
          <div className={styles.content}>
            <Image
              src="/images/project/2023_DopingDance.png"
              alt='映像"ドーピングダンス"'
              width={300}
              height={300}
            />
            <a>
              <div className={styles.mask}>
                <div className={styles.caption}>
                  【二次創作MV】ドーピングダンス
                </div>
              </div>
            </a>
          </div>
        </div>

        <h2 className={styles.contents_year}>2022</h2>
        <div className={styles.contents_item}>
          <div className={styles.content}>
            <Image
              src="/images/project/2022_Kokoro.png"
              alt='映像"ココロ"'
              width={300}
              height={300}
            />
            <a>
              <div className={styles.mask}>
                <div className={styles.caption}>
                  PVSF2022R トラボルタ - ココロ
                </div>
              </div>
            </a>
          </div>
          <div className={styles.content}>
            <Image
              src="/images/project/2022_LostSummer.png"
              alt='映像"ロスト・サマー"'
              width={300}
              height={300}
            />
            <a>
              <div className={styles.mask}>
                <div className={styles.caption}>
                  【二次創作MV】ロスト・サマー
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>©2024 みつば</p>
      </footer>
    </div>
  );
}
