import { useTranslations } from 'next-intl';

import { MotionImg, HobbiesList } from '@/components/screens/about';

const About = () => {
  const t = useTranslations('AboutPage');

  return (
    <div className="w-full max-w-[800px] text-left p-5 mx-auto flex-auto flex flex-col gap-8 z-20">
      <h1 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-wide mt-12">
        {t('title')}
      </h1>
      <div className="flex flex-col gap-6">
        <h2 className="text-purple font-semibold text-lg sm:text-xl tracking-wide">
          {t('about')}
        </h2>
        <p className="font-light text-base text-text-primary">
          {t('description')}
        </p>
        <MotionImg
          src="/images/about-page-1.jpg"
          alt="About page image 1"
          className="rounded-lg w-full max-w-3xs sm:max-w-xs max-h-1/2 object-cover mx-auto"
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-purple font-semibold text-lg sm:text-xl tracking-wide">
          {t('myHobbies')}
        </p>
        <p className="font-light text-primary">{t('iLike')}</p>
        <HobbiesList />
      </div>
    </div>
  );
};

export default About;
