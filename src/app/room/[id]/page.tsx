'use client'
import { useParams } from 'next/navigation'
import Player from './Player'
import TrackList from './TrackList'
import { useEffect } from 'react'
import { backendUrl } from '@/common/constants/url'
import axios from 'axios'
import { RootState, store } from '@/store'
import { setRoom } from '@/store/slices/roomSlice'
import { useSelector } from 'react-redux'

const Page = () => {
  const { id } = useParams()
  const { room } = useSelector((state: RootState) => state.room)

  async function getRoom(id: string) {
    const response = await axios.get(backendUrl + `/rooms/${id}`)
    console.log(response.data)
    store.dispatch(setRoom(response.data))
  }

  useEffect(() => {
    void getRoom(id.toString())
  }, [id])

  return (
    <div className="h-full gap-3 flex">
      {room.name}
      <Player />
      <TrackList />
    </div>
  )
}

export default Page
