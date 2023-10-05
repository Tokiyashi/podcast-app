import React, { RefObject, useEffect, useState } from 'react';
import { Progress } from '@nextui-org/react';
import { convertToMinutes } from '@/utils/convertToMinutes';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

const Timeline = ({ audioRef }: Props) => {
  const [currentTimeProgress, setCurrentTimeProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      if (!audioRef.current) {
        return;
      }

      const timeProgress =
        (audioRef.current?.currentTime / audioRef.current?.duration) * 100;
      setCurrentTimeProgress(timeProgress);
      setCurrentTime(audioRef.current?.currentTime);
    }, 100);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Progress
        aria-label="Music progress"
        classNames={{
          indicator: 'bg-default-800 dark:bg-white cursor-pointer',
          track: 'bg-default-500/30',
          value: 'bg-main-500 dark:bg-white',
        }}
        color="default"
        size="sm"
        value={currentTimeProgress}
      />
      <div className="w-full flex justify-between">
        <h3>{convertToMinutes(currentTime)}</h3>
        <h3>{convertToMinutes(audioRef.current?.duration || 0)}</h3>
      </div>
    </div>
  );
};

export default Timeline;
