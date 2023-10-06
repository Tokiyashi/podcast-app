import { UploadedTrack } from '@/common/types/musicItem'

export type Room = {
  id: string
  name: string
  allTracks: UploadedTrack[]
  currentTrack: UploadedTrack | null
  queue: UploadedTrack[]
}
