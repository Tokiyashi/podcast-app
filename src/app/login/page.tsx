'use client';
import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';
import { wrapTextInput } from '@/utils/inputWrappers';
import axios from 'axios';
import { backendUrl } from '@/common/constants/url';
import { store } from '@/store';
import { setUser } from '@/store/slices/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit() {
    const result = await axios.post(backendUrl + '/users/login', {
      email,
      password,
    });

    setEmail('');
    setPassword('');
    store.dispatch(setUser(result.data));
    setCookie('userId', result.data._id);
    router.push('/room');
  }

  return (
    <div className="h-full flex items-center gap-7 flex-col">
      <h1 className="text-4xl">Авторизация</h1>
      <form onSubmit={handleSubmit} className="w-1/3 flex gap-5 flex-col">
        <label className="text-xl">
          Адрес электронной почты
          <Input
            value={email}
            onChange={wrapTextInput(setEmail)}
            type="email"
          />
        </label>
        <label className="text-xl">
          Пароль
          <Input
            value={password}
            onChange={wrapTextInput(setPassword)}
            type="password"
          />
        </label>
        <Button onClick={handleSubmit}>Войти</Button>
        <Link href="../registration">Создать чела</Link>
      </form>
    </div>
  );
};

export default Page
