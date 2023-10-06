import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import axios from 'axios'
import { backendUrl } from '@/common/constants/url'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Input } from '@nextui-org/input'
import { wrapTextInput } from '@/utils/inputWrappers'

const AddNewTrack = () => {
  const { room } = useSelector((state: RootState) => state.room)
  const [search, setSearch] = useState('')

  async function handleAddTrack() {
    const res = await fetch(
      'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + search,
      {
        headers: {
          'X-RapidAPI-Key':
            '48b8f0b936msh97b95a390bd0e26p1d6778jsn64818bcc169c',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        },
      }
    )
    const newtrack = await res.json()
    console.log(newtrack.data[0])
    await axios.put(backendUrl + '/rooms', {
      ...room,
      allTracks: [
        ...room?.allTracks,
        {
          url: newtrack.data[0].preview,
          artistName: newtrack.data[0].artist.name,
          title: newtrack.data[0].title,
        },
      ],
    })
  }

  return (
    <div className="flex">
      <Input value={search} onChange={wrapTextInput(setSearch)} />
      <Button onClick={handleAddTrack}>Add new track</Button>
    </div>
  )
}

export default AddNewTrack
