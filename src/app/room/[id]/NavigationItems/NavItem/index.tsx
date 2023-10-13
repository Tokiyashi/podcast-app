import React from 'react';
import Image from 'next/image';
import notes from '@/assets/icons/notes.svg';
import Link from 'next/link';
import { Card, CardFooter } from '@nextui-org/card';
import { Badge } from '@nextui-org/badge';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { Tooltip } from '@nextui-org/react';

type Props = {
  label: string;
  href: string;
};

const NavItem = ({ label, href }: Props) => {
  const { room } = useSelector((state: RootState) => state.room);

  return (
    <Link href={href}>
      <Badge
        content={room.allTracks.length}
        title="Треков загружено сейчас"
        className="p-4"
        color="primary"
      >
        <Tooltip content="Список из всех треков которые были загружены в эту комнату">
          <Card className="w-32 hover:scale-110 h-32 bg-card-bg">
            <Image src={notes} alt="notes" className="w-full h-full" />
            <CardFooter className="flex justify-center bg-white">
              <span className="text-black">{label}</span>
            </CardFooter>
          </Card>
        </Tooltip>
      </Badge>
    </Link>
  );
};

export default NavItem;
