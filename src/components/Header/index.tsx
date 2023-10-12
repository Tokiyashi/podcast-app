'use client';
import React from 'react';
import { User } from '@nextui-org/user';
import { useSelector } from 'react-redux';
import { RootState, store } from '@/store';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { setUser } from '@/store/slices/userSlice';
import { DEFAULT_USER } from '@/common/constants/defaultUser';

const Header = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <div className="justify-end p-5 flex align-middle">
      {currentUser._id ? (
        <div className="flex gap-4">
          <User name={currentUser.name} />
          <Button
            onClick={() => store.dispatch(setUser(DEFAULT_USER))}
            variant="ghost"
          >
            Выйти
          </Button>
        </div>
      ) : (
        <Link href="/login">Войти</Link>
      )}
    </div>
  );
};

export default Header;
