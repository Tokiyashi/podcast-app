'use client';
import { Button } from '@nextui-org/react';
import { backendUrl } from '@/common/constants/url';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Room = () => {
  const router = useRouter();

  async function handleCreateRoom() {
    const request = await axios.post(backendUrl + '/rooms', {
      name: 'Best Room',
    });
    const { _id } = request.data;
    router.push(`/room/${_id}`);
  }

  // const test = () => {
  //   console.log('123')
  //   socket.emit('message', {
  //     text: '123123',
  //     name: 'name',
  //   })
  // }
  //
  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true)
  //   }
  //
  //   function onDisconnect() {
  //     setIsConnected(false)
  //   }
  //
  //   socket.on('connect', onConnect)
  //   socket.on('disconnect', onDisconnect)
  //
  //   return () => {
  //     socket.off('connect', onConnect)
  //     socket.off('disconnect', onDisconnect)
  //   }
  // }, [socket])

  return (
    <div className="h-full w-full flex justify-center items-center gap-5">
      <div className="w-2/3 flex items-center justify-center gap-6  ">
        <Button className="w-1/2" onClick={handleCreateRoom}>
          <h2> Create new </h2>
        </Button>
        or
        <Button className="w-1/2">
          <h2> Connect to existing one </h2>
        </Button>
      </div>
    </div>
  );
};

export default Room;
