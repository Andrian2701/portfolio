import { useTranslations } from 'next-intl';

export const PreferenceList = ({ isLike = false }: { isLike: boolean }) => {
  const t = useTranslations('AboutPage');

  const listKey = isLike ? 'preferencesList' : 'dislikesList';
  const itemKeys = Object.keys(t.raw(listKey));

  return (
    <ul className="list-disc font-light text-primary ml-10">
      {itemKeys.map((key) => (
        <li key={key}>{t(`${listKey}.${key}`)}</li>
      ))}
    </ul>
  );
};
