import React from 'react'
import { Track } from '@/common/types/musicItem'

type Props = {
  currentTrack: Track
}
const TrackInfo = ({ currentTrack }: Props) => {
  return (
    <div className="h-full items-center w-1/3 flex gap-2">
      <img className="h-full rounded-2xl" src={currentTrack?.album?.cover} />
      <div className="flex flex-col">
        <b className="text-2xl">{currentTrack?.title}</b>
        <span className="font-thin text-xl">{currentTrack?.artist.name}</span>
      </div>
    </div>
  )
}

export default TrackInfo
