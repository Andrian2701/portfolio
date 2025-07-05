import { GiSplash } from "react-icons/gi";
import { GiSplashyStream } from "react-icons/gi";

import { ThemeSwitch } from "./theme-switch";
import { LocaleSwitch } from "@/components/widgets/locale-switch";
import { useAppBackground } from "@/providers/app-background-provider";
import { AppBackgroundEnum } from "../../types";

export const AppControl = () => {
    const { setAppBackground } = useAppBackground();

    const handleSetAppBackground = (bg: AppBackgroundEnum) => {
        setAppBackground(bg)

        try {
            localStorage.setItem("app-background", bg)
        } catch (err) {
            console.error("error:", err)
        }
    }

    return (
        <div className="flex sm:flex-col gap-4 fixed z-20 left-1/2 -translate-x-1/2 bottom-14 sm:left-auto sm:translate-x-0 sm:bottom-auto sm:top-1/2 sm:right-10 sm:-translate-y-1/2">
            <LocaleSwitch />
            <ThemeSwitch />
            <button aria-label="Set streaming beams background" className="control-btn" onClick={() => handleSetAppBackground(AppBackgroundEnum.beams)}>
                <GiSplashyStream className="text-2xl" />
            </button>
            <button
                aria-label="Set beams collision background"
                className="control-btn"
                onClick={() => handleSetAppBackground(AppBackgroundEnum.collision)}
            >
                <GiSplash className="text-2xl" />
            </button>
        </div>
    );
};