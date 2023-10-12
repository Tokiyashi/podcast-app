import React from 'react';
import { User } from '@/common/types/user';

type Props = {
  item: User;
};

const UserItem = ({ item }: Props) => {
  return <div>{item.name}</div>;
};

export default UserItem;
