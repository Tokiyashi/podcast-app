import React from 'react';
import NavItem from '@/app/room/[id]/NavigationItems/NavItem';
import { useParams } from 'next/navigation';

const NavigationItems = () => {
  const { id } = useParams();

  return (
    <div className="flex w-full">
      <NavItem label="Все треки" href={`./${id}/all-tracks`} />
    </div>
  );
};

export default NavigationItems;
