import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Controls from './Controls';

const Player = () => {
  const { room } = useSelector((state: RootState) => state.room);
  const { currentTrack } = useSelector((state: RootState) => state.player);

  return (
    <div className="items-center rounded-2xl bg-card-bg flex flex-col justify-center h-2/3 w-2/3">
      <span>{room.name}</span>
      <h2 className="text-7xl">{currentTrack?.title}</h2>
      <h3 className="text-5xl">{currentTrack?.artistName}</h3>
      <Controls />
    </div>
  );
};

export default Player;
