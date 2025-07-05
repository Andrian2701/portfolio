import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaTerminal } from "react-icons/fa6";

import { Navbar } from './navbar';
import { HamburgerMenu } from './hamburger-menu';

export const Header = () => {
  const t = useTranslations('Header');

  return (
    <header className="p-4 sm:p-6 w-full">
      <nav className="flex justify-between mx-auto w-full max-w-3xl">
        <Link href='/' className='flex items-center gap-2 text-sm sm:text-lg'>
          <FaTerminal className='text-text-hover' />
          <span className='font-bold text-text-primary'>{t('logo')}</span>
        </Link>
        <Navbar />
        <HamburgerMenu />
      </nav>
    </header>
  );
};

