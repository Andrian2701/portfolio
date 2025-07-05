import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import { ThemeProvider } from "@/providers/theme-provider";
import { AppBackgroundProvider } from "@/providers/app-background-provider";
import { AppWrapper } from "@/providers/app-wrapper";

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
                    <AppWrapper>
                        {children}
                    </AppWrapper>
                </AppBackgroundProvider>
            </ThemeProvider>
        </NextIntlClientProvider>
    )
}
