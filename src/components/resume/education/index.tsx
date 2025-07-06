import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const keys = ['edu-1'];

export const Education = () => {
  const t = useTranslations('ResumePage');

  return (
    <ul className="flex flec-col">
      {keys.map((key) => (
        <li className="flex flex-col gap-6" key={key}>
          <Link
            href={t(`edu.${key}.eduPlaceLink`)}
            target="_blank"
            className="text-text-hover hover:text-indigo-500 font-light text-base tracking-wide underline"
          >
            {t(`edu.${key}.eduPlace`)}
          </Link>
          <p className="font-semibold text-primary text-sm">
            {t(`edu.${key}.duration`)}
          </p>
          <p className="font-light text-text-primary text-base">
            {t(`edu.${key}.details`)}
          </p>
        </li>
      ))}
    </ul>
  );
};
