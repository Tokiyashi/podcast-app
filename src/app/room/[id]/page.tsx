'use client';
import { useParams } from 'next/navigation';
import Player from './Player';
import TrackList from './TrackList';
import React, { useEffect } from 'react';
import { backendUrl } from '@/common/constants/url';
import axios from 'axios';
import { store } from '@/store';
import { setRoom } from '@/store/slices/roomSlice';
import { io } from 'socket.io-client';
import NavigationItems from '@/app/room/[id]/NavigationItems';

const Page = () => {
  const { id } = useParams();

  async function getRoom(id: string) {
    const response = await axios.get(backendUrl + `/rooms/${id}`);
    store.dispatch(setRoom(response.data));
  }

  useEffect(() => {
    void getRoom(id.toString());
  }, [id]);

  useEffect(() => {
    const socket = io('http://localhost:9090');

    socket.on('connect', () => {
      socket.emit('join room', 'room1');
    });

    socket.on('update room', newValue => {
      if (!newValue) {
        return;
      }
      store.dispatch(setRoom(newValue));
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, [id]);

  return (
    <div className="min-h-full h-min flex flex-col gap-5 justify-start">
      <div className="gap-3 flex h-3/5">
        <Player />
        <TrackList />
      </div>
      <NavigationItems />
    </div>
  );
};

export default Page;
