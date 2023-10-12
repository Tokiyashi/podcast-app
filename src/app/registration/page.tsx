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

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  async function handleSubmit() {
    const result = await axios.post(backendUrl + '/users', {
      name,
      email,
      password,
    });

    setEmail('');
    setPassword('');
    store.dispatch(setUser(result.data));
    router.push('/room');
  }

  return (
    <div className="h-full flex items-center gap-7 flex-col">
      <h1 className="text-4xl">Авторизация</h1>
      <form onSubmit={handleSubmit} className="w-1/3 flex gap-5 flex-col">
        <label className="text-xl">
          Имя
          <Input value={name} onChange={wrapTextInput(setName)} type="email" />
        </label>
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
        <Button onClick={handleSubmit}>Создать чела</Button>
        <div className="flex gap-4">
          Уже есть чел?<Link href="../login">Войти</Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
