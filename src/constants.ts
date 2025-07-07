import { FaTelegramPlane } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiReactquery } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';

interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  {
    name: 'About me',
    path: 'about',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
];

interface SocialsLink {
  path: string;
  label: string;
  icon: IconType;
}

export const socialsLinks: SocialsLink[] = [
  {
    path: 'https://www.linkedin.com/in/andrian-smetaniuk-303239277',
    label: 'LinkedIn',
    icon: FaLinkedinIn,
  },
  {
    path: 'https://github.com/Andrian2701',
    label: 'GitHub',
    icon: FiGithub,
  },
  {
    path: 'https://t.me/andrian_2701',
    label: 'Telegram',
    icon: FaTelegramPlane,
  },
];

interface SkillItem {
  icon: IconType | string;
  text: string;
}

export const skills: SkillItem[] = [
  { icon: FaHtml5, text: 'HTML' },
  { icon: FaCss3Alt, text: 'CSS' },
  { icon: '', text: 'SCSS' },
  { icon: FaJsSquare, text: 'JavaScript' },
  { icon: '', text: 'TypeScript' },
  { icon: FaReact, text: 'React' },
  { icon: '', text: 'Next.js' },
  { icon: SiRedux, text: 'Redux' },
  { icon: '', text: 'Zustand' },
  { icon: SiReactquery, text: 'React Query' },
  { icon: '', text: 'React Hook Form' },
  { icon: SiTailwindcss, text: 'Tailwind' },
  { icon: '', text: 'Material UI' },
  { icon: '', text: 'Shadcn UI' },
  { icon: FaGitAlt, text: 'Git' },
  { icon: FaDocker, text: 'Docker' },
  { icon: SiFirebase, text: 'Firebase' },
  { icon: '', text: 'RestApi' },
];
