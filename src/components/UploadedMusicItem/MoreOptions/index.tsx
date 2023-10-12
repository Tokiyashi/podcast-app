'use client';

import { FiMoreVertical } from 'react-icons/fi';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { store } from '@/store';
import { UploadedTrack } from '@/common/types/musicItem';
import React from 'react';
import { updateRoom } from '@/api/room';

type Props = {
  item: UploadedTrack;
};

const MoreOptions = ({ item }: Props) => {
  const addInQueue = async () => {
    const { room } = store.getState().room;

    await updateRoom({ ...room, trackQueue: [...room?.trackQueue, item] });
  };

  return (
    <div className="min-h-full flex w-1/12">
      {/*<AiFillLike className="h-full w-full" />*/}
      <Popover placement="right-start">
        <PopoverTrigger>
          <button>
            <FiMoreVertical className="h-full w-full" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-card-bg p-0 rounded-2xl">
          <div className="bg-card-bg">
            <div className="text-small font-bold">Действия</div>
            <Button onClick={addInQueue} radius="none">
              Добавить в очередь
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MoreOptions;
