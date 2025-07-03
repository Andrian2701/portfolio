"use client";

import { ReactNode, useState, createContext, useContext } from "react";

export type BackgroundType = "beams" | "beams-collision";

const BackgroundContext = createContext<{
  bg: BackgroundType;
  setBg: (bg: BackgroundType) => void;
} | null>(null);

export const useBackground = () => {
  const context = useContext(BackgroundContext);

  if (!context) {
    throw new Error("useBackground must be used within BackgroundProvider");
  }

  return context;
};

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [bg, setBg] = useState<BackgroundType>(() => {
    const savedBg = localStorage.getItem("bg") as BackgroundType;
    return savedBg
      ? savedBg
      : "beams";
  });

  return (
    <BackgroundContext.Provider value={{ bg, setBg }}>
      {children}
    </BackgroundContext.Provider>
  );
};
