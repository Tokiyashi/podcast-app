'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { RootState, store } from '@/store';
import { startRoom } from '@/store/slices/roomSlice';
import { setCurrentTrack } from '@/store/slices/playerSlice';
import { useIsAdmin } from '@/utils/hooks/useIsRoomAdmin';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Controls = () => {
  const { room } = useSelector((state: RootState) => state.room);

  async function handleStartRoom() {
    store.dispatch(startRoom());
    store.dispatch(setCurrentTrack(store.getState().room.room.allTracks[0]));
  }

  const hasTrackList = room.allTracks.length > 0;

  const isAdmin = useIsAdmin();

  return (
    <div>
      {hasTrackList ? (
        <div>
          {isAdmin && (
            <Button onClick={handleStartRoom}>
              Всё готово, начать слушать музыку!
            </Button>
          )}
        </div>
      ) : (
        <Link href={`./${room._id}/all-tracks`}>
          Для начала загрузите хотя бы один трек!
        </Link>
      )}
    </div>
  );
};

export default Controls;
