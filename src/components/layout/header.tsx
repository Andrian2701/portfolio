import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { FaTerminal } from "react-icons/fa6";

import { Navbar } from './navbar';
import { DrawerMenu } from './drawer-menu';

export const Header = () => {
  const t = useTranslations('Header');
  const locale = useLocale();

  return (
    <header className="p-4 sm:p-6 w-full z-20">
      <nav className="flex justify-between mx-auto w-full max-w-3xl">
        <Link href={`/${locale}`} className='flex items-center gap-2 text-sm sm:text-lg'>
          <FaTerminal className='text-text-hover' />
          <span className='font-bold text-text-primary'>{t('logo')}</span>
        </Link>
        <Navbar />
        <DrawerMenu />
      </nav>
    </header>
  );
};

