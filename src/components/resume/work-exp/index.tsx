import { useTranslations } from 'next-intl';
import Link from 'next/link';

const keys = ['work-2', 'work-1'];

export const WorkExperience = () => {
  const t = useTranslations('ResumePage');

  return (
    <ul className="flex flex-col">
      {keys.map((key) => (
        <li key={key} className="flex flex-col gap-6">
          <Link
            href={t(`work.${key}.companyLink`)}
            target="_blank"
            className="flex items-center gap-2 underline text-text-hover hover:text-indigo-500 font-light text-base tracking-wide min-w-fit"
          >
            {t(`work.${key}.company`)}
          </Link>
          <p className="font-semibold text-primary text-sm">
            {t(`work.${key}.employmentDetails`)}
          </p>
          <p className="font-light text-text-primary text-base">
            {t(`work.${key}.details`)}
          </p>
        </li>
      ))}
    </ul>
  );
};
