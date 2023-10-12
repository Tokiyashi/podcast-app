import './globals.css';
import { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import CombinedProvider from '@/components/CombinedProvider';
import Header from '@/components/Header';

const scada = Comfortaa({
  subsets: ['cyrillic', 'latin'],
  weight: ['400'],
  variable: '--font-scada',
  display: 'swap',
  style: ['normal'],
});
export const metadata: Metadata = {
  title: 'Tune Town',
  description: 'Your friends and music at the same time!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={scada.className}>
        <CombinedProvider>
          <div className="dark h-screen overflow-hidden w-full flex">
            <Sidebar />
            <div className="flex w-5/6 max-h-screen overflow-hidden relative flex-col">
              <Header />
              <main className="flex w-full flex-col min-h-full overflow-auto h-min p-5">
                {children}
              </main>
            </div>
          </div>
        </CombinedProvider>
      </body>
    </html>
  );
}
