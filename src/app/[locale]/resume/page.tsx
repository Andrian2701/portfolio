import { useTranslations } from 'next-intl';

import {
  EducationList,
  ResumePdfFile,
  WorkExperienceList,
} from '@/components/screens/resume';
import { Separator } from '@/components/ui/separator';

const Resume = () => {
  const t = useTranslations('ResumePage');

  return (
    <div className="w-full max-w-[800px] text-left p-5 mx-auto flex-auto flex flex-col gap-8 z-20">
      <h1 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-wide mt-12">
        {t('title')}
      </h1>
      <div className="flex flex-col gap-6">
        <h2 className="text-text-primary font-semibold text-lg sm:text-xl tracking-wide">
          {t('workExperience')}
        </h2>
        <WorkExperienceList />
      </div>
      <Separator className="bg-[#dbd9d9]" />
      <h1 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-wide mt-12">
        {t('education')}
      </h1>
      <EducationList />
      <Separator className="bg-[#dbd9d9]" />
      <ResumePdfFile />
    </div>
  );
};

export default Resume;
