import { IconType } from 'react-icons/lib';

interface Props {
  icon: IconType | string;
  text: string;
}

export const SkillCard = ({ icon, text }: Props) => {
  const Icon = icon;

  return (
    <li className="flex flex-col items-center justify-center gap-2 min-h-[130px] border border-text-secondary text-purple dark:hover:text-white dark:border-purple p-8 rounded-lg cursor-pointer dark:shadow-[0_0_0.5rem_#6366f1] transform transition duration-500 ease-in-out hover:-translate-y-2 dark:hover:bg-purple">
      {typeof icon !== 'string' && <Icon className="w-8 h-8" />}
      <p className="font-bold text-text-primary text-base text-center sm:text-lg">
        {text}
      </p>
    </li>
  );
};
