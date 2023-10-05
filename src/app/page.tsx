import React from 'react';
import Link from 'next/link';

export default async function Home() {
  return (
    <div>
      <Link href="/browse">Start browsing music!</Link>
    </div>
  );
}
