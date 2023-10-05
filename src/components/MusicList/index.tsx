import React from 'react';
import { Track } from '@/common/types/musicItem';
import MusicItem from '@/components/MusicItem';

type Props = {
  items: Track[];
};

const MusicList = ({ items }: Props) => {
  return (
    <div className="w-full overflow-auto flex pb-60 justify-start items-center flex-col gap-2">
      {items?.map(item => <MusicItem key={item.id} item={item} />)}
    </div>
  );
};

export default MusicList;
