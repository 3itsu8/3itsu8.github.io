'use client';
import ProjectPage from '../../../components/Projects/ProjectPage';
const Page = () => {
  return (
    <ProjectPage
      title={'Happy New Year 2025!'}
      credits={['映像 / みつば']}
      about={[
        'ソフトウェア / After Effects, illustrator',
        '2025年のあいさつ映像になります.',
      ]}
      imagePath={'2025_NewYear2025.webp'}
      link={'https://x.com/3itsu8/status/1874108399782420623'}
      linkMedia={'X(Twitter)'}
    />
  );
};
export default Page;
