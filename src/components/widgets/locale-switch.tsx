'use client';

import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';

const localeCycle = {
  en: 'uk',
  uk: 'jp',
  jp: 'en'
};

export const LocaleSwitch = () => {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onLangChange = (event: { target: { value: string } }) => {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <button
      disabled={isPending}
      className="control-btn"
      onClick={() => {
        onLangChange({ target: { value: localeCycle[locale as keyof typeof localeCycle] || routing.locales[0] } });
      }}>
      {locale.toUpperCase()}
    </button >
  );
};
