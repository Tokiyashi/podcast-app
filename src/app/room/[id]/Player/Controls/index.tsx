import React from 'react';
import { Button } from '@nextui-org/react';
import { store } from '@/store';
import { startRoom } from '@/store/slices/roomSlice';
import { setCurrentTrack } from '@/store/slices/playerSlice';

const Controls = () => {
  function handleStartRoom() {
    store.dispatch(startRoom());
    store.dispatch(setCurrentTrack(store.getState().room.room.allTracks[0]));
  }

  return (
    <div>
      <Button onClick={handleStartRoom}>
        Всё готово, начать слушать музыку!
      </Button>
    </div>
  );
};

export default Controls;
