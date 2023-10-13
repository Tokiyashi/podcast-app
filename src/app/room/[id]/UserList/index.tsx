import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import UserItem from '@/app/room/[id]/UserList/UserItem';

const UserList = () => {
  const { room } = useSelector((state: RootState) => state.room);

  return (
    <div className="w-1/3 flex flex-col gap-3">
      <h3>Сейчас слушают:</h3>
      {room?.usersOnline.map(user => <UserItem key={user.id} item={user} />)}
    </div>
  );
};

export default UserList;
