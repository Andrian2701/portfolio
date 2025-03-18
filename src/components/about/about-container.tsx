import { PreferenceList } from "./preference-list";
import { MotionImage } from "./motion-image";
import { useTranslations } from "next-intl";
import { Separator } from "../ui/separator";

export const AboutContainer = () => {
  const t = useTranslations('AboutPage');

  return (
    <>
      <h1 className="text-primary font-bold text-[30px] sm:text-[37px] tracking-wide mt-12">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-6">
        <h2 className="text-primary font-semibold text-[25px] sm:text-[30px] tracking-wide">
          {t("about")}
        </h2>
        <p className="font-light text-primary">
          {t("description")}
        </p>
        <MotionImage src="/assets/me/about-1.jpg" />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-primary font-semibold text-[25px] sm:text-[30px] tracking-wide">
          {t("extendedVersion")}
        </h2>
        <p className="font-bold text-primary text-[18px]">{t("whereImFrom")}</p>
        <p className="font-light text-primary">
          {t("whereImFromDescription")}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <p className="font-bold text-primary text-[18px]">{t("preferences")}</p>
        <p className="font-light text-primary">{t("iLike")}</p>
        <PreferenceList isLike />
      </div>

      <div className="flex flex-col gap-6">
        <p className="font-bold text-primary text-[18px]">{t("dislikes")}</p>
        <p className="font-light text-primary">{t("iDislike")}</p>
        <PreferenceList />
        <Separator className="bg-[#dbd9d9]" />
      </div>
    </>
  );
};
