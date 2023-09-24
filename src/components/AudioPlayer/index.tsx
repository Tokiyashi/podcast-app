'use client'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useEffect, useState } from 'react'

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

  return (
    <div className="p-6 w-full flex-col items-center justify-items-start flex h-1/6 fixed bottom-1 opacity-50 bg-black">
      <div className="h-5 flex">
        <b>{currentTrack?.title}</b>
      </div>
      {paused ? (
        <button onClick={handlePause}>play</button>
      ) : (
        <button onClick={handlePause}>pause</button>
      )}
    </div>
  )
}

export default AudioPlayer
