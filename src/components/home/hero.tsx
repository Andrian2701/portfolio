import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { socialsLinks } from '@/constants';
import { Avatar, AvatarImage } from '../ui/avatar';

export const Hero = () => {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col gap-8 z-20">
      <div className="flex flex-col items-center gap-8">
        <Avatar className="w-52 h-52 sm:w-60 sm:h-60">
          <AvatarImage
            src="/assets/me/profile.jpeg"
            alt={t('name')}
            className="w-full h-full object-cover"
          />
        </Avatar>
        <h1 className="text-text-primary font-bold text-2xl sm:text-4xl tracking-wide">
          {t('name')}
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="font-light text-text-hover text-base tracking-wide">
          {t('position')}
        </p>
        <div className="flex gap-8">
          {socialsLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.path}
                target="_blank"
                aria-label={item.label}
                className="text-text-secondary text-lg hover:text-text-primary"
              >
                <Icon className="text-2xl" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
