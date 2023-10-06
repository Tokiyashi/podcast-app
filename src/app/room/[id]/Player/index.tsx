import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Controls from './Controls'

const Player = () => {
  const { room } = useSelector((state: RootState) => state.room)

  return (
    <div className="items-center rounded-2xl bg-card-bg flex justify-center h-2/3 w-2/3">
      {room.name}
      <Controls />
    </div>
  )
}

export default Player
