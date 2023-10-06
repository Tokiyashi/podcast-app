import React from 'react'
import { UploadedTrack } from '@/common/types/musicItem';
import UploadedMusicItem from '@/components/UploadedMusicItem';

type Props = {
  items: UploadedTrack[]
}

const MusicList = ({ items }: Props) => {
  return (
    <div className="w-full border-main rounded-2xl p-2 border-1 overflow-auto h-min flex pb-60 justify-start items-center flex-col gap-2">
      {items?.map((item, index) => (
        <UploadedMusicItem key={index} item={item} />
      ))}
    </div>
  );
};

export default MusicList;
