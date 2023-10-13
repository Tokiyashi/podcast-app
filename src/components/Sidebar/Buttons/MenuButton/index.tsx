'use client';
import Link from 'next/link';
import React from 'react';

type Props = {
  item: { label: string; href: string };
};
const MenuButton = ({ item }: Props) => {
  const { label, href } = item;

  return (
    <Link href={href}>
      <div className="w-full h-min flex hover:bg-dark-main rounded-2xl p-6">
        <span className="">{label}</span>
      </div>
    </Link>
  );
};

export default MenuButton;
