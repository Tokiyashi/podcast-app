import React from 'react'
import { Track } from '@/common/types/musicItem'
import MusicItem from '@/app/MusicItem'

const getTracks = async () => {
  const res = await fetch(
    'https://deezerdevs-deezer.p.rapidapi.com/search?q=toxi$',
    {
      headers: {
        'X-RapidAPI-Key': '48b8f0b936msh97b95a390bd0e26p1d6778jsn64818bcc169c',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    }
  )
  return res.json()
}

export default async function Home() {
  const items: { data: Track[] } = await getTracks()

  return (
    <main>
      <div className="flex flex-col gap-2">
        {items.data.map((item) => (
          <MusicItem item={item} />
        ))}
      </div>
    </main>
  )
}
