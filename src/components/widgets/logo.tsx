'use client';

import { useEffect, useRef } from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Typed from 'typed.js';

export const Logo = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const t = useTranslations('Header');
  const locale = useLocale()

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [t('logo')],
        typeSpeed: 25,
        showCursor: false,
        loop: false,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <Link
      href={`/${locale}`}
      className={`flex items-center gap-1 font-mono font-semibold text-primary text-[12.5px] md:text-[16.5px] tracking-widest`}
    >
      <VscChevronRight />
      <span ref={typedRef} className='inline-block' />
      <span
        className="text-[#ff4f81] animate-blink"
      >
        █
      </span>
    </Link >
  );
};
