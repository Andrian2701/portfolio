import { Separator } from "@/components/ui/separator";
import { WorkSection } from "./work-section";
import { EduSection } from "./edu-section";
import { useTranslations } from 'next-intl';

export const ResumeContainer = () => {
  const t = useTranslations('ResumePage');

  return (
    <div className="w-full max-w-[800px] text-left mx-auto flex-auto flex flex-col gap-8">
      <h1 className="text-primary font-bold text-[30px] sm:text-[37px] tracking-wide mt-12">
        {t('title')}
      </h1>
      <div className="flex flex-col gap-6">
        <h2 className="text-primary font-semibold text-[25px] sm:text-[30px] tracking-wide">
          {t('workExperience')}
        </h2>
        <WorkSection />
      </div>

      <Separator className="bg-[#dbd9d9]" />

      <h1 className="text-primary font-bold text-[30px] sm:text-[37px] tracking-wide">
        {t('education')}
      </h1>
      <EduSection />
    </div>
  );
};