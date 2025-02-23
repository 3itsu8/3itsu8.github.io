'use client';
import ProjectPage from '../../../components/Projects/ProjectPage';
const Page = () => {
  return (
    <ProjectPage
      title={'【二次創作MV】ロスト・サマー'}
      credits={[
        '音楽 / 小林オニキス様',
        '歌詞 / はな様',
        'MMDモデル / Serre様, Priod_0906様,雪原 葵様',
      ]}
      about={[
        'ソフトウェア / Blender, AviUtl, Davinci Resolve',
        '小林オニキス様の楽曲「ロスト・サマー」をお借りして, 二次創作MVを作成しました.',
      ]}
      imagePath={'2022_LostSummer.webp'}
      link={'https://www.youtube.com/watch?v=mNKpsNXFSJk'}
      linkMedia={'YouTube'}
    />
  );
};

export default Page;
