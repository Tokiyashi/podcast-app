import React from 'react';
import { Track } from '@/common/types/musicItem';

const getTracks = async () => {
  const res = await fetch(
    'https://deezerdevs-deezer.p.rapidapi.com/search?q=heronwater',
    {
      headers: {
        'X-RapidAPI-Key': '48b8f0b936msh97b95a390bd0e26p1d6778jsn64818bcc169c',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    }
  );
  return res.json();
};

const BrowseMusicPage = async () => {
  const items: { data: Track[] } = await getTracks()

  return (
    <div className='w-full p-6'>
      {/*<MusicList items={items.data} />*/}
    </div>
  )
}

export default BrowseMusicPage
