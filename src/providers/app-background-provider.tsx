"use client";

import { ReactNode, useState, createContext, useContext, useEffect } from "react";

import { AppBackgroundEnum } from "@/types";

interface AppBagContextInterface {
  appBackground: AppBackgroundEnum;
  setAppBackground: (bg: AppBackgroundEnum) => void;
}

const AppBackgroundContext = createContext<AppBagContextInterface | null>(null);

export const useAppBackground = () => {
  const context = useContext(AppBackgroundContext);

  if (!context) {
    throw new Error("useBackground must be used within BackgroundProvider");
  }

  return context;
};

export const AppBackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [appBackground, setAppBackground] = useState<AppBackgroundEnum>(AppBackgroundEnum.lines);

  useEffect(() => {
    const storedBg = localStorage.getItem('app-background') as AppBackgroundEnum
    return storedBg ? setAppBackground(storedBg) : setAppBackground(AppBackgroundEnum.lines)
  }, [])

  return (
    <AppBackgroundContext.Provider value={{ appBackground, setAppBackground }}>
      {children}
    </AppBackgroundContext.Provider>
  );
};
