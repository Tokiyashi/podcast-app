import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import StoreProvider from '@/store/storeProvider'
import AudioPlayer from '@/components/AudioPlayer'

const scada = Comfortaa({
  subsets: ['cyrillic', 'latin'],
  weight: ['400'],
  variable: '--font-scada',
  display: 'swap',
  style: ['normal'],
})
export const metadata: Metadata = {
  title: 'Tune Town',
  description: 'Your friends and music ath the same time!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={scada.className}>
          <Header />
          {children}
          <AudioPlayer />
        </body>
      </html>
    </StoreProvider>
  )
}
