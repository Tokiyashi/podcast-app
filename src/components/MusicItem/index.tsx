'use client';
import { type Track } from '@/common/types/musicItem';
import { type RootState, store } from '@/store';
import { setCurrentTrack } from '@/store/slices/playerSlice';
import { useSelector } from 'react-redux';
import MoreOptions from './MoreOptions';
import PlayPause from '@/components/MusicItem/PlayPause';
import React from 'react';

type Props = {
  item: Track;
};

const MusicItem = ({ item }: Props) => {
  const play = () =>
    store.dispatch(setCurrentTrack({ ...item, paused: false }));
  const pause = () =>
    store.dispatch(setCurrentTrack({ ...item, paused: true }));

  const { currentTrack } = useSelector((state: RootState) => state.player);
  const isPausedTrack = !!currentTrack?.paused;

  return (
    <div className="gap-2 p-3 max-h-20 hover:border-2 hover:border-main rounded-lg justify-between w-full bg-card-bg flex align-bottom">
      <div className="flex gap-2 max-w-full overflow-hidden">
        <img
          alt="preview"
          className="h-full rounded-md"
          src={item.album.cover}
        />
        <PlayPause
          isPausedTrack={isPausedTrack}
          onPause={pause}
          onPlay={play}
          currentlyOpened={currentTrack?.id === item.id}
        />
        <div className="flex flex-col overflow-hidden">
          <span className="flex-nowrap whitespace-nowrap overflow-hidden text-ellipsis">
            {item.title}
          </span>
          <span className="text-sm">{item.artist.name}</span>
        </div>
      </div>
      <MoreOptions item={item} />
    </div>
  );
};

export default MusicItem;
