import React from 'react';
import { Room } from '@/common/types/room';
import Link from 'next/link';

type Props = {
  item: Room;
};

const RoomItem = ({ item }: Props) => {
  return (
    <div className="gap-2 p-3 max-h-20 rounded-lg justify-between w-full bg-card-bg flex align-bottom">
      {item.name}
      <Link href={'/room/' + item._id}>Перейти</Link>
    </div>
  );
};

export default RoomItem;
