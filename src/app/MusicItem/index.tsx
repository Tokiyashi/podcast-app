'use client'
import { Track } from '@/common/types/musicItem'
import { store } from '@/store'
import { setCurrentTrack } from '@/store/slices/playerSlice'

type Props = {
  item: Track
}

const MusicItem = ({ item }: Props) => {
  const play = () => store.dispatch(setCurrentTrack(item))

  return (
    <div className="gap-2 flex align-bottom">
      <button className="bg-amber-400 p-1 rounded-md" onClick={play}>
        PLAY
      </button>
      <text>{item?.title}</text>
    </div>
  )
}

export default MusicItem
