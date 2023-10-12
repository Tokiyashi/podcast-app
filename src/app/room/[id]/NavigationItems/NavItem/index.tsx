import React from 'react';
import Image from 'next/image';
import notes from '@/assets/icons/notes.svg';
import Link from 'next/link';
import { Card, CardFooter } from '@nextui-org/card';

type Props = {
  label: string;
  href: string;
};

const NavItem = ({ label, href }: Props) => {
  return (
    <Link href={href}>
      <Card className="w-32 h-32 bg-card-bg">
        <Image src={notes} alt="notes" className="w-full h-full" />
        <CardFooter className="flex justify-center bg-white">
          <span className="text-black">{label}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NavItem;
