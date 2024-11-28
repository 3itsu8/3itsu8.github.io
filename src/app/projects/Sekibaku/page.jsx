'use client';
import ProjectPage from '../../../components/Projects/ProjectPage';
const Page = () => {
  return (
    <ProjectPage
      title={'PVSF2023Sp 稲葉曇 - ハルノ寂寞'}
      credits={['音楽 / 稲葉曇様', 'MMDモデル / Serre様, Priod_0906様']}
      about={[
        'ソフトウェア / Blender, AviUtl, Davinci Resolve',
        'PVSF2023Spにて投稿した, 楽曲「ハルノ寂寞」の二次創作MVになります',
      ]}
      imagePath={'2023_Sekibaku.png'}
      link={'https://www.youtube.com/watch?v=wQjTWwEB6RU'}
      linkMedia={'YouTube'}
    ></ProjectPage>
  );
};

export default Page;
