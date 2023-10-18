'use client';
import { Button } from '@nextui-org/react';
import { backendUrl } from '@/common/constants/url';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import theBandParty from '@/assets/icons/The Band Party.svg';
import theBandMusician from '@/assets/icons/The Band Musicians.svg';
import Image from 'next/image';

const Room = () => {
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.user);

  async function handleCreateRoom() {
    const request = await axios.post(backendUrl + '/rooms', {
      name: 'nikitaAmazingRoom',
      creatorId: currentUser?._id,
    });
    const { _id } = request.data;
    router.push(`/room/${_id}`);
  }

  return (
    <div className="h-full w-full flex justify-center items-start gap-5">
      <div className="w-2/3 flex items-center justify-center gap-6 p-10">
        <div className="flex flex-col gap-4 bg-card-bg rounded-2xl p-10">
          <Image alt="Band" src={theBandParty} className="rounded-2xl" />
          <Button className="w-full" onClick={handleCreateRoom}>
            <h2> Создать новую комнату </h2>
          </Button>
        </div>
        или
        <div className="flex flex-col gap-4 bg-card-bg rounded-2xl p-10">
          <Image alt="Band" src={theBandMusician} className="rounded-2xl" />
          <Button className="w-full" onClick={handleCreateRoom}>
            <h2> Присоединиться к существующей комнате </h2>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Room
