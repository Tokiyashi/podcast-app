import { Track } from '@/common/types/musicItem'

export type Room = {
  id: string
  name: string
  allTracks: Track[]
  currentTrack: Track | null
  queue: Track[]
}
