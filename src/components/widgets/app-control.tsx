import { GiSplash } from "react-icons/gi";
import { GiSplashyStream } from "react-icons/gi";

import { BackgroundType, useBackground } from "../../providers/background-provider";
import { ThemeSwitch } from "./theme-switch";
import { LocaleSwitch } from "@/components/widgets/locale-switch";

export const AppControl = () => {
    const { setBg } = useBackground();

    const handleSetBackground = (bg: BackgroundType) => {
        setBg(bg)
        localStorage.setItem("bg", bg)
    }

    return (
        <ul className="flex flex-col gap-2 absolute z-10 top-[50%] right-0 md:right-10 -translate-x-1/2 -translate-y-1/2">
            <LocaleSwitch />
            <ThemeSwitch />
            <button className="control-btn" onClick={() => handleSetBackground('beams')}>
                <GiSplashyStream className="h-[1.2rem] w-[1.2rem]" />
            </button>
            <button
                className="control-btn"
                onClick={() => handleSetBackground('beams-collision')}
            >
                <GiSplash className="h-[1.2rem] w-[1.2rem]" />
            </button>

        </ul>
    );
};