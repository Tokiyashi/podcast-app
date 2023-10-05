import { BsFillPauseCircleFill } from 'react-icons/bs';
import { FaCirclePlay } from 'react-icons/fa6';
import React from 'react';

type Props = {
  onPlay: () => void;
  onPause: () => void;
  isPausedTrack: boolean;
  currentlyOpened: boolean;
};
const PlayPause = ({
  currentlyOpened,
  onPlay,
  onPause,
  isPausedTrack,
}: Props) => {
  return currentlyOpened && !isPausedTrack ? (
    <button className="w-12 hover:opacity-40 p-1 rounded-md" onClick={onPause}>
      <BsFillPauseCircleFill className="h-full fill-main w-full" />
    </button>
  ) : (
    <button className="w-12 hover:opacity-40 p-1 rounded-md" onClick={onPlay}>
      <FaCirclePlay className="h-full fill-main w-full" />
    </button>
  );
};

export default PlayPause;
