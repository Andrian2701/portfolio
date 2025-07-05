'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

import { LocaleType } from '@/types';

export const LocaleSwitch = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = () => {
    const currentIndex = routing.locales.indexOf(locale as LocaleType);
    const nextIndex = (currentIndex + 1) % routing.locales.length;

    router.push(pathname, { locale: routing.locales[nextIndex] });
  };

  return (
    <button className="control-btn" onClick={switchLang}>
      {locale.toUpperCase()}
    </button>
  );
};