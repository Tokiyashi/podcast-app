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
import { io } from 'socket.io-client'

const Page = () => {
  const { id } = useParams()
  const { room } = useSelector((state: RootState) => state.room)

  async function getRoom(id: string) {
    const response = await axios.get(backendUrl + `/rooms/${id}`)
    store.dispatch(setRoom(response.data))
  }

  useEffect(() => {
    void getRoom(id.toString())
  }, [id])

  useEffect(() => {
    const socket = io('http://localhost:9090')

    socket.on('connect', () => {
      console.log('Подключено к серверу')
      socket.emit('join room', 'room1')
    })

    socket.on('update room', (newValue) => {
      console.log('Получено сообщение:', newValue)
      if (!newValue) {
        return
      }
      store.dispatch(setRoom(newValue))
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [id])

  return (
    <div className="h-full gap-3 flex">
      <Player />
      <TrackList />
    </div>
  )
}

export default Page
