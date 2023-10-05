import { RefObject, useEffect, useState } from 'react';
import { PiShuffleBold } from 'react-icons/pi';
import { FaBackward, FaForward, FaPause } from 'react-icons/fa';
import { FaCirclePlay } from 'react-icons/fa6';
import { BsRepeat } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState, store } from '@/store';
import { setCurrentTrack } from '@/store/slices/playerSlice';
import { goToNextTrack } from '@/utils/playerActions/goToNextTrack';
import { Button } from '@nextui-org/react';
import Timeline from './Timeline';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

const Buttons = ({ audioRef }: Props) => {
  const [paused, setPaused] = useState(false);
  const { audioSrc, currentTrack } = useSelector(
    (state: RootState) => state.player
  );

  function handlePause() {
    if (!audioRef.current) {
      return;
    }

    setPaused(!paused);
    audioRef.current[paused ? 'play' : 'pause']();
    store.dispatch(setCurrentTrack({ ...currentTrack, paused: !paused }));
  }

  function handleFinishTrack() {
    goToNextTrack();
  }

  useEffect(() => {
    setPaused(false);
  }, [audioSrc]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    setPaused(!!currentTrack?.paused);
  }, [currentTrack?.paused]);

  const playerButtons = [
    {
      icon: PiShuffleBold,
      action: () => {},
    },
    {
      icon: FaBackward,
      action: () => {},
    },
    {
      icon: paused ? FaCirclePlay : FaPause,
      action: handlePause,
    },
    {
      action: handleFinishTrack,
      icon: FaForward,
    },
    {
      action: () => {},
      icon: BsRepeat,
    },
  ];

  return (
    <div className="h-full justify-between flex-col items-center w-full md:w-1/3 flex">
      <div className="flex justify-between m-auto h-1/3 overflow-hidden w-5/6">
        {playerButtons.map(item => (
          <Button
            isIconOnly
            key={item.icon}
            className="p-1 h-full w-1/4 "
            radius="full"
            variant="light"
            onClick={item.action}
          >
            {<item.icon className="w-full h-full" />}
          </Button>
        ))}
      </div>
      <Timeline audioRef={audioRef} />
    </div>
  );
};

export default Buttons;
