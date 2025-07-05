import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import { ThemeProvider } from "@/providers/theme-provider";
import { AppBackgroundProvider } from "@/providers/app-background-provider";
import { AppBackground } from "@/components/app-background";

export const Providers = async ({ children }: { children: ReactNode }) => {
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <AppBackgroundProvider>
                    <AppBackground>
                        {children}
                    </AppBackground>
                </AppBackgroundProvider>
            </ThemeProvider>
        </NextIntlClientProvider>
    )
}
