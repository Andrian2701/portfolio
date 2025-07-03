import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import { BackgroundWrapper } from "../components/background-wrapper";
import { ThemeProvider } from "@/providers/theme-provider";
import { BackgroundProvider } from "@/providers/background-provider";

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
                <BackgroundProvider>
                    <BackgroundWrapper>
                        {children}
                    </BackgroundWrapper>
                </BackgroundProvider>
            </ThemeProvider>
        </NextIntlClientProvider>
    )
}
