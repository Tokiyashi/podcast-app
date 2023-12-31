'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import UploadedMusicItem from '@/components/UploadedMusicItem';
import AddNewTrack from './AddNewTrack';
import { useIsAdmin } from '@/utils/hooks/useIsRoomAdmin';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { room } = useSelector((state: RootState) => state.room);
  const isAdmin = useIsAdmin();
  const router = useRouter();

  return (
    <div className="flex h-full w-full gap-3 flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">Все треки</h3>
        <Button onClick={() => router.back()}>Вернуться Назад</Button>
      </div>
      <div className="flex h-full flex-col justify-between">
        <div className="w-full flex-col p-2 gap-3 h-full rounded-2xl overflow-auto flex">
          {room.allTracks.map((item, index) => (
            <UploadedMusicItem item={item} key={index} />
          ))}
        </div>
        {isAdmin && <AddNewTrack />}
      </div>
    </div>
  );
};

export default Page;
