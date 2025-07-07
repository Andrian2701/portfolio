import { useTranslations } from 'next-intl';
import Link from 'next/link';

const NotFound = () => {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center justify-center flex-auto">
      <div className="flex flex-col gap-8">
        <h1 className="text-text-hover text-center font-bold text-[40px] sm:text-[45px] tracking-wide">
          404
        </h1>
        <div className="flex flex-col items-center gap-4">
          <p className="font-light text-base text-text-primary">
            {t('notFoundTitle')}
          </p>
          <Link
            href="/"
            className="underline font-light text-text-hover hover:text-indigo-500 text-base"
          >
            {t('redirectHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
