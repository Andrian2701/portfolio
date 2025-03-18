'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export const LocaleSwitch = () => {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('LocaleSwitcher');
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isPending}>
        <span className="flex items-center cursor-pointer">
          {t("locale", { locale })}
          <MdOutlineKeyboardArrowDown className="text-primary" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#fafafa] p-2 mt-2 sm:mt-4 ml-10 sm:ml-0 w-auto min-w-[80px]">
        {routing.locales.map((cur) => (
          <DropdownMenuItem key={cur} onClick={() => onLangChange({ target: { value: cur } })} className="flex justify-center cursor-pointer hover:underline transition delay-150 duration-300 ease-in-out">
            {t("locale", { locale: cur })}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
