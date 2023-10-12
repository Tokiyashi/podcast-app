'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import UploadedMusicItem from '@/components/UploadedMusicItem';
import AddNewTrack from './AddNewTrack';
import { useIsAdmin } from '@/utils/hooks/useIsRoomAdmin';

const AllTracks = () => {
  const { room } = useSelector((state: RootState) => state.room);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const isAdmin = useIsAdmin();

  return (
    <>
      <h3>Все треки</h3>
      <div className="w-full flex-col p-2 bg-card-bg h-1/5 rounded-2xl overflow-auto flex">
        {room.allTracks.map((item, index) => (
          <UploadedMusicItem item={item} key={index} />
        ))}
        {isAdmin && <AddNewTrack />}
      </div>
    </>
  );
};

export default AllTracks;
