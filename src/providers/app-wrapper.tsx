'use client';

import { ReactNode } from 'react';

import { AppControl } from '../components/layout/app-control';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision.tsx';
import { useAppBackground } from '@/providers/app-background-provider';
import { AppBackgroundEnum } from '@/types';
import { BackgroundLines } from '@/components/ui/background-lines';

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
