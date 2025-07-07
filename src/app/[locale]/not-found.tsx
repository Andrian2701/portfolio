import { useTranslations } from 'next-intl';
import Link from 'next/link';

const NotFound = () => {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center justify-center flex-auto z-20">
      <div className="flex flex-col gap-8">
        <h1 className="text-purple text-center font-bold text-3xl tracking-wide">
          404
        </h1>
        <div className="flex flex-col items-center gap-4">
          <p className="font-light text-base text-text-primary">
            {t('notFoundTitle')}
          </p>
          <Link
            href="/"
            className="underline font-light text-purple hover:text-dark-purple text-base"
          >
            {t('redirectHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
