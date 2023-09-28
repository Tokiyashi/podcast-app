'use client'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import React, { useRef } from 'react'
import Volume from '@/components/AudioPlayer/Volume'
import TrackInfo from '@/components/AudioPlayer/TrackInfo'
import Buttons from './Buttons'

const AudioPlayer = () => {
  const { currentTrack, audioSrc } = useSelector(
    (state: RootState) => state.player
  )

  const audioRef = useRef<HTMLAudioElement>(null)

  if (!currentTrack) {
    return <></>
  }

  function handleVolumeChange(volume: number) {
    if (!audioRef.current) {
      return
    }
    audioRef.current.volume = volume
  }

  return (
    <div
      style={{ transform: 'translateX(15%)' }}
      className="p-4 w-3/5 left-0 right-0 m-auto rounded-2xl items-center justify-between flex h-1/6 fixed bottom-5 bg-black-rgba"
    >
      <audio autoPlay ref={audioRef} title="asdasd" src={audioSrc} />
      <TrackInfo currentTrack={currentTrack} />
      <Buttons audioRef={audioRef} />
      <Volume
        value={Number(audioRef.current?.volume)}
        onChange={handleVolumeChange}
      />
    </div>
  )
}

export default AudioPlayer
