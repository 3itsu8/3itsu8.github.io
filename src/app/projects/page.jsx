import React from 'react';
import styles from './projects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '../../components/FadeIn';

export default function project() {
  return (
    <div className={styles.container}>
      <section className={styles.section_project}>
        <title>Projects | みつば</title>
        <h2 className={styles.section_title}>Projects</h2>
        <h2 className={styles.contents_year}>2024</h2>
        <div className={styles.contents_item}>
          <FadeIn className={styles.content}>
            <Image
              src="/images/project/2024_twinklenight.png"
              alt='映像"twinkle night"'
              width={854}
              height={480}
            />
            <Link href="projects/twinklenight">
              <div className={styles.mask}>
                <div className={styles.caption}>創作島合作 - twinkle night</div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn className={styles.content}>
            <Image
              src="/images/project/2024_Othello.png"
              alt='映像"Othello"'
              width={854}
              height={480}
            />
            <Link href="projects/Othello">
              <div className={styles.mask}>
                <div className={styles.caption}>Othello</div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn className={styles.content}>
            <Image
              src="/images/project/2024_inthegray.png"
              alt='映像"in the gray"'
              width={854}
              height={480}
            />
            <Link href="projects/inthegray">
              <div className={styles.mask}>
                <div className={styles.caption}>OS-4合作 - in the gray</div>
              </div>
            </Link>
          </FadeIn>
        </div>

        <h2 className={styles.contents_year}>2023</h2>
        <div className={styles.contents_item}>
          <FadeIn className={styles.content}>
            <Image
              src="/images/project/2023_Sekibaku.png"
              alt='映像"ハルノ寂寞"'
              width={854}
              height={480}
            />
            <Link href="projects/Sekibaku">
              <div className={styles.mask}>
                <div className={styles.caption}>
                  PVSF2023Sp 稲葉曇 - ハルノ寂寞
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn className={styles.content}>
            <Image
              src="/images/project/2023_DopingDance.png"
              alt='映像"ドーピングダンス"'
              width={854}
              height={480}
            />
            <Link href="projects/DopingDance">
              <div className={styles.mask}>
                <div className={styles.caption}>
                  【二次創作MV】ドーピングダンス
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>

        <h2 className={styles.contents_year}>2022</h2>
        <div className={styles.contents_item}>
          <FadeIn className={styles.content}>
            <Image
              src="/images/project/2022_Kokoro.png"
              alt='映像"ココロ"'
              width={854}
              height={480}
            />
            <Link href="projects/Kokoro">
              <div className={styles.mask}>
                <div className={styles.caption}>
                  PVSF2022R トラボルタ - ココロ
                </div>
              </div>
            </Link>
          </FadeIn>
          <FadeIn className={styles.content}>
            <Image
              src="/images/project/2022_LostSummer.png"
              alt='映像"ロスト・サマー"'
              width={854}
              height={480}
            />
            <Link href="projects/LostSummer">
              <div className={styles.mask}>
                <div className={styles.caption}>
                  【二次創作MV】ロスト・サマー
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>©2025 みつば</p>
      </footer>
    </div>
  );
}
