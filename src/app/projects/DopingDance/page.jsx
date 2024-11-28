'use client';
import ProjectPage from '../../../components/Projects/ProjectPage';
const Page = () => {
  return (
    <ProjectPage
      title={'【二次創作MV】ドーピングダンス'}
      credits={['音楽 / STEAKA様']}
      about={[
        'ソフトウェア / Blender, AviUtl',
        'STEAKA様の楽曲「ドーピングダンス」をお借りして, 二次創作MVを作成しました.',
      ]}
      imagePath={'2023_DopingDance.png'}
      link={'https://twitter.com/3itsu8/status/1651192127291031557'}
      linkMedia={'X(Twitter)'}
    />
  );
};

export default Page;
