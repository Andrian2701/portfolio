import { JSX } from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { FiGithub } from 'react-icons/fi';
import { FaSquareInstagram } from 'react-icons/fa6';
import { LuLinkedin } from 'react-icons/lu';
import { useTranslations } from 'next-intl';

interface SmLink {
  icon: JSX.Element;
  path: string;
  label: string
}

const smLinks: SmLink[] = [
  {
    icon: <LuLinkedin aria-hidden="true" />,
    path: 'https://www.linkedin.com/in/andrian-smetaniuk-303239277',
    label: 'LinkedIn',
  },
  {
    icon: <FiGithub aria-hidden="true" />,
    path: 'https://github.com/Andrian2701',
    label: 'GitHub',
  },
  {
    icon: <FaSquareInstagram aria-hidden="true" />,
    path: 'https://www.instagram.com/andrian_smetaniuk',
    label: 'Instagram',
  },
];

export const Hero = () => {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-8">
        <Avatar className="w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] overflow-hidden aspect-square">
          <AvatarImage
            src="/assets/me/profile.jpeg"
            className="w-full h-full object-cover"
          />
        </Avatar>
        <h1 className="text-primary font-bold text-[25px] sm:text-[37px] tracking-wide">
          {t('name')}
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="font-light text-primary">{t('position')}</p>
        <div className="flex gap-6">
          {smLinks.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-primary text-[22.5px] cursor-pointer"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};