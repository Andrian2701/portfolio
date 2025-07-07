'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { navItems } from './constants';

interface Props {
  isMobileView?: boolean;
  handleDrawerClose?: VoidFunction;
}

export const Navbar = ({ isMobileView = false, handleDrawerClose }: Props) => {
  const t = useTranslations('Header');
  const locale = useLocale();

  return (
    <ul
      className={
        isMobileView
          ? 'flex flex-col items-center justify-center gap-8 h-full w-full'
          : 'hidden sm:flex gap-8'
      }
    >
      {navItems.map((item) => (
        <li key={item.path}>
          <Link
            href={`/${locale}/${item.path}`}
            onClick={handleDrawerClose}
            className={`${isMobileView ? 'text-lg' : 'text-base'} font-light text-text-secondary hover:text-purple`}
          >
            {t(item.path)}
          </Link>
        </li>
      ))}
    </ul>
  );
};
