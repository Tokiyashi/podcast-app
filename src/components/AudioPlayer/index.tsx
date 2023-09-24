'use client'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import React, { useEffect, useState } from 'react'
import { FaBackward, FaForward, FaPause } from 'react-icons/fa'
import { FaCirclePlay } from 'react-icons/fa6'
import { BsRepeat } from 'react-icons/bs'
import { PiShuffleBold } from 'react-icons/pi'

const AudioPlayer = () => {
  const { currentTrack, audioSrc } = useSelector(
    (state: RootState) => state.player
  )

  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement>()
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    currentAudio && currentAudio.pause()

    const newAudio = new Audio(audioSrc)
    setCurrentAudio(newAudio)
    setPaused(false)
    newAudio.play()
  }, [audioSrc])

  function handlePause() {
    currentAudio?.[paused ? 'play' : 'pause']()
    setPaused(!paused)
  }

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
      action: () => {},
      icon: FaForward,
    },
    {
      action: () => {},
      icon: BsRepeat,
    },
  ]

  console.log(currentTrack)

  if (!currentTrack) {
    return <></>
  }

  return (
    <div
      style={{ transform: 'translateX(15%)' }}
      className="p-4 w-3/5 left-0 right-0 m-auto rounded-2xl items-center justify-between flex h-1/6 fixed bottom-5 bg-black-rgba"
    >
      <div className="h-full items-center w-1/3 flex gap-2">
        <img className="h-full rounded-2xl" src={currentTrack?.album?.cover} />
        <div className="flex flex-col">
          <b className="text-2xl">{currentTrack?.title}</b>
          <span className="font-thin text-xl">{currentTrack?.artist.name}</span>
        </div>
      </div>
      <div className="h-1/3 justify-center items-center w-1/3 gap-6 flex">
        {playerButtons.map((item) => (
          <button
            key={item.icon}
            onClick={item.action}
            className="w-full h-full"
          >
            {<item.icon className="w-full h-full" />}
          </button>
        ))}
      </div>
      <div className="h-full justify-center items-center w-1/3 flex">
        like and volume
      </div>
    </div>
  )
}

export default AudioPlayer
