'use client'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import React, { useRef } from 'react'
import Volume from '@/components/AudioPlayer/Volume'
import TrackInfo from '@/components/AudioPlayer/TrackInfo'
import Buttons from './Buttons'
import { useListenPause } from '@/utils/hooks/useListenPause'
import { goToNextTrack } from '@/utils/playerActions/goToNextTrack'

const AudioPlayer = () => {
  const { currentTrack, audioSrc } = useSelector(
    (state: RootState) => state.player
  )

  const audioRef = useRef<HTMLAudioElement>(null)
  useListenPause(audioRef)

  function handleVolumeChange(volume: number) {
    if (!audioRef.current) {
      return
    }
    audioRef.current.volume = volume
  }

  function handleEnded() {
    if (!audioRef.current) {
      return
    }
    goToNextTrack()
  }

  if (!currentTrack) {
    return <></>
  }

  return (
    <div className="p-4 md:w-3/5 w-full md:flex-row flex-col left-0 right-0 m-auto rounded-2xl items-center justify-between flex md:h-1/6 h-2/7 fixed bottom-5 bg-black-rgba">
      <audio
        onEnded={handleEnded}
        autoPlay
        ref={audioRef}
        title="asdasd"
        src={audioSrc}
      />
      <TrackInfo currentTrack={currentTrack} />
      <Buttons audioRef={audioRef} />
      <Volume
        value={Number(audioRef.current?.volume || 0)}
        onChange={handleVolumeChange}
      />
    </div>
  )
}

export default AudioPlayer
