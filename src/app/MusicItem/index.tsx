'use client'
import { Track } from '@/common/types/musicItem'
import { store } from '@/store'
import { setCurrentTrack } from '@/store/slices/playerSlice'
import { FiMoreVertical } from 'react-icons/fi'
import { AiFillLike } from 'react-icons/ai'
import { FaCirclePlay } from 'react-icons/fa6'

type Props = {
  item: Track
}

const MusicItem = ({ item }: Props) => {
  const play = () => store.dispatch(setCurrentTrack(item))
  console.log(item)

  return (
    <div className="gap-2 p-3 max-h-20 hover:border-2 hover:border-main rounded-lg justify-between w-1/3 bg-card-bg flex align-bottom">
      <div className="flex gap-2 max-w-full overflow-hidden">
        <img
          alt="preview"
          className="h-full rounded-md"
          src={item.album.cover}
        />
        <button className="w-12 hover:opacity-40 p-1 rounded-md" onClick={play}>
          <FaCirclePlay className="h-full fill-main w-full" />
        </button>
        <div className="flex flex-col overflow-hidden">
          <text className="flex-nowrap whitespace-nowrap overflow-hidden text-ellipsis">
            {item.title}
          </text>
          <text className="text-sm">{item.artist.name}</text>
        </div>
      </div>
      <div className="min-h-full flex w-1/12">
        <AiFillLike className="h-full w-full" />
        <FiMoreVertical className="h-full w-full" />
      </div>
    </div>
  )
}

export default MusicItem
