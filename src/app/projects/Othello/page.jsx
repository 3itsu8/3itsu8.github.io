'use client';
import ProjectPage from '../../../components/Projects/ProjectPage';
const Page = () => {
  return (
    <ProjectPage
      title={'Othello'}
      credits={['映像 / みつば']}
      about={[
        'ソフトウェア / Blender, After Effects',
        'オセロをモチーフにしたモーショングラフィクス作品です.',
      ]}
      imagePath={'2024_Othello.png'}
      link={'https://x.com/3itsu8/status/1822951166063554767'}
      linkMedia={'X(Twitter)'}
    />
  );
};

export default Page;
