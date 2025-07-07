'use client';

import { ReactNode } from 'react';

import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision.tsx';
import { AppControl } from '../components/ui/app-control';
import { BackgroundLines } from '@/components/ui/background-lines';
import { useAppBackground } from '@/providers/app-background-provider';
import { AppBackgroundEnum } from '@/types';

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const { appBackground } = useAppBackground();

  return (
    <>
      <AppControl />
      {appBackground === AppBackgroundEnum.lines ? (
        <BackgroundLines>{children}</BackgroundLines>
      ) : (
        <BackgroundBeamsWithCollision>{children}</BackgroundBeamsWithCollision>
      )}
    </>
  );
};
