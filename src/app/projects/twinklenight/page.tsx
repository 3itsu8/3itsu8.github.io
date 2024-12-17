'use client';
import ProjectPage from '../../../components/Projects/ProjectPage';
const Page = () => {
  return (
    <ProjectPage
      title={'第一回創作島合作 - twinkle night'}
      credits={['音楽 / somunia様, nyankobrq様, yaca様']}
      about={[
        'ソフトウェア / Blender, After Effects',
        '創作島合作にて投稿した作品になります.',
      ]}
      imagePath={'2024_twinklenight.png'}
      link={'https://youtu.be/1uX3GIQYT_8?si=wXCovtu_Isc3Co5p&t=157'}
      linkMedia={'YouTube'}
    ></ProjectPage>
  );
};

export default Page;
