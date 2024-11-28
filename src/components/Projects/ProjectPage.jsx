'use client';
import Image from 'next/image';
import styles from '../../styles/projectPage.module.css';
import LinkButton from '../LinkButton/index';

const ProjectPage = ({ title, credits, about, imagePath, link, linkMedia }) => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <title>Projects | みつば</title>
        <div className={styles.all_projects_button}>
          <a href="/projects"> &lt;All Projects</a>
        </div>
        <div className={styles.main_info}>
          <div>
            <div className={styles.video_link}>
              <Image
                src={`/images/project/${imagePath}`}
                alt="画像"
                width={960}
                height={540}
              />
              <LinkButton link={link}>{linkMedia}</LinkButton>
            </div>
            <section className={styles.content_info}>
              <div className={styles.content_title}>
                <h2>{title}</h2>
              </div>
              <div className={styles.content_caption}>
                <div className={styles.content_credits}>
                  <h3>Credits</h3>
                  {credits.map((credit, index) => (
                    <p key={index}>{credit}</p>
                  ))}
                </div>
                <div className={styles.content_about}>
                  <h3>About</h3>
                  {about.map((about, index) => (
                    <p key={index}>{about}</p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>©2024 みつば</p>
      </footer>
    </div>
  );
};

export default ProjectPage;
