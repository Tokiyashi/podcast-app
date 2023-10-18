'use client';
import React, { ReactNode, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState, store } from '@/store';
import axios from 'axios';
import { backendUrl, webSocketUrl } from '@/common/constants/url';
import { getRoom } from '@/store/slices/roomSlice';
import { io } from 'socket.io-client';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { id } = useParams();
  const { currentUser } = useSelector((state: RootState) => state.user);

  async function fetchRoom(id: string) {
    const response = await axios.get(backendUrl + `/rooms/${id}`);
    store.dispatch(getRoom(response.data));
  }

  useEffect(() => {
    void fetchRoom(id.toString());
  }, [id]);

  useEffect(() => {
    if (!currentUser._id) {
      return;
    }

    const socket = io(webSocketUrl);
    socket.on('connect', () => {
      socket.emit('join room', {
        roomId: id.toString(),
        userName: currentUser.name,
        userId: currentUser._id,
      });
    });

    socket.on('update room', newValue => {
      if (!newValue) {
        return;
      }
      store.dispatch(getRoom(newValue));
    });

    // window.addEventListener('beforeunload', ev => {
    //   ev.preventDefault();
    //   socket.emit('leave room', {
    //     roomId: id.toString(),
    //     userId: currentUser._id,
    //   });
    // });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.emit('leave room', {
        roomId: id.toString(),
        userId: currentUser._id,
      });
    };
  }, [id, currentUser._id]);

  return <>{children}</>;
};

export default Layout;
