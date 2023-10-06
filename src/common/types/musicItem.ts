export type Track = {
  id: string
  title: string
  preview: string
  duration: number
  album: {
    cover: string
  }
  artist: {
    name: string
  }
  paused?: boolean
}

export type UploadedTrack = {
  id: string
  title: string
  url: string
  duration: number
  artistName: string
}
