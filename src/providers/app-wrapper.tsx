'use client'

import { ReactNode } from "react";

import { AppControl } from "../components/layout/app-control";
import { BackgroundBeams } from "../components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision.tsx";
import { useAppBackground } from "@/providers/app-background-provider";
import { AppBackgroundEnum } from "@/types";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
    const { appBackground } = useAppBackground();

    return (
        <>
            <AppControl />
            {appBackground === AppBackgroundEnum.beams ? (
                <div className="min-h-screen flex flex-col relative bg-background">
                    {children}
                    <BackgroundBeams />
                </div>
            ) : (
                <BackgroundBeamsWithCollision className="min-h-screen flex flex-col relative bg-background">
                    {children}
                </BackgroundBeamsWithCollision>
            )}
        </>
    );
};