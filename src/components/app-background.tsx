'use client'

import { ReactNode } from "react";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision.tsx";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AppControl } from "./widgets/app-control";
import { useAppBackground } from "@/providers/app-background-provider";
import { AppBackgroundEnum } from "@/types";

export const AppBackground = ({ children }: { children: ReactNode }) => {
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