import { useTranslations } from 'next-intl';
import Link from 'next/link';

const NotFound = () => {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center justify-center flex-auto">
      <div className="flex flex-col gap-8">
        <h1 className="text-primary text-center font-bold text-[40px] sm:text-[45px] tracking-wide">
          404
        </h1>
        <div className="flex flex-col items-center gap-4">
          <p className="font-light text-primary">{t('notFoundTitle')}</p>
          <Link
            href="/"
            className="hover:underline font-light transition delay-150 duration-300 ease-in-out text-primary cursor-pointer"
          >
            {t('redirectHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
