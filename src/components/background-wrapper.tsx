'use client'

import { ReactNode } from "react";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision.tsx";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useBackground } from "@/providers/background-provider";
import { AppControl } from "./widgets/app-control";

export const BackgroundWrapper = ({ children }: { children: ReactNode }) => {
    const { bg } = useBackground();

    return (
        <>
            <AppControl />
            {bg === 'beams' ? (
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