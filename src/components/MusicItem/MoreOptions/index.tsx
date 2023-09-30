'use client'

import { FiMoreVertical } from 'react-icons/fi'
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react'
import { store } from '@/store'
import { addNewTrack } from '@/store/slices/trackListSlice'
import { Track } from '@/common/types/musicItem'

type Props = {
  item: Track
}

const MoreOptions = ({ item }: Props) => {
  const addInQueue = () => store.dispatch(addNewTrack(item))

  return (
    <div className="min-h-full flex w-1/12">
      {/*<AiFillLike className="h-full w-full" />*/}
      <Popover placement="right-start">
        <PopoverTrigger>
          <button>
            <FiMoreVertical className="h-full w-full" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-card-bg p-0 rounded-2xl">
          <div className="bg-card-bg">
            <div className="text-small font-bold">Actions</div>
            <Button onClick={addInQueue} radius="none">
              Add in queque
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default MoreOptions
