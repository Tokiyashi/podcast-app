'use client';

import Buttons from './Buttons';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/6 p-5 min-h-full">
      <h1 className="text-2xl">Tune Town</h1>
      <Buttons />
      {/*<MusicList items={queue} />*/}
    </div>
  );
};

export default Sidebar;
