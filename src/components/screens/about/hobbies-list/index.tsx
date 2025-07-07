import { useTranslations } from 'next-intl';

export const HobbiesList = () => {
  const t = useTranslations('AboutPage');

  const listKey = 'hobbiesList';
  const itemKeys = Object.keys(t.raw(listKey));

  return (
    <ul className="list-disc marker:text-purple font-light text-text-primary ml-10 text-base">
      {itemKeys.map((key) => (
        <li key={key}>{t(`${listKey}.${key}`)}</li>
      ))}
    </ul>
  );
};
