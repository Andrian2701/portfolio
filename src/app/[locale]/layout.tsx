import { Inter } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { Header } from "@/components/widgets/header";
import { Footer } from "@/components/ui/footer";
import { Providers } from "../../providers/providers";
import { LocaleType } from "@/types";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    openGraph: {
      title,
      description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      images: ""
    }
  };
}

const RootLayout = async ({
  children,
  params
}: { children: React.ReactNode, params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as LocaleType)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  );
}

export default RootLayout
