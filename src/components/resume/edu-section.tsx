import { useTranslations } from 'next-intl';
import React from 'react';

const keys = ['edu-1'] as const;

export const EduSection = () => {
  const t = useTranslations('ResumePage');

  return (
    <>
      {keys.map((key) => (
        <div className="flex flex-col gap-6" key={key}>
          <h2 className="text-primary font-semibold text-[15px] sm:text-[25px] tracking-wide underline">
            {t(`edu.${key}.eduPlace`)}
          </h2>
          <p className="font-semibold text-primary text-sm">
            {t(`edu.${key}.duration`)}
          </p>
          <p className="font-light text-primary">{t(`edu.${key}.details`)}</p>
        </div>
      ))}
    </>
  );
};
