"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export const ThemeSwitch = () => {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    const toggleTheme = () => setTheme(resolvedTheme === "light" ? "dark" : "light")

    if (!mounted) {
        return (
            <button className="control-btn" disabled />
        )
    }

    return (
        <button
            className="control-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`}
        >
            <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
        </button>
    )
}
