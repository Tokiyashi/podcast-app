import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const Player = () => {
  const { room } = useSelector((state: RootState) => state.room)

  return <div className="bg-red-500 h-2/3 w-2/3">{room.name}</div>
}

export default Player
