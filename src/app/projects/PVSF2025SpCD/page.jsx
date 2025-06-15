'use client';
import ProjectPage from '../../../components/Projects/ProjectPage';
const Page = () => {
  return (
    <ProjectPage
      title={'PVSF2025Sp 告知映像'}
      credits={['音楽 / 逍遥幽霊', '映像 / みつば']}
      about={[
        'ソフトウェア / After Effects, Blender',
        'PVSF2025Sp のカウントダウン映像になります.',
      ]}
      imagePath={'2025_PVSF2025SpCD.webp'}
      link={'https://x.com/PVScreeningFes/status/1905545406731211028'}
      linkMedia={'X(Twitter)'}
    />
  );
};
export default Page;
