'use client'
import MusicList from '@/components/MusicList'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

const TrackList = () => {
  const { queue } = useSelector((state: RootState) => state.trackList)

  return <MusicList items={queue} />
}

export default TrackList
