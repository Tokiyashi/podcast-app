'use client';

import Buttons from './Buttons';
import React from 'react';
import AudioPlayer from '@/components/AudioPlayer';

const Sidebar = () => {
  return (
    <div className="w-1/6 p-5 flex flex-col justify-between min-h-full">
      <div>
        <h1 className="text-2xl">Tune Town</h1>
        <Buttons />
      </div>
      <AudioPlayer />
    </div>
  );
};

export default Sidebar;
