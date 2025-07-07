import { useTranslations } from 'next-intl';

import { SkillCard } from '@/components/screens/skills/skill-card';
import { skills } from '@/components/screens/skills/constants';

const Skills = () => {
  const t = useTranslations('SkillsPage');

  return (
    <div className="w-full max-w-[800px] text-left p-5 mx-auto flex-auto flex flex-col gap-8 z-20">
      <h1 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-wide mt-12">
        {t('skills')}
      </h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((item) => (
          <SkillCard key={item.text} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
