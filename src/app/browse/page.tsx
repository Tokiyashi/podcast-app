import MusicItem from '@/app/MusicItem'
import React from 'react'
import { Track } from '@/common/types/musicItem'

const getTracks = async () => {
  const res = await fetch(
    'https://deezerdevs-deezer.p.rapidapi.com/search?q=heronwater',
    {
      headers: {
        'X-RapidAPI-Key': '48b8f0b936msh97b95a390bd0e26p1d6778jsn64818bcc169c',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    }
  )
  return res.json()
}

const BrowseMusicPage = async () => {
  const items: { data: Track[] } = await getTracks()

  return (
    <div className="w-full overflow-auto flex pb-60 justify-start items-center flex-col gap-2">
      {items.data.map((item) => (
        <MusicItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default BrowseMusicPage
