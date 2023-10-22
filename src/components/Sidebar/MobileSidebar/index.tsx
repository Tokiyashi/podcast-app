'use client';

import React, { useState } from 'react';
import Buttons from '@/components/Sidebar/Buttons';
import AudioPlayer from '@/components/AudioPlayer';
import { Button } from '@nextui-org/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

const MobileSidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-min md:hidden inline">
      <Button
        onClick={() => {
          console.log('123');
          setShow(show => !show);
        }}
      >
        {show ? (
          <AiFillCloseCircle className="w-full h-full flex" />
        ) : (
          <GiHamburgerMenu className="w-full h-full flex" />
        )}
      </Button>
      {show && (
        <div className="w-screen md:flex max-h-screen p-5 flex flex-col justify-between min-h-full">
          <div>
            <h1 className="text-2xl">Tune Town</h1>
            <Buttons />
          </div>
          <AudioPlayer />
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
