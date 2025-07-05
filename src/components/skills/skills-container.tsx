import { useTranslations } from 'next-intl';

import { SkillCard } from './skill-card';
import { skills } from '@/constants';

export const SkillsContainer = () => {
  const t = useTranslations('SkillsPage');

  return (
    <>
      <h1 className="text-primary font-bold text-[30px] sm:text-[37px] tracking-wide mt-12">
        {t("skills")}
      </h1>
      {skills.map(({ title, data }) => (
        <div key={title}>
          <p className="text-lg font-light text-primary">{t(`skillCategories.${title}`)}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 justify-center items-center">
            {data.map((item) => (
              <SkillCard key={item.text} image={item.img} text={item.text} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

