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
}
