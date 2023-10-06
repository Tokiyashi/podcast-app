import React from 'react';
import { UploadedTrack } from '@/common/types/musicItem';

type Props = {
  item: UploadedTrack;
};

const UploadedMusicItem = ({ item }: Props) => {
  return (
    <div className="gap-2 p-3 max-h-20 rounded-lg justify-between w-full bg-card-bg flex align-bottom">
      <div className="flex flex-col overflow-hidden">
        <span className="flex-nowrap whitespace-nowrap overflow-hidden text-ellipsis">
          {item.title}
        </span>
        <span className="text-sm">{item?.artistName}</span>
      </div>
    </div>
  );
};

export default UploadedMusicItem;
