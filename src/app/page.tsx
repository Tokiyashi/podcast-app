import React from 'react'
import Link from 'next/link'

export default async function Home() {
  return (
    <main>
      <Link href="/browse">Start browsing music!</Link>
    </main>
  )
}
