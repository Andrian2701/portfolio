import { useTranslations } from 'next-intl';
import React from 'react';

const keys = ['work-1'] as const;

export const WorkSection = () => {
  const t = useTranslations('ResumePage');

  return (
    <>
      {keys.map((key) => (
        <React.Fragment key={key}>
          <h2 className="text-primary font-semibold text-[15px] sm:text-[25px] tracking-wide underline">
            {t(`work.${key}.company`)}
          </h2>
          <p className="font-semibold text-primary text-sm">
            {t(`work.${key}.employmentDetails`)}
          </p>
          <p className="font-light text-primary">{t(`work.${key}.details`)}</p>
        </React.Fragment>
      ))}
    </>
  );
};
