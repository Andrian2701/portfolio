import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { DropdownMenuItem } from '../ui/dropdown-menu';

interface NavItem {
  name: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    name: 'About me',
    path: 'about',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
];

export const Navbar = ({ isDrop = false }: { isDrop?: boolean }) => {
  const t = useTranslations('Header');
  const locale = useLocale()

  return (
    <ul
      className={
        isDrop ? 'flex flex-col gap-4' : 'hidden sm:flex items-center sm:gap-8'
      }
    >
      {navItems.map((item) => {
        const linkName = t(item.path);
        const path = `/${locale}/${item.path}`

        return isDrop ? (
          <DropdownMenuItem asChild key={item.path}>
            <Link
              href={path}
              className="hover:underline font-light transition delay-150 duration-300 ease-in-out text-primary cursor-pointer"
            >
              {linkName}
            </Link>
          </DropdownMenuItem>
        ) : (
          <Link
            key={item.path}
            href={path}
            className="hover:underline font-light transition delay-150 duration-300 ease-in-out text-primary cursor-pointer"
          >
            {linkName}
          </Link>
        );
      })}
    </ul>
  );
};