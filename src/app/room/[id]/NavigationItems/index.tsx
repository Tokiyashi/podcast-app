import React from 'react';
import NavItem from '@/app/room/[id]/NavigationItems/NavItem';
import { useParams } from 'next/navigation';

const NavigationItems = () => {
  const { id } = useParams();

  return (
    <div className="flex w-2/3">
      <NavItem label="Все треки" href={`./room/${id}/all-tracks`} />
    </div>
  );
};

export default NavigationItems;
