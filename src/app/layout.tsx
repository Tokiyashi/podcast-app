import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import AudioPlayer from '@/components/AudioPlayer'
import Sidebar from '@/components/Sidebar'
import CombinedProvider from '@/components/CombinedProvider'

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
    <html lang="en">
      <body className={scada.className}>
        <CombinedProvider>
          <div className="dark w-full h-screen flex">
            <Sidebar />
            <div className="flex w-5/6 max-h-screen overflow-auto relative flex-col">
              <Header />
              <main className="flex w-full flex-col min-h-full  h-min p-5">
                {children}
              </main>
              <AudioPlayer />
            </div>
          </div>
        </CombinedProvider>
      </body>
    </html>
  )
}
