import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('HomePage');

  return (
    <footer className="p-4 sm:p-6 w-full">
      <p className="font-light text-sm sm:text-base text-text-secondary text-center tracking-wide">
        © {new Date().getFullYear()} - {t('name')}
      </p>
    </footer>
  );
};
