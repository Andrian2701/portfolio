import { IconType } from 'react-icons/lib';
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

interface SkillItemInterface {
  icon: IconType | string;
  text: string;
}

export const skills: SkillItemInterface[] = [
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
