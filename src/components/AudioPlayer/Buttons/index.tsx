import { RefObject, useEffect, useState } from 'react'
import { PiShuffleBold } from 'react-icons/pi'
import { FaBackward, FaForward, FaPause } from 'react-icons/fa'
import { FaCirclePlay } from 'react-icons/fa6'
import { BsRepeat } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { RootState, store } from '@/store'
import { setCurrentTrack } from '@/store/slices/playerSlice'
import { goToNextTrack } from '@/utils/playerActions/goToNextTrack'

type Props = {
  audioRef: RefObject<HTMLAudioElement>
}

const Buttons = ({ audioRef }: Props) => {
  const [paused, setPaused] = useState(false)
  const { audioSrc, currentTrack } = useSelector(
    (state: RootState) => state.player
  )

  function handlePause() {
    if (!audioRef.current) {
      return
    }

    setPaused(!paused)
    audioRef.current[paused ? 'play' : 'pause']()
    store.dispatch(setCurrentTrack({ ...currentTrack, paused: !paused }))
  }

  function handleFinishTrack() {
    goToNextTrack()
  }

  useEffect(() => {
    setPaused(false)
  }, [audioSrc])

  useEffect(() => {
    if (!audioRef.current) {
      return
    }
    setPaused(!!currentTrack?.paused)
  }, [currentTrack?.paused])

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
  ]

  return (
    <div className="h-1/3 justify-center items-center w-1/3 gap-6 flex">
      {playerButtons.map((item) => (
        <button key={item.icon} onClick={item.action} className="w-full h-full">
          {<item.icon className="w-full h-full" />}
        </button>
      ))}
    </div>
  )
}

export default Buttons
