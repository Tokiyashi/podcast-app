'use client';

import React from 'react';
import StoreProvider from '@/store/storeProvider';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/system';
import { useIsLoggedUser } from '@/utils/hooks/useIsLoggedUser';

const CombinedProvider = ({ children }: { children: React.ReactNode }) => {
  useIsLoggedUser();

  return (
    <StoreProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default CombinedProvider;
